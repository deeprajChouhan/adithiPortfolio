export type NavLink = {
  label: string;
  href: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type Education = {
  institution: string;
  program: string;
  location: string;
  duration: string;
  currentYear: string;
  summary: string;
  coursework: string[];
  previousEducation: {
    institution: string;
    board: string;
    duration: string;
    location: string;
  };
};

export type Internship = {
  role: string;
  company: string;
  location: string;
  duration: string;
  label: string;
  summary: string;
  responsibilities: string[];
};

export type Dish = {
  id: string;
  name: string;
  category: string;
  description: string;
  ingredients: string[];
  techniques: string[];
  image: string;
  platingNote: string;
};

export type Skill = {
  name: string;
  level: string;
  description: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  detail: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const chefProfile = {
  name: 'Adithi Varma Sagi',
  initials: 'AVS',
  title: 'Culinary Arts Student | Aspiring Chef',
  pronouns: 'She / Her',
  intro:
    'A third-year Culinary Arts Management student shaping a refined culinary voice through disciplined training, service-focused internships, and a deep love for thoughtful plating.',
  heroStatement:
    'I create dishes that balance warmth, precision, and story — drawing from classical foundations, contemporary presentation, and a curiosity for global flavours.',
  location: 'Birmingham, United Kingdom',
  availability:
    'Open to internships, stage opportunities, and junior kitchen roles where I can keep learning in ambitious culinary environments.',
  philosophy:
    'I believe good food should feel memorable before the first bite: in aroma, visual composition, and the care that goes into every detail.',
};

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Internships', href: '#internships' },
  { label: 'Dishes', href: '#dishes' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const heroStats: Stat[] = [
  { label: 'Year of Study', value: '3rd Year' },
  { label: 'Internships', value: '2 Kitchen Roles' },
  { label: 'Signature Dishes', value: '8 Curated Plates' },
];

export const education: Education = {
  institution: 'University College Birmingham, UK',
  program: 'Culinary Arts Management BA',
  location: 'Birmingham, United Kingdom',
  duration: 'October 18, 2023 – July 2027 (expected)',
  currentYear: 'Currently in 3rd year',
  summary:
    'Developing a strong foundation in kitchen technique, menu thinking, hospitality operations, and contemporary food presentation while building a professional portfolio as an emerging chef.',
  coursework: [
    'Classical and contemporary cookery',
    'Baking and pastry fundamentals',
    'World cuisine and flavour profiling',
    'Garde manger and cold kitchen preparation',
    'Food presentation and plating design',
    'Kitchen operations and service coordination',
    'Nutrition and menu planning',
    'Food safety, hygiene, and kitchen discipline',
  ],
  previousEducation: {
    institution: 'Little Woods School, India',
    board: 'CBSE Higher School',
    duration: 'July 2020 – July 2022',
    location: 'India',
  },
};

export const internships: Internship[] = [
  {
    role: 'Commis Chef Intern',
    company: 'Birmingham City Football Club',
    location: 'Birmingham, United Kingdom',
    duration: 'November 2023 – May 2024',
    label: 'Internship',
    summary:
      'Supported match-day and hospitality kitchen service while strengthening speed, organisation, and consistency under pressure.',
    responsibilities: [
      'Assisted senior chefs with mise en place, basic preparation, and portioning for service.',
      'Helped plate dishes for hospitality events with attention to presentation and timing.',
      'Maintained kitchen hygiene, station readiness, and ingredient organisation throughout shifts.',
      'Observed service coordination and learned the rhythm of volume-focused kitchen operations.',
    ],
  },
  {
    role: 'Commis Chef Intern',
    company: 'Tŷ Newport, The Celtic Collection',
    location: 'Newport, Wales',
    duration: 'July 2024 – July 2025',
    label: 'Internship',
    summary:
      'Built confidence in prep, plating, and kitchen teamwork within a polished hospitality setting focused on consistency and guest experience.',
    responsibilities: [
      'Prepared ingredients for hot and cold sections while following chef guidance and production lists.',
      'Supported plating and garnish work for restaurant and event service.',
      'Practised safe food handling, sanitation, and professional station upkeep during every shift.',
      'Learned menu preparation flow, communication during service, and collaborative kitchen discipline.',
    ],
  },
];

export const dishCategories = [
  'All',
  'Appetizers',
  'Mains',
  'Desserts',
  'Plated Dishes',
  'Regional Cuisine',
  'Experimental',
] as const;

export const dishes: Dish[] = [
  {
    id: 'charred-beetroot',
    name: 'Charred Beetroot Mosaic',
    category: 'Appetizers',
    description:
      'A delicate starter built around earthy sweetness, whipped goat cheese, candied walnuts, and citrus brightness.',
    ingredients: ['Beetroot', 'Goat cheese', 'Orange', 'Walnuts', 'Micro herbs'],
    techniques: ['Roasting', 'Charring', 'Whipping', 'Precise plating'],
    image: '/dishes/charred-beetroot.svg',
    platingNote: 'Layered in a gallery-style arc for a clean editorial presentation.',
  },
  {
    id: 'saffron-risotto',
    name: 'Saffron Forest Risotto',
    category: 'Mains',
    description:
      'Creamy risotto finished with wild mushrooms, herb oil, and parmesan crisp for texture contrast.',
    ingredients: ['Arborio rice', 'Saffron', 'Wild mushrooms', 'Parmesan', 'Herb oil'],
    techniques: ['Stock absorption', 'Sautéing', 'Emulsifying', 'Crisp baking'],
    image: '/dishes/saffron-risotto.svg',
    platingNote: 'Centered with vertical garnish and negative space to highlight richness.',
  },
  {
    id: 'citrus-seabass',
    name: 'Citrus Sea Bass with Fennel Ash',
    category: 'Plated Dishes',
    description:
      'A composed seafood plate balancing bright citrus, silky purée, and subtle smoky notes.',
    ingredients: ['Sea bass', 'Fennel', 'Lemon', 'Potato purée', 'Capers'],
    techniques: ['Pan roasting', 'Puréeing', 'Segmenting', 'Sauce finishing'],
    image: '/dishes/citrus-seabass.svg',
    platingNote: 'Designed with soft curves and restrained sauce work for luxury dining appeal.',
  },
  {
    id: 'spiced-lamb',
    name: 'Spiced Lamb with Olive Jus',
    category: 'Regional Cuisine',
    description:
      'A regional-inspired main that pairs slow-cooked lamb with charred aubergine and a glossy olive jus.',
    ingredients: ['Lamb', 'Olives', 'Aubergine', 'Garlic', 'Rosemary'],
    techniques: ['Slow cooking', 'Reduction', 'Charring', 'Resting meats'],
    image: '/dishes/spiced-lamb.svg',
    platingNote: 'Structured to feel rustic yet elevated, with sauce used as a framing element.',
  },
  {
    id: 'coconut-panna',
    name: 'Coconut Panna Cotta',
    category: 'Desserts',
    description:
      'A smooth coconut-set dessert with poached pineapple, lime syrup, and toasted sesame.',
    ingredients: ['Coconut cream', 'Gelatin', 'Pineapple', 'Lime', 'Sesame'],
    techniques: ['Setting', 'Poaching', 'Syrup reduction', 'Texture layering'],
    image: '/dishes/coconut-panna.svg',
    platingNote: 'Soft monochrome tones with a vivid fruit accent for a clean finish.',
  },
  {
    id: 'smoked-tomato',
    name: 'Smoked Tomato Consommé',
    category: 'Experimental',
    description:
      'A clear, concentrated tomato broth paired with basil oil pearls and sourdough shards.',
    ingredients: ['Tomatoes', 'Basil', 'Sourdough', 'Shallots', 'Smoked salt'],
    techniques: ['Clarifying', 'Infusion', 'Dehydration', 'Oil pearl finishing'],
    image: '/dishes/smoked-tomato.svg',
    platingNote: 'Presented as a minimal tasting course with a transparent, jewel-like look.',
  },
  {
    id: 'burnt-onion-tart',
    name: 'Burnt Onion Tartlet',
    category: 'Appetizers',
    description:
      'A crisp tartlet filled with caramelised onion purée, whipped feta, and herb dust.',
    ingredients: ['Onion', 'Shortcrust pastry', 'Feta', 'Thyme', 'Black pepper'],
    techniques: ['Blind baking', 'Caramelising', 'Whipping', 'Fine garnishing'],
    image: '/dishes/burnt-onion-tart.svg',
    platingNote: 'Petite format designed for canapé service and elegant bite-sized presentation.',
  },
  {
    id: 'dark-chocolate',
    name: 'Dark Chocolate Terrarium',
    category: 'Desserts',
    description:
      'A plated dessert featuring chocolate soil, coffee crémeux, and berry gel accents.',
    ingredients: ['Dark chocolate', 'Coffee', 'Berries', 'Cream', 'Cocoa crumble'],
    techniques: ['Crémeux making', 'Crumb baking', 'Gel setting', 'Plated dessert composition'],
    image: '/dishes/dark-chocolate.svg',
    platingNote: 'Composed with sculptural height and texture for a dramatic dessert finish.',
  },
];

export const skills: Skill[] = [
  {
    name: 'Knife Skills',
    level: 'Confident Foundation',
    description: 'Practising speed, consistency, and safe handling across prep tasks.',
  },
  {
    name: 'Plating & Presentation',
    level: 'Signature Strength',
    description: 'Focused on elegant composition, balance, and refined finishing touches.',
  },
  {
    name: 'Baking Basics',
    level: 'Developing',
    description: 'Comfortable with pastry basics, tart work, and dessert preparation.',
  },
  {
    name: 'Sauce Preparation',
    level: 'Developing',
    description: 'Building confidence in emulsions, reductions, and complementary flavour pairings.',
  },
  {
    name: 'Food Safety & Hygiene',
    level: 'Reliable',
    description: 'Committed to clean stations, safe storage, and disciplined kitchen routines.',
  },
  {
    name: 'Mise en Place',
    level: 'Reliable',
    description: 'Organised prep habits that support calmer, more efficient service execution.',
  },
  {
    name: 'Time Management',
    level: 'Reliable',
    description: 'Maintains flow across prep and service tasks while adapting to pressure.',
  },
  {
    name: 'Team Collaboration',
    level: 'Strong',
    description: 'Enjoys learning from senior chefs and contributing to smooth kitchen teamwork.',
  },
  {
    name: 'Menu Assistance',
    level: 'Emerging',
    description: 'Interested in ingredient pairing, seasonality, and thoughtful menu support.',
  },
  {
    name: 'World Cuisine Awareness',
    level: 'Curious & Growing',
    description: 'Exploring global flavours and regional influences through study and practice.',
  },
];

export const certifications: Certification[] = [
  {
    title: 'Advanced Food Safety & Hygiene Workshop',
    issuer: 'University Culinary Skills Lab',
    date: '2024',
    detail: 'Short-course training focused on professional kitchen hygiene systems and safe handling routines.',
  },
  {
    title: 'Modern Plating & Visual Composition Masterclass',
    issuer: 'Guest Chef Workshop Series',
    date: '2025',
    detail: 'Hands-on workshop exploring plate balance, garnish restraint, and storytelling through presentation.',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'Adithi approached every shift with curiosity, composure, and a genuine willingness to refine her technique. She was especially attentive to presentation and kitchen discipline.',
    name: 'Chef Mentor Placeholder',
    role: 'Internship Supervisor · Hospitality Kitchen',
  },
  {
    quote:
      'She brought thoughtful energy to prep and plating tasks, asked smart questions, and showed clear potential as a young chef building her style.',
    name: 'Sous Chef Placeholder',
    role: 'Kitchen Mentor · Training Placement',
  },
  {
    quote:
      'Adithi demonstrates professionalism beyond her stage of study, while still being honest about learning and eager to improve every service.',
    name: 'Workshop Instructor Placeholder',
    role: 'Guest Chef Educator',
  },
];

export const socialLinks: SocialLink[] = [
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
  { label: 'Email', href: 'mailto:adithi@example.com' },
];
