import fs from 'node:fs';

const SOURCE_URL = 'https://ecoheatashp.co.uk/our-work/';
const urlPattern =
  /https:\/\/ecoheatashp\.co\.uk\/wp-content\/uploads\/[^"'\s>]+\.jpg/gi;
const exclude =
  /logo|mcs|napit|fgas|mitsubishi-ecodan|ipaf|pasma|refcom|panasonic|craftsman|certified|Logo-final/i;

function dedupeUrls(urls) {
  const bases = [
    ...new Set(
      urls.map((url) => url.replace(/-\d+x\d+(?=\.jpg$)/i, '')),
    ),
  ].sort();
  return bases;
}

function captionFromUrl(url) {
  const file = url.split('/').pop()?.toLowerCase() ?? '';

  if (file.includes('nibeair') || file.includes('heat-pump-out'))
    return {
      caption: 'NIBE air source heat pump — outdoor unit',
      alt: 'NIBE air source heat pump outdoor unit installed at a residential property',
    };
  if (file.includes('outside') || file.includes('outdoor') || file.includes('ashp-system-outside'))
    return {
      caption: 'Air source heat pump — outdoor unit',
      alt: 'Outdoor air source heat pump unit installed by Ecoheat',
    };
  if (file.includes('detached-house'))
    return {
      caption: 'ASHP installation — detached property',
      alt: 'Air source heat pump installed at a detached Lancashire property',
    };
  if (file.includes('water-cylinder'))
    return {
      caption: 'Hot water cylinder — ASHP installation',
      alt: 'Domestic hot water cylinder installed with an air source heat pump system',
    };
  if (file.includes('underfloor') || file.includes('big-ufh') || file.includes('ufh'))
    return {
      caption: 'Underfloor heating installation',
      alt: 'Underfloor heating pipework and installation by Ecoheat',
    };
  if (file.includes('indoor') || file.includes('cupboard') || file.includes('small-space'))
    return {
      caption: 'Indoor plant room — heat pump equipment',
      alt: 'Indoor air source heat pump plant room installation with pipework',
    };
  if (file.includes('ashp-system'))
    return {
      caption: 'Air source heat pump system installation',
      alt: 'Complete air source heat pump system installed by Ecoheat',
    };
  if (file.includes('bedroom'))
    return {
      caption: 'Air conditioning — indoor unit',
      alt: 'Indoor air conditioning unit installed in a bedroom',
    };

  return {
    caption: 'Renewable heating installation',
    alt: 'Renewable heating installation completed by Eco Heat ASHP Ltd',
  };
}

function findPhotoIndex(urls, pattern) {
  const index = urls.findIndex((url) => pattern.test(url.split('/').pop() ?? ''));
  return index >= 0 ? index + 1 : 1;
}

const html = await fetch(SOURCE_URL).then((response) => response.text());
const allUrls = [...html.matchAll(urlPattern)].map((match) => match[0]);
const bases = dedupeUrls(allUrls.filter((url) => !exclude.test(url)));

const photos = bases.map((url, index) => {
  const { caption, alt } = captionFromUrl(url);
  return {
    src: `/work/W${index + 1}.jpg`,
    alt,
    caption,
  };
});

const heroImages = {
  home: `/work/W${findPhotoIndex(bases, /outside\.jpg$/i)}.jpg`,
  ashp: `/work/W${findPhotoIndex(bases, /ashp-system-outside\.jpg$/i)}.jpg`,
  underfloor: `/work/W${findPhotoIndex(bases, /underfloor-heating-1\.jpg$/i)}.jpg`,
  ac: `/work/W${findPhotoIndex(bases, /detached-house\.jpg$/i)}.jpg`,
  servicing: `/work/W${findPhotoIndex(bases, /ashp-system-indoors\.jpg$/i)}.jpg`,
};

const previewPatterns = [
  /nibeair|heat-pump-out/i,
  /ashp-system-outside/i,
  /water-cylinder/i,
  /underfloor-heating-1/i,
  /detached-house/i,
  /ashp-system-indoors/i,
];

const galleryPreview = previewPatterns.map((pattern, order) => {
  const index = bases.findIndex((url) => pattern.test(url.split('/').pop() ?? ''));
  return photos[index >= 0 ? index : order] ?? photos[0];
});

const output = `// Auto-generated from EcoHeat Our Work page scrape — ${photos.length} unique photos (W1–W${photos.length})
// Regenerate: node scripts/generate-work-photos.mjs

export interface WorkPhoto {
  src: string;
  alt: string;
  caption: string;
}

export const workPhotoCount = ${photos.length};

export const heroImages = ${JSON.stringify(heroImages, null, 2)} as const;

export const galleryPreview: WorkPhoto[] = ${JSON.stringify(galleryPreview, null, 2)};

export const workPhotos: WorkPhoto[] = ${JSON.stringify(photos, null, 2)};
`;

fs.writeFileSync('src/data/work-photos.ts', output);
console.log(`Generated ${photos.length} unique work photos -> src/data/work-photos.ts`);
console.log('Hero picks:', heroImages);
