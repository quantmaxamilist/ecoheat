export const site = {
  name: 'Eco Heat ASHP Ltd',
  tagline: 'Renewable heating specialists across Lancashire and the North West',
  phone: '07949 570392',
  phoneHref: 'tel:+447949570392',
  email: 'andy@ecoheatashp.co.uk',
  emailHref: 'mailto:andy@ecoheatashp.co.uk',
  address: {
    line1: '14 Briery Close, Fulwood',
    line2: 'Preston, Lancashire PR2 6XU',
    full: '14 Briery Close, Fulwood, Preston, Lancashire PR2 6XU',
  },
  url: 'https://ecoheatashp.co.uk',
  coverage: '30-mile radius of Preston / across the North West',
} as const;

export const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services/air-source-heat-pumps',
    children: [
      { label: 'Air Source Heat Pumps', href: '/services/air-source-heat-pumps' },
      { label: 'Solar', href: '/services/solar' },
      { label: 'Underfloor Heating', href: '/services/underfloor-heating' },
      { label: 'Air Conditioning & Ventilation', href: '/services/air-conditioning-ventilation' },
      { label: 'Servicing', href: '/services/servicing' },
    ],
  },
  { label: 'Our Work', href: '/our-work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const trustItems = [
  'MCS Certified',
  "25+ Years' Experience",
  'Boiler Upgrade Scheme Grants',
  '5★ Customer Reviews',
] as const;

export type ServiceIcon = 'heat-pump' | 'solar' | 'underfloor' | 'air-con' | 'servicing';

export interface ServiceCard {
  icon: ServiceIcon;
  title: string;
  description: string;
  href: string;
}

export const services: ServiceCard[] = [
  {
    icon: 'heat-pump',
    title: 'Air Source Heat Pumps',
    description: 'Efficient renewable heating for any home',
    href: '/services/air-source-heat-pumps',
  },
  {
    icon: 'solar',
    title: 'Solar',
    description: 'Generate your own clean electricity',
    href: '/services/solar',
  },
  {
    icon: 'underfloor',
    title: 'Underfloor Heating',
    description: 'Even, comfortable warmth underfoot',
    href: '/services/underfloor-heating',
  },
  {
    icon: 'air-con',
    title: 'Air Conditioning & Ventilation',
    description: 'Cooling, heating and fresh, healthy air',
    href: '/services/air-conditioning-ventilation',
  },
  {
    icon: 'servicing',
    title: 'Servicing',
    description: 'Keep your system running at its best',
    href: '/services/servicing',
  },
];

export const whyRenewable = [
  'Cut your carbon footprint with cleaner energy',
  'Lower your energy bills with efficient systems',
  'Create a more sustainable home for the future',
] as const;

export const reasonsToSwitch = [
  {
    title: 'Lower running costs',
    description: 'Modern renewable systems use less energy than traditional heating, helping reduce monthly bills.',
  },
  {
    title: 'Warmer, more even heat',
    description: 'Heat pumps and underfloor heating deliver consistent comfort without cold spots.',
  },
  {
    title: 'Lower carbon footprint',
    description: 'Switch away from fossil fuels and reduce your home\'s environmental impact.',
  },
  {
    title: 'Future-proof + grants',
    description: 'Take advantage of the Boiler Upgrade Scheme and stay ahead of rising energy costs.',
  },
] as const;

export const reviews = [
  {
    name: 'Lee Gordon',
    quote:
      'Absolutely brilliant service from the guys. Andy is a top bloke, explained everything brilliantly.',
  },
  {
    name: 'Zoe Louise',
    quote:
      "Ecoheat responded when other companies didn't. Turned up on time and was respectful about removing shoes.",
  },
  {
    name: 'Elaine Madden',
    quote:
      'I can highly recommend these guys. Excellent expert service, great value and really pleasant to deal with.',
  },
] as const;

export interface WorkPhoto {
  src: string;
  alt: string;
  caption: string;
}

export const workPhotos: WorkPhoto[] = [
  {
    src: '/work/W1.jpg',
    alt: 'Mitsubishi 8.5kW Ecodan air source heat pump installed outside a residential property',
    caption: 'Mitsubishi 8.5kW Ecodan ASHP',
  },
  {
    src: '/work/W2.jpg',
    alt: 'Panasonic 16kW air source heat pump retrofit installation',
    caption: 'Panasonic 16kW ASHP retrofit',
  },
  {
    src: '/work/W3.jpg',
    alt: 'Outdoor unit of a twin-split Fujitsu air conditioning system',
    caption: 'Twin-split Fujitsu AC',
  },
  {
    src: '/work/W4.jpg',
    alt: 'Indoor air conditioning unit installed in a commercial space',
    caption: 'Four Fujitsu splits — commercial',
  },
  {
    src: '/work/W5.jpg',
    alt: 'Mitsubishi cascade air source heat pump system providing heating and hot water',
    caption: 'Mitsubishi cascade ASHP — heating & hot water',
  },
  {
    src: '/work/W6.jpg',
    alt: 'Underfloor heating pipework installed alongside an air source heat pump system',
    caption: 'Underfloor heating + ASHP with hot water',
  },
  {
    src: '/work/W7.jpg',
    alt: 'Large underfloor heating installation in progress',
    caption: 'Large underfloor heating system',
  },
  {
    src: '/work/W8.jpg',
    alt: 'Air source heat pump installation with domestic hot water cylinder',
    caption: 'ASHP with hot water cylinder',
  },
  {
    src: '/work/W9.jpg',
    alt: 'Air source heat pump installed in a compact indoor plant room',
    caption: 'Compact indoor plant room install',
  },
  {
    src: '/work/W10.jpg',
    alt: 'Air source heat pump installed at a detached Lancashire property',
    caption: 'Detached property ASHP install',
  },
  {
    src: '/work/W11.jpg',
    alt: 'Panasonic bi-bloc 12kW air source heat pump in a small indoor space',
    caption: 'Panasonic bi-bloc 12kW',
  },
];

export const faqs = [
  {
    question: 'Can I get a government grant?',
    answer:
      'The Boiler Upgrade Scheme (BUS) helps with the upfront cost of a heat pump for space heating and hot water — simpler than the old RHI.',
  },
  {
    question: 'How does an air source heat pump work?',
    answer:
      'It transfers heat from the outside air indoors using a refrigerant system, then heats it to temperature for warm air or hot water.',
  },
  {
    question: 'What does an ASHP cost?',
    answer:
      'Typically £7,000–£12,000 for a well-insulated 3/4-bed house; grants may be available.',
  },
  {
    question: "Do you service systems you didn't install?",
    answer: 'Yes — especially where the original installer is unavailable.',
  },
] as const;

export interface ServiceSection {
  title: string;
  content: string;
  bullets?: string[];
}

export interface ServicePage {
  slug: string;
  icon: ServiceIcon;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  sections: ServiceSection[];
}

export const servicePages: ServicePage[] = [
  {
    slug: 'air-source-heat-pumps',
    icon: 'heat-pump',
    title: 'Air Source Heat Pumps',
    intro: 'Reduce your carbon footprint and bring down your energy costs with an air source heat pump.',
    heroImage: '/work/W1.jpg',
    heroAlt: 'Mitsubishi Ecodan air source heat pump installed at a residential property',
    sections: [
      {
        title: 'Can I get a Government Grant?',
        content:
          'The Renewable Heat Incentive (RHI) ended on 31 March 2022 and was replaced by the Boiler Upgrade Scheme (BUS). The BUS helps with the upfront installation cost for heat pumps providing space heating and hot water — simpler than the old RHI.',
      },
      {
        title: 'How does an ASHP work?',
        content:
          'An air source heat pump transfers heat from the outside air indoors via a refrigerant system — a compressor and condenser heat the refrigerant, which is then used to warm air or water for your home.',
      },
      {
        title: 'What do they look like?',
        content:
          'An ASHP looks similar to an air conditioning unit, sized to your heat demand and insulation. Typically around 1m high × 1m wide × 0.5m deep, fitted outside with good airflow. It feeds an indoor unit in a utility room, airing cupboard or under the stairs.',
      },
      {
        title: 'Maintenance',
        content:
          'An annual service is required to maintain your manufacturer warranty. Ecoheat services air source heat pump units up to 22kW.',
      },
      {
        title: 'Costs',
        content:
          'Installation typically costs £7,000–£12,000 for a well-insulated 3/4-bedroom home. Government grants may be available to reduce the upfront cost.',
      },
    ],
  },
  {
    slug: 'solar',
    icon: 'solar',
    title: 'Solar Energy Technologies',
    intro: 'Generating solar power is one of the safest and best investments you can make.',
    heroImage: '/images/solar-hero.jpg',
    heroAlt: 'Solar panels installed on a residential roof in the UK',
    sections: [
      {
        title: 'Solar PV',
        content:
          'Solar PV panels generate free, clean electricity for your home. We offer high-output systems with strong warranties — consult, bespoke design and installation at your convenience, with detailed jargon-free free quotes.',
      },
      {
        title: 'Guard against future electricity price rises',
        content:
          'As electricity prices rise, your savings grow each year. Solar PV protects you against unpredictable energy costs.',
      },
      {
        title: 'Solar Thermal',
        content:
          'Solar thermal uses solar gain to heat water directly. It works alongside gas, oil or air source heat pump systems to reduce your hot water costs.',
      },
      {
        title: 'Use solar at night',
        content:
          'Battery storage lets you store unused daytime solar power and use it when the sun goes down — maximising self-consumption.',
      },
      {
        title: 'Smart Export Guarantee',
        content:
          'Under the Smart Export Guarantee, energy suppliers must pay you for any solar energy you export back to the grid.',
      },
      {
        title: 'Advantages of PV vs Thermal',
        content:
          'Solar PV generates electricity for all household use and export. Solar thermal focuses on hot water heating. Many homes benefit from one or both, depending on hot water demand and roof space.',
      },
    ],
  },
  {
    slug: 'underfloor-heating',
    icon: 'underfloor',
    title: 'Underfloor Heating Solutions',
    intro: 'We carry out full design, installation and screed overlay.',
    heroImage: '/work/W6.jpg',
    heroAlt: 'Underfloor heating pipework installed as part of a renewable heating project',
    sections: [
      {
        title: 'Why underfloor heating?',
        content:
          'Underfloor heating runs at lower temperatures than radiators, reducing running costs. It pairs perfectly with air source heat pumps for maximum efficiency.',
      },
      {
        title: 'Optimum comfort',
        content:
          'Warm feet and a cool head — underfloor heating heats up to around 3ft from the floor, unlike radiators which create heat pockets at head height.',
      },
      {
        title: 'Design friendly',
        content:
          'Hidden below the floor, underfloor heating frees up wall space with no radiators blocking your interior design.',
      },
      {
        title: 'Timed zone control',
        content:
          'Zone thermostats and per-room scheduling give you precise control over when and where your home is heated.',
      },
      {
        title: 'Floor types',
        content:
          'Underfloor heating works under virtually any floor finish. Conductive materials such as tile and stone perform best.',
      },
      {
        title: 'Ground floor vs upper levels',
        content:
          'Wet systems in subfloors suit new builds. Low-profile wet or electric systems work for existing properties — electric suits upstairs, while wet options are available for suspended timber floors.',
      },
      {
        title: 'Costs',
        content:
          'Costs vary by scope and property. Long-term savings offset the investment — lower temperatures deliver the same warmth with less energy.',
      },
    ],
  },
  {
    slug: 'air-conditioning-ventilation',
    icon: 'air-con',
    title: 'Air Conditioning and Ventilation Systems',
    intro: 'Cooling, heating and fresh, healthy air for your home or business.',
    heroImage: '/work/W3.jpg',
    heroAlt: 'Outdoor unit of a Fujitsu air conditioning split system',
    sections: [
      {
        title: "What's the difference?",
        content:
          'Ventilation mixes inside air with outside air and returns it — improving air quality but not cooling. Air conditioning heats or cools the same internal air and recirculates it.',
      },
      {
        title: 'Air conditioning',
        content:
          'Modern air conditioning systems heat or cool on demand, giving you year-round comfort control in individual rooms or across your property.',
      },
      {
        title: 'Wellbeing',
        content:
          'Good ventilation and air conditioning improve wellbeing and productivity — especially in workspaces and homes where air quality matters.',
      },
    ],
  },
  {
    slug: 'servicing',
    icon: 'servicing',
    title: 'Servicing and Maintenance',
    intro: 'We carry out a full maintenance service on all renewable technologies.',
    heroImage: '/work/W4.jpg',
    heroAlt: 'Indoor renewable heating equipment being serviced by Ecoheat',
    sections: [
      {
        title: 'ASHP servicing',
        content:
          'An annual service is a manufacturer-warranty requirement and keeps your system running efficiently. We service units up to 22kW within 30 miles of Preston — typically around 1.5 hours on site.',
      },
      {
        title: 'Do we service systems we didn\'t install?',
        content:
          'Yes — especially where the original installer is no longer available. We\'re happy to take on servicing for systems installed by others.',
      },
      {
        title: "What's included",
        content: 'Our comprehensive annual service includes:',
        bullets: [
          'Check operation & settings',
          'Clean heating filter',
          'Check external evaporator heat exchanger',
          'Check anti-freeze level',
          'Check expansion vessels',
          'DHW cylinder & pressure-relief valve check',
          'Tighten electrical connections & anti-vibration mounts',
          'Leak check',
          'Hot-water pasteurisation settings',
          'Record operating parameters',
          'Complimentary underfloor-heating check',
        ],
      },
      {
        title: 'Cost',
        content:
          '£140 + VAT for systems up to 22kW. Anti-freeze is quoted separately; parts outside warranty are not included. We provide a 2-year workmanship warranty. Extra mileage is quoted at enquiry.',
      },
      {
        title: 'Recent example',
        content:
          'We recently restored an unmaintained system to full performance after clearing leaves from the condenser — a simple fix that made a big difference.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}
