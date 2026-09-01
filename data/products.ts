import type { Product } from '~/types/product'

/**
 * Mockdata för Metal-Fach-produkter i Kunistas katalog.
 * Bilderna använder placehold.co som platshållare – byt ut mot riktiga produktbilder i produktion.
 */
export const products: Product[] = [
  // Metal-Fach Z562 - 10 layout variants
  {
    id: 'metalfach-z562-classic',
    name: 'Metal-Fach Z562 – Klassisk',
    category: 'Balear',
    shortDescription: 'Klassisk layout: vänster bild, höger innehål.',
    fullDescription: 'Metal-Fach Z562 är en robust rundbalear med fast kammare som använder innovativ cylindrisk rullkammarteknik för att uppnå högsta komprimeringsgrad. Maskinen är utrustad med en 16-rullar rullkammare som säkerställs med ett lås, vilket förhindrar överbelastning på traktorns hydrauliska pump. Z562 är utestyrd med rotativ matningsanordning som säkerställer regelbunden och enhetlig materialmatning. Med chamberfyllningsindikatör och elektronisk styrning kan du kontrollera hela operationen från hytten för maximal arbetskomfort.',
    benefits: [
      'Cylindrisk rullkammare för högsta komprimeringsgrad',
      '16-rollers säkrad kammare förhindrar överbelastning',
      'Rotativ matningsanordning för enhetlig materialmatning',
      'Chamberfyllningsindikatör',
      'Elektronisk styrning från hytten',
      'Optimala ensileringsförhållanden',
      'Långt driftsfritt arbete'
    ],
    mainImage: '/images/products/Balers/Z562/mf-prasa-belujaca-zwijajaca-stalokomorowa-z562-rn-standard-metalfach.webp',
    gallery: [
      '/images/products/Balers/Z562/mf-prasa-belujaca-zwijajaca-stalokomorowa-z562-rn-standard-metalfach.webp',
      'https://placehold.co/800x600/1A1A1A/FFFFFF?text=Z562+1',
      'https://placehold.co/800x600/71717A/FFFFFF?text=Z562+2'
    ],
    specifications: [
      { label: 'Kammartyp', value: '16-roller cylindrisk' },
      { label: 'Baladimension', value: '120 cm diameter' },
      { label: 'Matningsanordning', value: 'Rotativ' },
      { label: 'Styrning', value: 'Elektronisk från hytten' }
    ],
    featured: true,
    layoutType: 'classic'
  },
  {
    id: 'metalfach-z562-fullwidth',
    name: 'Metal-Fach Z562 – Helbredd',
    category: 'Balear',
    shortDescription: 'Helbredd layout: stor hero-bild, innehål nedanför.',
    fullDescription: 'Metal-Fach Z562 är en robust rundbalear med fast kammare som använder innovativ cylindrisk rullkammarteknik för att uppnå högsta komprimeringsgrad. Maskinen är utrustad med en 16-rullar rullkammare som säkerställs med ett lås, vilket förhindrar överbelastning på traktorns hydrauliska pump. Z562 är utestyrd med rotativ matningsanordning som säkerställer regelbunden och enhetlig materialmatning. Med chamberfyllningsindikatör och elektronisk styrning kan du kontrollera hela operationen från hytten för maximal arbetskomfort.',
    benefits: [
      'Cylindrisk rullkammare för högsta komprimeringsgrad',
      '16-rollers säkrad kammare förhindrar överbelastning',
      'Rotativ matningsanordning för enhetlig materialmatning',
      'Chamberfyllningsindikatör',
      'Elektronisk styrning från hytten',
      'Optimala ensileringsförhållanden',
      'Långt driftsfritt arbete'
    ],
    mainImage: '/images/products/Balers/Z562/mf-prasa-belujaca-zwijajaca-stalokomorowa-z562-rn-standard-metalfach.webp',
    gallery: [
      '/images/products/Balers/Z562/mf-prasa-belujaca-zwijajaca-stalokomorowa-z562-rn-standard-metalfach.webp',
      'https://placehold.co/800x600/1A1A1A/FFFFFF?text=Z562+1',
      'https://placehold.co/800x600/71717A/FFFFFF?text=Z562+2'
    ],
    specifications: [
      { label: 'Kammartyp', value: '16-roller cylindrisk' },
      { label: 'Baladimension', value: '120 cm diameter' },
      { label: 'Matningsanordning', value: 'Rotativ' },
      { label: 'Styrning', value: 'Elektronisk från hytten' }
    ],
    featured: true,
    layoutType: 'fullwidth'
  },
  {
    id: 'metalfach-z562-cardgrid',
    name: 'Metal-Fach Z562 – Kort-rutnät',
    category: 'Balear',
    shortDescription: 'Kort-rutnät layout: egenskaper som kort, specs i grid.',
    fullDescription: 'Metal-Fach Z562 är en robust rundbalear med fast kammare som använder innovativ cylindrisk rullkammarteknik för att uppnå högsta komprimeringsgrad. Maskinen är utrustad med en 16-rullar rullkammare som säkerställs med ett lås, vilket förhindrar överbelastning på traktorns hydrauliska pump. Z562 är utestyrd med rotativ matningsanordning som säkerställer regelbunden och enhetlig materialmatning. Med chamberfyllningsindikatör och elektronisk styrning kan du kontrollera hela operationen från hytten för maximal arbetskomfort.',
    benefits: [
      'Cylindrisk rullkammare för högsta komprimeringsgrad',
      '16-rollers säkrad kammare förhindrar överbelastning',
      'Rotativ matningsanordning för enhetlig materialmatning',
      'Chamberfyllningsindikatör',
      'Elektronisk styrning från hytten',
      'Optimala ensileringsförhållanden',
      'Långt driftsfritt arbete'
    ],
    mainImage: '/images/products/Balers/Z562/mf-prasa-belujaca-zwijajaca-stalokomorowa-z562-rn-standard-metalfach.webp',
    gallery: [
      '/images/products/Balers/Z562/mf-prasa-belujaca-zwijajaca-stalokomorowa-z562-rn-standard-metalfach.webp',
      'https://placehold.co/800x600/1A1A1A/FFFFFF?text=Z562+1',
      'https://placehold.co/800x600/71717A/FFFFFF?text=Z562+2'
    ],
    specifications: [
      { label: 'Kammartyp', value: '16-roller cylindrisk' },
      { label: 'Baladimension', value: '120 cm diameter' },
      { label: 'Matningsanordning', value: 'Rotativ' },
      { label: 'Styrning', value: 'Elektronisk från hytten' }
    ],
    featured: true,
    layoutType: 'cardgrid'
  },
  {
    id: 'metalfach-z562-heroimage',
    name: 'Metal-Fach Z562 – Hero-bild',
    category: 'Balear',
    shortDescription: 'Hero-bild layout: stor hero-sektion, minimal text.',
    fullDescription: 'Metal-Fach Z562 är en robust rundbalear med fast kammare som använder innovativ cylindrisk rullkammarteknik för att uppnå högsta komprimeringsgrad. Maskinen är utrustad med en 16-rullar rullkammare som säkerställs med ett lås, vilket förhindrar överbelastning på traktorns hydrauliska pump. Z562 är utestyrd med rotativ matningsanordning som säkerställer regelbunden och enhetlig materialmatning. Med chamberfyllningsindikatör och elektronisk styrning kan du kontrollera hela operationen från hytten för maximal arbetskomfort.',
    benefits: [
      'Cylindrisk rullkammare för högsta komprimeringsgrad',
      '16-rollers säkrad kammare förhindrar överbelastning',
      'Rotativ matningsanordning för enhetlig materialmatning',
      'Chamberfyllningsindikatör',
      'Elektronisk styrning från hytten',
      'Optimala ensileringsförhållanden',
      'Långt driftsfritt arbete'
    ],
    mainImage: '/images/products/Balers/Z562/mf-prasa-belujaca-zwijajaca-stalokomorowa-z562-rn-standard-metalfach.webp',
    gallery: [
      '/images/products/Balers/Z562/mf-prasa-belujaca-zwijajaca-stalokomorowa-z562-rn-standard-metalfach.webp',
      'https://placehold.co/800x600/1A1A1A/FFFFFF?text=Z562+1',
      'https://placehold.co/800x600/71717A/FFFFFF?text=Z562+2'
    ],
    specifications: [
      { label: 'Kammartyp', value: '16-roller cylindrisk' },
      { label: 'Baladimension', value: '120 cm diameter' },
      { label: 'Matningsanordning', value: 'Rotativ' },
      { label: 'Styrning', value: 'Elektronisk från hytten' }
    ],
    featured: true,
    layoutType: 'heroimage'
  },
  {
    id: 'metalfach-z562-minimal',
    name: 'Metal-Fach Z562 – Minimalistisk',
    category: 'Balear',
    shortDescription: 'Minimalistisk layout: rent, rymligt, stor typografi.',
    fullDescription: 'Metal-Fach Z562 är en robust rundbalear med fast kammare som använder innovativ cylindrisk rullkammarteknik för att uppnå högsta komprimeringsgrad. Maskinen är utrustad med en 16-rullar rullkammare som säkerställs med ett lås, vilket förhindrar överbelastning på traktorns hydrauliska pump. Z562 är utestyrd med rotativ matningsanordning som säkerställer regelbunden och enhetlig materialmatning. Med chamberfyllningsindikatör och elektronisk styrning kan du kontrollera hela operationen från hytten för maximal arbetskomfort.',
    benefits: [
      'Cylindrisk rullkammare för högsta komprimeringsgrad',
      '16-rollers säkrad kammare förhindrar överbelastning',
      'Rotativ matningsanordning för enhetlig materialmatning',
      'Chamberfyllningsindikatör',
      'Elektronisk styrning från hytten',
      'Optimala ensileringsförhållanden',
      'Långt driftsfritt arbete'
    ],
    mainImage: '/images/products/Balers/Z562/mf-prasa-belujaca-zwijajaca-stalokomorowa-z562-rn-standard-metalfach.webp',
    gallery: [
      '/images/products/Balers/Z562/mf-prasa-belujaca-zwijajaca-stalokomorowa-z562-rn-standard-metalfach.webp',
      'https://placehold.co/800x600/1A1A1A/FFFFFF?text=Z562+1',
      'https://placehold.co/800x600/71717A/FFFFFF?text=Z562+2'
    ],
    specifications: [
      { label: 'Kammartyp', value: '16-roller cylindrisk' },
      { label: 'Baladimension', value: '120 cm diameter' },
      { label: 'Matningsanordning', value: 'Rotativ' },
      { label: 'Styrning', value: 'Elektronisk från hytten' }
    ],
    featured: true,
    layoutType: 'minimal'
  },
  {
    id: 'metalfach-z562-dark',
    name: 'Metal-Fach Z562 – Mörk tema',
    category: 'Balear',
    shortDescription: 'Mörk tema layout: mörk bakgrund med accentfärger.',
    fullDescription: 'Metal-Fach Z562 är en robust rundbalear med fast kammare som använder innovativ cylindrisk rullkammarteknik för att uppnå högsta komprimeringsgrad. Maskinen är utrustad med en 16-rullar rullkammare som säkerställs med ett lås, vilket förhindrar överbelastning på traktorns hydrauliska pump. Z562 är utestyrd med rotativ matningsanordning som säkerställer regelbunden och enhetlig materialmatning. Med chamberfyllningsindikatör och elektronisk styrning kan du kontrollera hela operationen från hytten för maximal arbetskomfort.',
    benefits: [
      'Cylindrisk rullkammare för högsta komprimeringsgrad',
      '16-rollers säkrad kammare förhindrar överbelastning',
      'Rotativ matningsanordning för enhetlig materialmatning',
      'Chamberfyllningsindikatör',
      'Elektronisk styrning från hytten',
      'Optimala ensileringsförhållanden',
      'Långt driftsfritt arbete'
    ],
    mainImage: '/images/products/Balers/Z562/mf-prasa-belujaca-zwijajaca-stalokomorowa-z562-rn-standard-metalfach.webp',
    gallery: [
      '/images/products/Balers/Z562/mf-prasa-belujaca-zwijajaca-stalokomorowa-z562-rn-standard-metalfach.webp',
      'https://placehold.co/800x600/1A1A1A/FFFFFF?text=Z562+1',
      'https://placehold.co/800x600/71717A/FFFFFF?text=Z562+2'
    ],
    specifications: [
      { label: 'Kammartyp', value: '16-roller cylindrisk' },
      { label: 'Baladimension', value: '120 cm diameter' },
      { label: 'Matningsanordning', value: 'Rotativ' },
      { label: 'Styrning', value: 'Elektronisk från hytten' }
    ],
    featured: true,
    layoutType: 'dark'
  },
  {
    id: 'metalfach-z562-tiled',
    name: 'Metal-Fach Z562 – Bricklagt',
    category: 'Balear',
    shortDescription: 'Bricklagt layout: galleri i fokus, innehål nedanför.',
    fullDescription: 'Metal-Fach Z562 är en robust rundbalear med fast kammare som använder innovativ cylindrisk rullkammarteknik för att uppnå högsta komprimeringsgrad. Maskinen är utrustad med en 16-rullar rullkammare som säkerställs med ett lås, vilket förhindrar överbelastning på traktorns hydrauliska pump. Z562 är utestyrd med rotativ matningsanordning som säkerställer regelbunden och enhetlig materialmatning. Med chamberfyllningsindikatör och elektronisk styrning kan du kontrollera hela operationen från hytten för maximal arbetskomfort.',
    benefits: [
      'Cylindrisk rullkammare för högsta komprimeringsgrad',
      '16-rollers säkrad kammare förhindrar överbelastning',
      'Rotativ matningsanordning för enhetlig materialmatning',
      'Chamberfyllningsindikatör',
      'Elektronisk styrning från hytten',
      'Optimala ensileringsförhållanden',
      'Långt driftsfritt arbete'
    ],
    mainImage: '/images/products/Balers/Z562/mf-prasa-belujaca-zwijajaca-stalokomorowa-z562-rn-standard-metalfach.webp',
    gallery: [
      '/images/products/Balers/Z562/mf-prasa-belujaca-zwijajaca-stalokomorowa-z562-rn-standard-metalfach.webp',
      'https://placehold.co/800x600/1A1A1A/FFFFFF?text=Z562+1',
      'https://placehold.co/800x600/71717A/FFFFFF?text=Z562+2'
    ],
    specifications: [
      { label: 'Kammartyp', value: '16-roller cylindrisk' },
      { label: 'Baladimension', value: '120 cm diameter' },
      { label: 'Matningsanordning', value: 'Rotativ' },
      { label: 'Styrning', value: 'Elektronisk från hytten' }
    ],
    featured: true,
    layoutType: 'tiled'
  },
  {
    id: 'metalfach-z562-compact',
    name: 'Metal-Fach Z562 – Kompakt',
    category: 'Balear',
    shortDescription: 'Kompakt layout: tätt utrymme, effektiv layout.',
    fullDescription: 'Metal-Fach Z562 är en robust rundbalear med fast kammare som använder innovativ cylindrisk rullkammarteknik för att uppnå högsta komprimeringsgrad. Maskinen är utrustad med en 16-rullar rullkammare som säkerställs med ett lås, vilket förhindrar överbelastning på traktorns hydrauliska pump. Z562 är utestyrd med rotativ matningsanordning som säkerställer regelbunden och enhetlig materialmatning. Med chamberfyllningsindikatör och elektronisk styrning kan du kontrollera hela operationen från hytten för maximal arbetskomfort.',
    benefits: [
      'Cylindrisk rullkammare för högsta komprimeringsgrad',
      '16-rollers säkrad kammare förhindrar överbelastning',
      'Rotativ matningsanordning för enhetlig materialmatning',
      'Chamberfyllningsindikatör',
      'Elektronisk styrning från hytten',
      'Optimala ensileringsförhållanden',
      'Långt driftsfritt arbete'
    ],
    mainImage: '/images/products/Balers/Z562/mf-prasa-belujaca-zwijajaca-stalokomorowa-z562-rn-standard-metalfach.webp',
    gallery: [
      '/images/products/Balers/Z562/mf-prasa-belujaca-zwijajaca-stalokomorowa-z562-rn-standard-metalfach.webp',
      'https://placehold.co/800x600/1A1A1A/FFFFFF?text=Z562+1',
      'https://placehold.co/800x600/71717A/FFFFFF?text=Z562+2'
    ],
    specifications: [
      { label: 'Kammartyp', value: '16-roller cylindrisk' },
      { label: 'Baladimension', value: '120 cm diameter' },
      { label: 'Matningsanordning', value: 'Rotativ' },
      { label: 'Styrning', value: 'Elektronisk från hytten' }
    ],
    featured: true,
    layoutType: 'compact'
  },
  {
    id: 'metalfach-z562-rightimage',
    name: 'Metal-Fach Z562 – Höger bild',
    category: 'Balear',
    shortDescription: 'Höger bild layout: speglad klassisk - innehål vänster, bild höger.',
    fullDescription: 'Metal-Fach Z562 är en robust rundbalear med fast kammare som använder innovativ cylindrisk rullkammarteknik för att uppnå högsta komprimeringsgrad. Maskinen är utrustad med en 16-rullar rullkammare som säkerställs med ett lås, vilket förhindrar överbelastning på traktorns hydrauliska pump. Z562 är utestyrd med rotativ matningsanordning som säkerställer regelbunden och enhetlig materialmatning. Med chamberfyllningsindikatör och elektronisk styrning kan du kontrollera hela operationen från hytten för maximal arbetskomfort.',
    benefits: [
      'Cylindrisk rullkammare för högsta komprimeringsgrad',
      '16-rollers säkrad kammare förhindrar överbelastning',
      'Rotativ matningsanordning för enhetlig materialmatning',
      'Chamberfyllningsindikatör',
      'Elektronisk styrning från hytten',
      'Optimala ensileringsförhållanden',
      'Långt driftsfritt arbete'
    ],
    mainImage: '/images/products/Balers/Z562/mf-prasa-belujaca-zwijajaca-stalokomorowa-z562-rn-standard-metalfach.webp',
    gallery: [
      '/images/products/Balers/Z562/mf-prasa-belujaca-zwijajaca-stalokomorowa-z562-rn-standard-metalfach.webp',
      'https://placehold.co/800x600/1A1A1A/FFFFFF?text=Z562+1',
      'https://placehold.co/800x600/71717A/FFFFFF?text=Z562+2'
    ],
    specifications: [
      { label: 'Kammartyp', value: '16-roller cylindrisk' },
      { label: 'Baladimension', value: '120 cm diameter' },
      { label: 'Matningsanordning', value: 'Rotativ' },
      { label: 'Styrning', value: 'Elektronisk från hytten' }
    ],
    featured: true,
    layoutType: 'rightimage'
  },
  {
    id: 'metalfach-z562-alternate',
    name: 'Metal-Fach Z562 – Interaktiv',
    category: 'Balear',
    shortDescription: 'Interaktiv layout: tabbad layout för sektioner.',
    fullDescription: 'Metal-Fach Z562 är en robust rundbalear med fast kammare som använder innovativ cylindrisk rullkammarteknik för att uppnå högsta komprimeringsgrad. Maskinen är utrustad med en 16-rullar rullkammare som säkerställs med ett lås, vilket förhindrar överbelastning på traktorns hydrauliska pump. Z562 är utestyrd med rotativ matningsanordning som säkerställer regelbunden och enhetlig materialmatning. Med chamberfyllningsindikatör och elektronisk styrning kan du kontrollera hela operationen från hytten för maximal arbetskomfort.',
    benefits: [
      'Cylindrisk rullkammare för högsta komprimeringsgrad',
      '16-rollers säkrad kammare förhindrar överbelastning',
      'Rotativ matningsanordning för enhetlig materialmatning',
      'Chamberfyllningsindikatör',
      'Elektronisk styrning från hytten',
      'Optimala ensileringsförhållanden',
      'Långt driftsfritt arbete'
    ],
    mainImage: '/images/products/Balers/Z562/mf-prasa-belujaca-zwijajaca-stalokomorowa-z562-rn-standard-metalfach.webp',
    gallery: [
      '/images/products/Balers/Z562/mf-prasa-belujaca-zwijajaca-stalokomorowa-z562-rn-standard-metalfach.webp',
      'https://placehold.co/800x600/1A1A1A/FFFFFF?text=Z562+1',
      'https://placehold.co/800x600/71717A/FFFFFF?text=Z562+2'
    ],
    specifications: [
      { label: 'Kammartyp', value: '16-roller cylindrisk' },
      { label: 'Baladimension', value: '120 cm diameter' },
      { label: 'Matningsanordning', value: 'Rotativ' },
      { label: 'Styrning', value: 'Elektronisk från hytten' }
    ],
    featured: true,
    layoutType: 'alternate'
  },
  {
    id: 'metalfach-zls-800',
    name: 'Metal-Fach ZLS 800',
    category: 'Betesputsare',
    shortDescription: 'Mångsidig betesputsare för rengöring av diken, hagar och gårdsplaner.',
    fullDescription: 'Metal-Fach ZLS 800 är en pålitlig betesputsare som klarar allt från lätt gräsklippning till tyngre sly och buskage. Den kraftiga konstruktionen och justerbara sidoförskjutningen gör maskinen till ett utmärkt val för svenska lantbrukare som behöver hålla marker och diken i skick.',
    benefits: [
      'Justerbar sidoförskjutning',
      'Kraftig konstruktion för lång livslängd',
      'Smidig drift på både plan mark och i diken',
      'Enkel underhållsvänlig design'
    ],
    mainImage: 'https://placehold.co/1200x800/C8102E/FFFFFF?text=Metal-Fach+ZLS+800',
    gallery: [
      'https://placehold.co/800x600/1A1A1A/FFFFFF?text=ZLS+800+1',
      'https://placehold.co/800x600/71717A/FFFFFF?text=ZLS+800+2',
      'https://placehold.co/800x600/C8102E/FFFFFF?text=ZLS+800+3'
    ],
    specifications: [
      { label: 'Arbetsbredd', value: '800 mm' },
      { label: 'Vikt', value: '320 kg' },
      { label: 'Effektbehov', value: '25 hk' },
      { label: 'Slaghackar', value: '28 st' }
    ],
    featured: true
  },
  {
    id: 'metalfach-tytan-10',
    name: 'Metal-Fach Tytan 10',
    category: 'Gödselspridare',
    shortDescription: 'Modern gödselspridare med precis dosering och stor tankvolym.',
    fullDescription: 'Metal-Fach Tytan 10 är en högkapacitets gödselspridare byggd för stora arealer. Spridaren är utrustad med avancerad doseringsteknik som säkerställer jämn fördelning av både gödsel och slurry. Den robusta tanken och välplacerade hjulaxlar ger stabil körning även i svåra förhållanden.',
    benefits: [
      'Jämn och precis spridning',
      'Stor tankvolym för färre stopp',
      'Stabil chassikonstruktion',
      'Kompatibel med moderna GPS-system'
    ],
    mainImage: 'https://placehold.co/1200x800/C8102E/FFFFFF?text=Metal-Fach+Tytan+10',
    gallery: [
      'https://placehold.co/800x600/1A1A1A/FFFFFF?text=Tytan+10+1',
      'https://placehold.co/800x600/71717A/FFFFFF?text=Tytan+10+2',
      'https://placehold.co/800x600/C8102E/FFFFFF?text=Tytan+10+3'
    ],
    specifications: [
      { label: 'Tankvolym', value: '10 000 l' },
      { label: 'Arbetsbredd', value: '12–24 m' },
      { label: 'Vikt', value: '8 500 kg' },
      { label: 'Axlar', value: 'Tandem' }
    ],
    featured: true
  },
  {
    id: 'metalfach-n267-2',
    name: 'Metal-Fach N267/2',
    category: 'Vagn',
    shortDescription: 'Tippvagn med hög lastkapacitet för transport av spannmål och foder.',
    fullDescription: 'Metal-Fach N267/2 är en universell tippvagn anpassad för svenska lantbruk. Vagnen har en stabil konstruktion, kraftig tippcylinder och god markfrigång, vilket gör den perfekt för transport av spannmål, foder, ved och annat material både på åker och väg.',
    benefits: [
      'Hög lastkapacitet',
      'Kraftig tippcylinder',
      'Bra markfrigång',
      'Lätt att rengöra'
    ],
    mainImage: 'https://placehold.co/1200x800/C8102E/FFFFFF?text=Metal-Fach+N267%2F2',
    gallery: [
      'https://placehold.co/800x600/1A1A1A/FFFFFF?text=N267+1',
      'https://placehold.co/800x600/71717A/FFFFFF?text=N267+2',
      'https://placehold.co/800x600/C8102E/FFFFFF?text=N267+3'
    ],
    specifications: [
      { label: 'Lastvolym', value: '6 700 kg' },
      { label: 'Tippvinkel', value: '48°' },
      { label: 'Vagnmått', value: '3 200 x 1 700 mm' },
      { label: 'Däck', value: '400/60–15,5' }
    ],
    featured: false
  },
  {
    id: 'metalfach-z560',
    name: 'Metal-Fach Z560',
    category: 'Kompaktlastarskopa',
    shortDescription: 'Robust lastarskopa för smidig hantering av gödsel, foder och jord.',
    fullDescription: 'Metal-Fach Z560 är en slitstark lastarskopa som passar de flesta traktorer med frontlastare. Skopan är optimal för hantering av gödsel, kompost, foder och lättare jordarbeten. Den förstärkta konstruktionen ger lång livslängd även vid krävande användning.',
    benefits: [
      'Förstärkt skopkonstruktion',
      'Universiell fästplatta',
      'Högt volymutbyte',
      'Låg vikt i förhållande till volym'
    ],
    mainImage: 'https://placehold.co/1200x800/C8102E/FFFFFF?text=Metal-Fach+Z560',
    gallery: [
      'https://placehold.co/800x600/1A1A1A/FFFFFF?text=Z560+1',
      'https://placehold.co/800x600/71717A/FFFFFF?text=Z560+2',
      'https://placehold.co/800x600/C8102E/FFFFFF?text=Z560+3'
    ],
    specifications: [
      { label: 'Volym', value: '1,2 m³' },
      { label: 'Bredd', value: '1 800 mm' },
      { label: 'Vikt', value: '210 kg' },
      { label: 'Material', value: 'Härdat stål' }
    ],
    featured: true
  },
  {
    id: 'metalfach-zi-180',
    name: 'Metal-Fach ZI 180',
    category: 'Jordfräs',
    shortDescription: 'Kompakt jordfräs för försådd, trädgårdsarbete och lättare jordbearbetning.',
    fullDescription: 'Metal-Fach ZI 180 är en lätt och smidig jordfräs som passar utmärkt för försådd, grönytor och mindre jordbruksarealer. Maskinen har justerbar arbetsdjup och sida för att anpassa arbetet efter underlaget.',
    benefits: [
      'Justerbart arbetsdjup',
      'Kompakt storlek för smidighet',
      'Låg effektbehov',
      'Högkvalitativa knivar'
    ],
    mainImage: 'https://placehold.co/1200x800/C8102E/FFFFFF?text=Metal-Fach+ZI+180',
    gallery: [
      'https://placehold.co/800x600/1A1A1A/FFFFFF?text=ZI+180+1',
      'https://placehold.co/800x600/71717A/FFFFFF?text=ZI+180+2',
      'https://placehold.co/800x600/C8102E/FFFFFF?text=ZI+180+3'
    ],
    specifications: [
      { label: 'Arbetsbredd', value: '180 cm' },
      { label: 'Vikt', value: '450 kg' },
      { label: 'Effektbehov', value: '35 hk' },
      { label: 'Knivar', value: '24 st' }
    ],
    featured: false
  }
]

/**
 * Hämta alla unika kategorier från produktdatan.
 */
export function getCategories(): string[] {
  const categories = new Set(products.map((p) => p.category))
  return Array.from(categories)
}

/**
 * Hämta utvalda produkter för startsidan.
 */
export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

/**
 * Hämta en specifik produkt baserat på dess slug/id.
 */
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}
