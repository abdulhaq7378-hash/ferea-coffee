/*
 * All copy, prices and photography for the site live here.
 * Photos: Unsplash ids look like "1541167760496-1628856ab772", Pexels ids are numeric ("14841924",
 * or "33932441.png" for the few stored as PNG). Any full URL or local "/images/…" path also works.
 *
 * Menu items without a `photo` only appear in the full (text) menu, not in the homepage menu section.
 */

export const brand = {
  name: 'Feréa',
  fullName: 'Feréa Coffee House',
  tagline: 'Specialty coffee. Thoughtfully made.',
  address: ['Near Mandavi Emerald', 'End Point Road, Vidyaratna Nagar', 'Manipal, Karnataka 576104'],
  addressLine: 'Near Mandavi Emerald, End Point Road, Manipal, Karnataka 576104',
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  email: 'hello@fereacoffee.in',
  instagram: '@fereacoffee',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mandavi+Emerald+End+Point+Road+Manipal+Karnataka+576104',
  hours: [
    { days: 'Mon–Fri', time: '11:00–22:00' },
    { days: 'Sat–Sun', time: '12:00–23:00' },
  ],
}

// One café, photographed from several angles, so every space shot on the site matches.
export const photos = {
  heroPour: '33932441.png',
  heroEspresso: '1680413002471-965cca788f5b',
  storyIced: '14932958',
  careFresh: '1540228907080-06b98e4ee51f',
  careSpecialty: '29748530',
  careHospitality: '1542560253-f74904b762ef',
  placeInterior: '1544456203-c31cb2ce9081',
  placeCounter: '1544456203-0af5a69f5789',
  placeTerrace: '1544456203-9e84b31c8cb9',
  signature: '36180024',
  comboLatte: '34806927',
  comboCroissant: '37853683',
  finalCta: '1544456203-fb40aff36706',
}

export const navLinks = [
  { label: 'About', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Blog', href: '#blog' },
]

export const allPages = [
  { label: 'Home', href: '#top' },
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our Place', href: '#place' },
  { label: 'Signature', href: '#signature' },
  { label: 'Study Break Combo', href: '#offer' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Journal', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Visit & Contact', href: '#contact' },
  { label: 'License', href: '#/license' },
  { label: 'Changelog', href: '#/changelog' },
  { label: '404', href: '#/404' },
]

// Priced against cafés around End Point Road, Vidyaratna Nagar and Tiger Circle (2026).
export const menu = [
  {
    key: 'coffee',
    label: 'Coffee & Chai',
    short: 'Coffee',
    note: 'Arabica from partner estates in Chikmagalur and Coorg, roasted in small batches.',
    items: [
      { id: 'cappuccino', name: 'Cappuccino', price: 160, desc: 'Double espresso under thick, velvety milk foam.', photo: '36883603', tag: 'Hot' },
      { id: 'cafe-latte', name: 'Café Latte', price: 170, desc: 'Smooth espresso with silky steamed milk.', photo: '37521812', tag: 'Hot' },
      { id: 'cafe-mocha', name: 'Café Mocha', price: 180, desc: 'Espresso, dark chocolate and steamed milk.', photo: '17075308', tag: 'Hot' },
      { id: 'cold-coffee', name: 'Classic Cold Coffee', price: 160, desc: 'Thick, creamy blended cold coffee — the Manipal favourite.', photo: '33066988', tag: 'Bestseller' },
      { id: 'masala-chai', name: 'Masala Chai', price: 60, desc: 'Strong tea brewed with ginger, cardamom and spices.', photo: '12865880', tag: 'Hot' },
      { id: 'cold-brew', name: 'Cold Brew', price: 170, desc: 'Slow-steeped for 16 hours, served black over ice.', tag: 'Iced' },
    ],
  },
  {
    key: 'bites',
    label: 'Bites',
    note: 'Made to order, all day. Veg unless marked.',
    items: [
      { id: 'chilli-cheese-toast', name: 'Chilli Cheese Toast', price: 130, desc: 'Crisp toast, melted cheese, green chillies and herbs.', photo: '9240536', tag: 'Bestseller' },
      { id: 'garlic-bread', name: 'Cheesy Garlic Bread', price: 160, desc: 'Garlic butter bread baked with gooey mozzarella.', photo: '14841924', tag: 'Veg' },
      { id: 'peri-peri-fries', name: 'Peri Peri Loaded Fries', price: 160, desc: 'Fries tossed in peri peri, topped with cheese sauce.', photo: '11485199', tag: 'Veg' },
      { id: 'paneer-sandwich', name: 'Paneer Tikka Sandwich', price: 180, desc: 'Smoky paneer tikka, onions and mint mayo, grilled.', photo: '37853683', tag: 'Veg' },
      { id: 'chicken-burger', name: 'Crispy Chicken Burger', price: 210, desc: 'Crunchy chicken, lettuce and house sauce in a soft bun.', photo: '30622041', tag: 'Non-veg' },
      { id: 'pink-sauce-pasta', name: 'Pink Sauce Pasta', price: 240, desc: 'Creamy tomato sauce, herbs and parmesan. Add chicken +₹50.', photo: '8156470', tag: 'Veg' },
    ],
  },
  {
    key: 'sweets',
    label: 'Shakes & Desserts',
    short: 'Shakes',
    note: 'Thick shakes, cold coolers and the desserts you’ll share (or won’t).',
    items: [
      { id: 'nutella-shake', name: 'Nutella Thickshake', price: 170, desc: 'Rich Nutella blended thick with a chocolate drizzle.', photo: '10756738', tag: 'Iced' },
      { id: 'virgin-mojito', name: 'Virgin Mojito', price: 130, desc: 'Fresh mint, lime and soda over crushed ice.', photo: '14842064', tag: 'Bestseller' },
      { id: 'brownie', name: 'Sizzling Brownie', price: 150, desc: 'Warm fudgy brownie, vanilla ice cream, hot chocolate sauce.', photo: '11485219', tag: 'Bestseller' },
      { id: 'cheesecake', name: 'Baked Cheesecake', price: 160, desc: 'Creamy, slow-baked and just a little tangy.', photo: '14841923', tag: 'Veg' },
      { id: 'oreo-shake', name: 'Oreo Thickshake', price: 150, desc: 'Crushed Oreos blended with vanilla ice cream.', tag: 'Iced' },
      { id: 'kitkat-shake', name: 'KitKat Thickshake', price: 160, desc: 'Chocolate shake with crunchy KitKat pieces.', tag: 'Iced' },
      { id: 'lemon-iced-tea', name: 'Lemon Iced Tea', price: 110, desc: 'Brewed black tea, fresh lemon, lightly sweetened.', tag: 'Iced' },
      { id: 'watermelon-cooler', name: 'Watermelon Mint Cooler', price: 130, desc: 'Fresh watermelon, mint and a squeeze of lime.', tag: 'Iced' },
      { id: 'nutella-waffle', name: 'Nutella Waffle', price: 170, desc: 'Crisp waffle generously spread with Nutella.', tag: 'Veg' },
      { id: 'choco-pancakes', name: 'Choco Chip Pancakes', price: 160, desc: 'Fluffy stack with chocolate chips and syrup.', tag: 'Egg' },
      { id: 'fudge-sundae', name: 'Hot Chocolate Fudge Sundae', price: 150, desc: 'Vanilla ice cream, hot fudge, nuts and a wafer.', tag: 'Veg' },
    ],
  },
]

export const signature = {
  id: 'ferea-frappe',
  name: 'The Feréa Frappe',
  price: 190,
  desc: 'Iced espresso blended with hazelnut, cream and a chocolate drizzle.',
  photo: photos.signature,
}

export const combo = {
  id: 'study-break-combo',
  name: 'Study Break Combo',
  price: 279,
  original: 340,
  items: [
    { name: 'Classic Cold Coffee', price: 160 },
    { name: 'Paneer Tikka Sandwich', price: 180 },
  ],
}

export const careBlocks = [
  {
    no: '01',
    title: 'Fresh every day',
    heading: 'Made to order, never reheated.',
    body: 'Fries, toasties, pasta and brownies are made in our kitchen when you order them — nothing is reheated from yesterday, and nothing waits under a heat lamp.',
    photo: photos.careFresh,
    alt: 'Fries and snacks on a wooden café table, seen from above',
  },
  {
    no: '02',
    title: 'Specialty coffee',
    heading: 'Brewed with intention.',
    body: 'We work with growers in Chikmagalur and Coorg, roast in small batches and dial in every bean each day — from your cappuccino to your cold coffee.',
    photo: photos.careSpecialty,
    alt: 'A barista pouring latte art into a cup',
  },
  {
    no: '03',
    title: 'Warm hospitality',
    heading: 'More than a coffee stop.',
    body: 'Remember-your-order kind of service, long tables for group projects and quiet corners for revision. Stay as long as the coffee lasts — and then some.',
    photo: photos.careHospitality,
    alt: 'A guest with a red coffee mug in the café’s book corner',
  },
]

export const places = [
  { title: 'The Lounge', caption: 'Long tables, longer conversations', photo: photos.placeInterior, alt: 'Café lounge with long wooden tables, benches and plants' },
  { title: 'The Reading Nook', caption: 'Books, quiet corners, study sessions', photo: photos.placeCounter, alt: 'A student reading at a wooden table in the café’s book corner' },
  { title: 'The Courtyard', caption: 'Open-air tables under the sky', photo: photos.placeTerrace, alt: 'Students sitting at tables in the café’s open-air courtyard' },
]

export const testimonials = [
  {
    quote: 'My go-to study spot before end-sems. The cold coffee is genuinely the best near End Point, and nobody rushes you out even when you’ve been there four hours.',
    name: 'Rohan Bhat',
    place: 'MIT Manipal · B.Tech',
    photo: '14853524',
    alt: 'A student reading a book with a coffee at a café table',
    tone: 'espresso',
  },
  {
    quote: 'Feréa has become my favourite coffee stop. The coffee is consistently amazing, and there’s something about the space that makes you want to stay a little longer.',
    name: 'Sneha Kulkarni',
    place: 'KMC Manipal · MBBS',
    photo: '1549804780-287a8c50e0e7',
    alt: 'A smiling student with a cup of coffee at a café table',
    tone: 'ivory',
  },
  {
    quote: 'The kind of place you find yourself returning to without even thinking about it. Great coffee, beautiful atmosphere, and genuinely warm people.',
    name: 'Ishita Agarwal',
    place: 'TAPMI · PGDM',
    photo: '18004354',
    alt: 'A student chatting at a street-side café',
    tone: 'honey',
  },
  {
    quote: 'We come here every Friday after labs. Peri peri fries, a Nutella shake each, and the staff already know our order before we sit down.',
    name: 'Aditya Menon',
    place: 'MIT Manipal · Mechanical',
    photo: '11413997',
    alt: 'Friends raising cups of chai together',
    tone: 'espresso',
  },
  {
    quote: 'Brought my parents here when they visited — they loved the masala chai, I stuck to the frappe. Cosy, spotless and honestly fairly priced.',
    name: 'Karthik Shenoy',
    place: 'MIC Manipal · Media',
    photo: '36683119',
    alt: 'A smiling student chatting across a café table',
    tone: 'ivory',
  },
  {
    quote: 'Perfect for a slow brunch or an evening coffee between studio submissions. The food is excellent and the space feels incredibly calm.',
    name: 'Ananya Rao',
    place: 'MSAP Manipal · B.Arch',
    photo: '14842059',
    alt: 'A smiling student with cheesecake and breadsticks at a café table',
    tone: 'honey',
  },
]

export const posts = [
  {
    slug: 'coffee-cherry-to-cup',
    category: 'Coffee',
    date: 'Aug 28, 2026',
    readTime: '6 min read',
    title: 'From Coffee Cherry to Your Morning Cup',
    excerpt: 'Follow a single bean from a hillside estate in Coorg to the cup on your table in Manipal.',
    photo: '38245950',
    alt: 'Ripe red coffee cherries on a branch in Madikeri',
    body: [
      'Every cup we pour starts as a red cherry on a shade-grown hillside in the Western Ghats. Our partner estates in Chikmagalur and Coorg hand-pick only the ripe fruit, which is why the harvest takes weeks rather than days.',
      'After picking, the cherries are either washed or sun-dried on raised beds. Washed coffees taste cleaner and brighter; naturals carry more fruit and body. We keep one of each on the bar so you can taste the difference side by side.',
      'Green beans arrive in jute sacks and are roasted in small batches of twelve kilos. Each profile is logged, cupped and adjusted before a single bag reaches the café.',
      'By the time your barista dials in the grinder at 10:30, that bean has travelled roughly 200 kilometres down the ghats and passed through at least a dozen careful hands. We think that is worth slowing down for.',
    ],
  },
  {
    slug: 'understanding-your-roast',
    category: 'Beans',
    date: 'Aug 12, 2026',
    readTime: '4 min read',
    title: 'Understanding Your Favourite Roast',
    excerpt: 'Light, medium or dark — what roast level really changes in your cup, and how to choose.',
    photo: '22679453',
    alt: 'Hands holding freshly roasted coffee beans over a roaster',
    body: [
      'Roast level is less about strength and more about which flavours you want to bring forward. Caffeine barely changes between a light and a dark roast.',
      'Light roasts keep the origin character intact: citrus, florals and a juicy acidity. They shine black or over ice.',
      'Medium roasts balance sweetness and body — think jaggery, milk chocolate and roasted nuts. Our house espresso sits here because it plays beautifully with milk and in cold coffee.',
      'Dark roasts trade brightness for bittersweet cocoa and a heavier mouthfeel. If you grew up on strong filter coffee at home, start here and work your way lighter.',
    ],
  },
  {
    slug: 'art-of-brewing',
    category: 'Brewing',
    date: 'Jul 30, 2026',
    readTime: '5 min read',
    title: 'The Simple Art of Brewing a Perfect Coffee Cup',
    excerpt: 'From the steel filter to the frothy pour — our baristas’ guide to great filter coffee at home.',
    photo: '16128085',
    alt: 'Brass tumbler and davara sets with ground coffee and a traditional coffee filter',
    body: [
      'Great coffee at home comes down to four things: fresh beans, the right grind, clean water and patience. The humble South Indian steel filter gets all four right.',
      'Add three heaped spoons of medium-fine coffee to the top chamber, press lightly with the plunger and pour in just-off-the-boil water. Cover it and walk away for fifteen minutes.',
      'The thick decoction that drips through is the heart of the cup. Mix about a third decoction with two-thirds hot milk, sweeten to taste, and pour it back and forth between tumbler and davara until it foams.',
      'Want it stronger? Use less milk, not more coffee. Taste, adjust one variable at a time, and write down what you like.',
    ],
  },
  {
    slug: 'little-things-great-cafe',
    category: 'Café Life',
    date: 'Jul 14, 2026',
    readTime: '3 min read',
    title: 'The Little Things That Make a Truly Great Café',
    excerpt: 'Warm light, the right chair and a barista who remembers your name — the details we obsess over.',
    photo: '29139705',
    alt: 'Friends chatting at café patio tables, an auto-rickshaw passing behind',
    body: [
      'A great café is rarely about one big idea. It is a hundred small decisions that add up to a feeling of ease.',
      'We chose warm lighting so monsoon evenings feel golden rather than clinical, and tuned the playlist to sit just under conversation.',
      'Our benches were tested by the team for a full working day before we ordered them. Plugs sit under every long table, because a study session before exams shouldn’t end at 20% battery.',
      'And we train every new barista to learn five regulars’ orders in their first week. It sounds small. It is not.',
    ],
  },
]

export const faqs = [
  {
    q: 'What kind of coffee does Feréa serve?',
    a: 'Specialty-grade Arabica from partner estates in Chikmagalur and Coorg, roasted in small batches. Expect cappuccinos, lattes and mochas, a 16-hour cold brew and the thick cold coffee Manipal loves.',
  },
  {
    q: 'Can I order Feréa drinks for takeaway?',
    a: 'Absolutely. Everything on the menu can be packed to go — or bring your own cup and get ₹10 off. You can also order ahead on this site and pick up at the counter.',
  },
  {
    q: 'Does Feréa offer non-coffee drinks?',
    a: 'Yes — masala chai, Oreo, KitKat and Nutella thickshakes, virgin mojito, lemon iced tea and a watermelon mint cooler.',
  },
  {
    q: 'Does Feréa offer fresh food or bakery items?',
    a: 'Yes — chilli cheese toast, garlic bread, loaded fries, grilled sandwiches, burgers and pasta, plus sizzling brownies, waffles and cheesecake. Plenty of veg options, with non-veg dishes clearly marked.',
  },
  {
    q: 'Where can I find Feréa Café?',
    a: 'You’ll find us near Mandavi Emerald on End Point Road, Vidyaratna Nagar — just behind MAHE, Manipal, Karnataka 576104. Two-wheeler parking is right outside.',
  },
]
