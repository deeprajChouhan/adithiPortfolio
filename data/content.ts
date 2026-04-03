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
  { label: 'References', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const heroStats: Stat[] = [
  { label: 'Year of Study', value: '3rd Year' },
  { label: 'Experience', value: '1 Internship, 1 Part-Time' },
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
    role: 'Commis Chef',
    company: 'Birmingham City Football Club',
    location: 'Birmingham, United Kingdom',
    duration: 'November 2023 – May 2024',
    label: 'Part-Time',
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
    id: 'cream-broccolini',
    name: 'Cream broccolini with sourdough croutons and Roasted garlic',
    category: 'Appetizers',
    description:
      'This vibrant appetizer features a silky Cream of Broccolini base, blended to a rich, velvety consistency that captures the earthy sweetness of the greens. It is elevated by the deep, mellow notes of roasted garlic folded throughout and topped with hand-torn sourdough croutons for a rustic, buttery crunch. Finished with a delicate drizzle of cream and aromatic herbs, this dish is a sophisticated study in contrasting textures and balanced, garden-fresh Flavors',
    ingredients: ['Broccolini', 'Sourdough', 'Garlic', 'Cream', 'Herbs'],
    techniques: ['Blending', 'Roasting', 'Hand-tearing', 'Garnishing'],
    image: '/dishes/dish1.jpg',
    platingNote: 'Elegant plating in a white bowl, balancing textures visually.',
  },
  {
    id: 'beef-goulash',
    name: 'Beef Goulash and pasta',
    category: 'Mains',
    description:
      'This main course reimagines a timeless classic, featuring a tender Beef Goulash slow-cooked to perfection in a rich, paprika-infused sauce. Served over a bed of ribboned tagliatelle, the dish expertly marries the robust, Savory depth of the stew with the delicate texture of the pasta. Accented by vibrant bell peppers and finished with elegant dots of sour cream and a fresh parsley garnish, it is a comforting yet refined plate that highlights a masterful balance of tradition and modern presentation.',
    ingredients: ['Beef', 'Paprika', 'Tagliatelle', 'Bell peppers', 'Sour cream', 'Parsley'],
    techniques: ['Slow cooking', 'Stewing', 'Pasta making', 'Plating'],
    image: '/dishes/dish2.jpg',
    platingNote: 'Ribboned pasta bed with hearty goulash, vibrant accents.',
  },
  {
    id: 'vanilla-rhubarb-cheesecake',
    name: 'Vanilla and rhubarb cheesecake with white chocolate shards, sugar work, rhubarb sorbet, pickled rhubarb, rhubarb and lemon gel and French vanilla meringue.',
    category: 'Plated Dishes',
    description:
      'The plating of this dessert adopts a modern deconstructed aesthetic, transforming the traditional cheesecake into a dynamic, multi-dimensional landscape. By arranging the creamy vanilla cylinders and sharp white chocolate shards along a central axis, the dish gains a sense of architectural height and movement. The vibrant rhubarb and lemon gel is precisely dotted to frame the plate, while the airy French vanilla meringues and hand-crafted spun sugar nest introduce a delicate, gossamer-like transparency. This intentional layering of textures from the smooth, quenelle sorbet to the crisp, pickled rhubarb batons create a sophisticated visual rhythm that celebrates both precision and organic beauty.',
    ingredients: ['Vanilla', 'Rhubarb', 'White chocolate', 'Sugar', 'Lemon'],
    techniques: ['Deconstruction', 'Gel making', 'Sugar work', 'Quenelle', 'Pickling'],
    image: '/dishes/dish3.jpg',
    platingNote: 'Modern deconstructed aesthetic, central axis arrangement, dynamic landscape.',
  },
  {
    id: 'pan-seared-sea-bass',
    name: 'Pan seared sea bass with Mediterranean vegetables and potatoes bravas',
    category: 'Regional Cuisine',
    description:
      'Inspired by the Flavors of Greek coastal cuisine, this dish features a crisp, pan-seared Sea Bass fillet, expertly cooked to highlight its delicate, flaky texture. It is set atop a rustic medley of Mediterranean vegetables and smoky patatas bravas, blending Hellenic tradition with a subtle Iberian influence. A vibrant herb oil drizzle adds a punch of freshness, while the inclusion of briny olives and charred vegetables creates a robust, Savory profile that perfectly complements the lightness of the fish.',
    ingredients: ['Sea bass', 'Mediterranean vegetables', 'Potatoes', 'Herb oil', 'Olives'],
    techniques: ['Pan searing', 'Roasting', 'Drizzling', 'Charring'],
    image: '/dishes/dish4.jpg',
    platingNote: 'Rustic medley base, crisp fish top, vibrant oil drizzle.',
  },
  {
    id: 'lemon-tart',
    name: 'Lemon tart with yogurt sorbet, lemon curd, raspberry gel, shortbread crumble, honeycomb and Brandy snap biscuit.',
    category: 'Desserts',
    description:
      'This sophisticated slate-plated dessert is a vibrant study in citrus and texture, cantered around a classic Lemon Tart topped with a toasted meringue. The dish features a cooling yogurt sorbet nestled within a delicate, golden Brandy snap biscuit, providing a sharp, creamy contrast to the zesty pools of lemon curd. Accented with a tart raspberry gel and the crunch of shortbread crumble and honeycomb, the presentation is finished with airy meringues and edible florals. It is a masterfully balanced plate that pairs bold acidity with deep, caramelized sweetness and a variety of playful textures.',
    ingredients: ['Lemon', 'Yogurt', 'Raspberry', 'Shortbread', 'Honeycomb', 'Brandy snap'],
    techniques: ['Baking', 'Gel making', 'Sorbet churning', 'Toasting', 'Plating'],
    image: '/dishes/dish5.jpg',
    platingNote: 'Slate-plated, vibrant study in citrus, layered textures.',
  },
  {
    id: 'canapes',
    name: 'Gochujang chicken boa buns, miso beef wellington, and chestnut mushroom macarons.',
    category: 'Experimental',
    description:
      'This trio of experimental small bites is a sophisticated exploration of flavour boundaries, challenging traditional boundaries between sweet and Savory. The collection opens with a Gochujang Chicken Bao, where the fermented heat of Korean chili is tempered by a crisp, cooling cucumber relish. The centrepiece features a Miso Beef Wellington, a bold reimagining of the classic pastry that replaces traditional duxelles with the deep, fermented umami of Japanese miso. The experience culminates in a technical Chestnut Mushroom Macaron, an avant-garde play on French pâtisserie that highlights the earthy, forest-floor notes of the fungi in a delicate, airy shell. Each element is a calculated study in fusion gastronomy, designed to surprise the palate through unexpected pairings and refined technical execution.',
    ingredients: ['Gochujang', 'Chicken', 'Miso', 'Beef', 'Chestnut mushroom'],
    techniques: ['Baking', 'Fermentation', 'Fusion gastronomy', 'Macaron-making'],
    image: '/dishes/dish6.jpg',
    platingNote: 'Trio of experimental small bites, fusion gastronomy.',
  },
  {
    id: 'mushroom-gnocchi',
    name: 'Mushroom tarragon gnocchi with wild mushrooms and artichoke split sauce.',
    category: 'Appetizers',
    description:
      'This sophisticated appetizer features hand-rolled Mushroom and Tarragon Gnocchi, pan-seared to achieve a delicate golden crust while remaining pillowy and light. The dish is anchored by a selection of wild mushrooms, including expertly scored king oysters and earthy forest varieties, which bring a deep, Savory umami to the plate. It is finished with a unique artichoke split sauce, providing a complex, nutty acidity that cuts through the richness, while vibrant green peas and a precise dotting of purée add freshness and visual rhythm to the slate presentation.',
    ingredients: ['Gnocchi', 'Tarragon', 'Wild mushrooms', 'King oysters', 'Artichoke', 'Green peas'],
    techniques: ['Hand-rolling', 'Pan-searing', 'Scoring', 'Sauce splitting'],
    image: '/dishes/dish7.jpg',
    platingNote: 'Slate presentation, precise dotting of purée, dynamic visual rhythm.',
  },
  {
    id: 'vegan-carrots',
    name: 'Heritage Carrots with Polenta, carrot puree, toasted pearl barley, basil oil and vegan toasted bread.',
    category: 'Mains',
    description:
      'This elevated vegan entrée is a vibrant celebration of the root vegetable, featuring tender Heritage Carrots served alongside a creamy, seasoned polenta. The dish is built on a foundation of silky carrot purée, accented by the nutty chew of toasted pearl barley and the aromatic brightness of a basil oil infusion. Crisp shards of vegan toasted bread provide a necessary textural contrast, while the slate-plated presentation uses bold sweeps of colour and precise dotting to create a modern, garden-inspired aesthetic. It is a thoughtful, plant-based composition that balances earthy sweetness with refined culinary technique.',
    ingredients: ['Heritage Carrots', 'Polenta', 'Pearl barley', 'Basil oil', 'Vegan bread'],
    techniques: ['Puréeing', 'Toasting', 'Infusion', 'Plating'],
    image: '/dishes/dish8.jpg',
    platingNote: 'Slate-plated, bold sweeps of colour, garden-inspired aesthetic.',
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
    level: 'Good',
    description: 'Comfortable with pastry basics, tart work, and dessert preparation.',
  },
  {
    name: 'Sauce Preparation',
    level: 'Developing',
    description: 'Building confidence in emulsions, reductions, and complementary flavour pairings.',
  },
  {
    name: 'Food Safety & Hygiene',
    level: 'Good',
    description: 'Committed to clean stations, safe storage, and disciplined kitchen routines.',
  },
  {
    name: 'Mise en Place',
    level: 'Good',
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
  // { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adithi-varma-sagi-19b5932a3/' },
  { label: 'Email', href: 'mailto:sag22167998@student.ucb.ac.uk' },
];
