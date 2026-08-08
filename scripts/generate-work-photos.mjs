import fs from 'node:fs';
import path from 'node:path';

const html = fs.readFileSync(
  new URL('../temp-our-work.html', import.meta.url),
  'utf8',
);

const urlPattern =
  /https:\/\/ecoheatashp\.co\.uk\/wp-content\/uploads\/[^"'\s>]+\.jpg/gi;
const exclude =
  /logo|mcs|napit|fgas|mitsubishi-ecodan|ipaf|pasma|refcom|panasonic|craftsman|certified|Logo-final/i;

const urls = [...new Set(html.match(urlPattern) ?? [])]
  .filter((url) => !exclude.test(url))
  .sort();

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

const photos = urls.map((url, index) => {
  const { caption, alt } = captionFromUrl(url);
  return {
    src: `/work/W${index + 1}.jpg`,
    alt,
    caption,
  };
});

const heroImages = {
  home: '/work/W167.jpg', // outside.jpg — clean outdoor ASHP unit
  ashp: '/work/W151.jpg', // ashp-system-outside.jpg
  underfloor: '/work/W173.jpg', // underfloor-heating-1.jpg
  ac: '/work/W161.jpg', // detached-house.jpg — property install
  servicing: '/work/W149.jpg', // ashp-system-indoors.jpg — plant room
};

// Curated preview indices (skip resolution duplicates in the first pass)
const galleryPreviewIndices = [0, 150, 142, 172, 160, 148];
const galleryPreview = galleryPreviewIndices.map((i) => photos[i]);

const output = `// Auto-generated from EcoHeat Our Work page scrape — ${photos.length} photos (W1–W${photos.length})
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
console.log(`Generated ${photos.length} work photos -> src/data/work-photos.ts`);
console.log('Hero picks:', heroImages);
