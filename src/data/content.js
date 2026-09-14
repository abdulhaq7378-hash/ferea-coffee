/*
 * All copy, prices and photography for the site live here.
 * To swap a photo, replace the Unsplash id (or drop in any full URL / local "/images/…" path).
 */

export const brand = {
  name: 'Feréa',
  fullName: 'Feréa Coffee House',
  tagline: 'Specialty coffee. Thoughtfully made.',
  address: ['End Point Road', 'Near Manipal Lake', 'Manipal, Karnataka 576104'],
  addressLine: 'End Point Road, Near Manipal Lake, Manipal, Karnataka 576104',
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  email: 'hello@fereacoffee.in',
  instagram: '@fereacoffee',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=End+Point+Road+Manipal+Karnataka+576104',
  hours: [
    { days: 'Mon–Fri', time: '07:00–22:00' },
    { days: 'Sat–Sun', time: '08:00–23:00' },
  ],
}

export const photos = {
  heroPour: '1541167760496-1628856ab772',
  heroEspresso: '1559496417-e7f25cb247f3',
  storyIced: '1461023058943-07fcbe16d735',
  storyBeans: '1447933601403-0c6688de566e',
  careFresh: '1568254183919-78a4f43a2877',
  careSpecialty: '1513267048331-5611cad62e41',
  careHospitality: '1507914372368-b2b085b925a1',
  placeInterior: '1554118811-1e0d58224f24',
  placeCounter: '1453614512568-c4024d13c247',
  placeTerrace: '1559925393-8be0ec4767c8',
  signature: '1534778101976-62847782c213',
  comboLatte: '1506372023823-741c83b836fe',
  comboCroissant: '1623334044303-241021148842',
  finalCta: '1501339847302-ac426a4a7cbb',
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
  { label: 'Breakfast Combo', href: '#offer' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Journal', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Visit & Contact', href: '#contact' },
  { label: 'License', href: '#/license' },
  { label: 'Changelog', href: '#/changelog' },
  { label: '404', href: '#/404' },
]

export const menu = [
  {
    key: 'coffee',
    label: 'Coffee',
    note: 'Single-origin espresso from Chikmagalur estates, roasted in small batches every week.',
    items: [
      { id: 'espresso', name: 'Espresso', price: 140, desc: 'A short, syrupy double shot with notes of cocoa and jaggery.', photo: '1610889556528-9a770e32642f', tag: 'Hot' },
      { id: 'americano', name: 'Americano', price: 160, desc: 'Double espresso lengthened with hot water. Clean and bright.', photo: '1551030173-122aabc4489c', tag: 'Hot' },
      { id: 'cappuccino', name: 'Cappuccino', price: 190, desc: 'Equal parts espresso, steamed milk and velvety foam.', photo: '1572442388796-11668a67e53d', tag: 'Hot' },
      { id: 'flat-white', name: 'Flat White', price: 210, desc: 'A ristretto double under a thin layer of silky microfoam.', photo: '1561047029-3000c68339ca', tag: 'Hot' },
      { id: 'spanish-latte', name: 'Spanish Latte', price: 230, desc: 'Espresso, condensed milk and cold milk over ice.', photo: '1570968915860-54d5c301fa9f', tag: 'Iced' },
      { id: 'cold-brew', name: 'Cold Brew', price: 220, desc: 'Steeped for 14 hours. Smooth, low in acidity, served over ice.', photo: '1517701604599-bb29b565090c', tag: 'Iced' },
    ],
  },
  {
    key: 'non-coffee',
    label: 'Non-Coffee',
    note: 'For slower afternoons — whole-leaf teas, ceremonial matcha and fresh-pressed fruit.',
    items: [
      { id: 'matcha', name: 'Matcha Latte', price: 240, desc: 'Ceremonial-grade matcha whisked into steamed oat milk.', photo: '1515823064-d6e0c04616a7', tag: 'Hot / Iced' },
      { id: 'hot-chocolate', name: 'Hot Chocolate', price: 220, desc: '54% dark chocolate melted slowly into whole milk.', photo: '1542990253-0d0f5be5f0ed', tag: 'Hot' },
      { id: 'masala-chai', name: 'Masala Chai', price: 120, desc: 'Assam leaf simmered with ginger, cardamom and cinnamon.', photo: '1564890369478-c89ca6d9cde9', tag: 'Hot' },
      { id: 'iced-tea', name: 'Lemon Iced Tea', price: 180, desc: 'Cold-steeped black tea, lemon and a sprig of mint.', photo: '1556679343-c7306c1976bc', tag: 'Iced' },
      { id: 'orange-juice', name: 'Fresh Orange', price: 160, desc: 'Pressed to order from Nagpur oranges. Nothing added.', photo: '1600271886742-f049cd451bba', tag: 'Cold' },
      { id: 'berry-smoothie', name: 'Berry Smoothie', price: 250, desc: 'Mixed berries, banana, curd and a spoon of honey.', photo: '1600718374662-0483d2b9da44', tag: 'Cold' },
    ],
  },
  {
    key: 'breakfast',
    label: 'Breakfast',
    note: 'Served 07:00 to 12:00 on house sourdough, with eggs from a farm outside Udupi.',
    items: [
      { id: 'avocado-toast', name: 'Avocado Sourdough', price: 320, desc: 'Smashed avocado, soft-boiled egg, chilli flakes, lime.', photo: '1541519227354-08fa5d50c44d', tag: 'Veg' },
      { id: 'eggs-toast', name: 'Eggs on Toast', price: 280, desc: 'Two fried eggs, herb butter and toasted sourdough.', photo: '1525351484163-7529414344d8', tag: 'Egg' },
      { id: 'pancakes', name: 'Buttermilk Pancakes', price: 290, desc: 'A tall stack with berries, whipped butter and maple.', photo: '1528207776546-365bb710ee93', tag: 'Veg' },
      { id: 'sandwich', name: 'Garden Sandwich', price: 260, desc: 'Grilled vegetables, pesto and mozzarella on focaccia.', photo: '1509722747041-616f39b57569', tag: 'Veg' },
      { id: 'granola', name: 'Granola Bowl', price: 240, desc: 'House granola, thick curd, blueberries and honey.', photo: '1504708706948-13d6cbba4062', tag: 'Veg' },
      { id: 'crepes', name: 'Butter Crêpes', price: 270, desc: 'Thin French crêpes with lemon, sugar and fresh cream.', photo: '1519676867240-f03562e64548', tag: 'Veg' },
    ],
  },
  {
    key: 'pastries',
    label: 'Pastries',
    note: 'Laminated by hand overnight and out of the oven before the doors open.',
    items: [
      { id: 'croissant', name: 'Butter Croissant', price: 180, desc: 'Seventy-two layers of French butter. Shatters properly.', photo: '1555507036-ab1f4038808a', tag: 'Daily' },
      { id: 'cinnamon-roll', name: 'Cinnamon Roll', price: 190, desc: 'Brown-sugar swirl with a cream cheese glaze.', photo: '1509365465985-25d11c17e812', tag: 'Daily' },
      { id: 'almond-croissant', name: 'Almond Croissant', price: 220, desc: 'Twice-baked with frangipane and toasted almonds.', photo: '1530610476181-d83430b64dcd', tag: 'Weekend' },
      { id: 'muffin', name: 'Chocolate Muffin', price: 160, desc: 'Dark chocolate chunks and a crackled sugar top.', photo: '1603532648955-039310d9ed75', tag: 'Daily' },
      { id: 'sourdough', name: 'Sourdough Loaf', price: 350, desc: 'Our 36-hour country loaf, to take home.', photo: '1509440159596-0249088772ff', tag: 'Take-home' },
      { id: 'bread-basket', name: "Baker's Basket", price: 420, desc: 'A selection of the morning bake for the table.', photo: '1608198093002-ad4e005484ec', tag: 'Share' },
    ],
  },
]

export const signature = {
  id: 'ferea-latte',
  name: 'The Feréa Latte',
  price: 240,
  desc: 'Double espresso, silky steamed milk and our house caramel blend.',
  photo: photos.signature,
}

export const combo = {
  id: 'breakfast-combo',
  name: 'Breakfast Combo',
  price: 320,
  original: 370,
  items: [
    { name: 'Coffee Latte', price: 190 },
    { name: 'Butter Croissant', price: 180 },
  ],
}

export const careBlocks = [
  {
    no: '01',
    title: 'Fresh every day',
    heading: 'Out of the oven before sunrise.',
    body: 'Croissants, loaves and cinnamon rolls are baked in-house every morning. What doesn’t sell by evening goes to the staff table — never to tomorrow’s counter.',
    photo: photos.careFresh,
    alt: 'A glass bakery counter filled with freshly baked pastries and breads',
  },
  {
    no: '02',
    title: 'Specialty coffee',
    heading: 'Brewed with intention.',
    body: 'We work with growers in Chikmagalur and Coorg, roast in small batches and dial in every bean each morning so your cup tastes the way the farmer intended.',
    photo: photos.careSpecialty,
    alt: 'A barista preparing pour-over coffee at a brew bar',
  },
  {
    no: '03',
    title: 'Warm hospitality',
    heading: 'More than a coffee stop.',
    body: 'Remember-your-order kind of service, long tables for study sessions and quiet corners for slow Sundays. Stay as long as the coffee lasts — and then some.',
    photo: photos.careHospitality,
    alt: 'A smiling barista behind a café counter',
  },
]

export const places = [
  { title: 'The Lounge', caption: 'Soft light, long conversations', photo: photos.placeInterior, alt: 'Warm café interior with wooden tables and chairs' },
  { title: 'The Counter', caption: 'Watch your coffee being made', photo: photos.placeCounter, alt: 'Coffee bar counter with espresso machine and pendant lights' },
  { title: 'The Terrace', caption: 'Lake breeze, open air', photo: photos.placeTerrace, alt: 'Outdoor café seating on a sunny street terrace' },
]

export const testimonials = [
  {
    quote: 'Feréa has become my favourite coffee stop. The coffee is consistently amazing, and there’s something about the space that makes you want to stay a little longer.',
    name: 'Ryan Brooks',
    place: 'Manipal',
    photo: '1495474472287-4d71bcdd2085',
    alt: 'Two friends clinking cups of latte',
    tone: 'espresso',
  },
  {
    quote: 'The kind of place you find yourself returning to without even thinking about it. Great coffee, beautiful atmosphere, and genuinely warm people.',
    name: 'Chen',
    place: 'Udupi',
    photo: '1525610553991-2bede1a236e2',
    alt: 'Guests chatting at tables inside a busy café',
    tone: 'ivory',
  },
  {
    quote: 'Perfect for a slow breakfast or an afternoon coffee. The food is excellent and the space feels incredibly calm.',
    name: 'Ethan Parker',
    place: 'Manipal',
    photo: '1534040385115-33dcb3acba5b',
    alt: 'A coffee and notebook on a table by a sunny window',
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
    excerpt: 'Follow a single bean from a hillside estate in Chikmagalur to the cup on your table.',
    photo: '1511537190424-bbbab87ac5eb',
    alt: 'Freshly roasted beans cooling in a coffee roaster drum',
    body: [
      'Every cup we pour starts as a red cherry on a shade-grown hillside in the Western Ghats. Our partner estates in Chikmagalur hand-pick only the ripe fruit, which is why the harvest takes weeks rather than days.',
      'After picking, the cherries are either washed or sun-dried on raised beds. Washed coffees taste cleaner and brighter; naturals carry more fruit and body. We keep one of each on the bar so you can taste the difference side by side.',
      'Green beans arrive at our roastery in jute sacks and are roasted in small batches of twelve kilos. Each profile is logged, cupped and adjusted before a single bag reaches the café.',
      'By the time your barista dials in the grinder at 06:30, that bean has travelled roughly 180 kilometres and passed through at least a dozen careful hands. We think that is worth slowing down for.',
    ],
  },
  {
    slug: 'understanding-your-roast',
    category: 'Beans',
    date: 'Aug 12, 2026',
    readTime: '4 min read',
    title: 'Understanding Your Favourite Roast',
    excerpt: 'Light, medium or dark — what roast level really changes in your cup, and how to choose.',
    photo: '1447933601403-0c6688de566e',
    alt: 'Close-up of dark roasted coffee beans',
    body: [
      'Roast level is less about strength and more about which flavours you want to bring forward. Caffeine barely changes between a light and a dark roast.',
      'Light roasts keep the origin character intact: citrus, florals and a juicy acidity. They shine as pour-overs and are what we reach for on the filter menu.',
      'Medium roasts balance sweetness and body — think caramel, milk chocolate and roasted nuts. Our house espresso sits here because it plays beautifully with milk.',
      'Dark roasts trade brightness for bittersweet cocoa and a heavier mouthfeel. If you love a strong South Indian filter coffee, start here and work your way lighter.',
    ],
  },
  {
    slug: 'art-of-brewing',
    category: 'Brewing',
    date: 'Jul 30, 2026',
    readTime: '5 min read',
    title: 'The Simple Art of Brewing a Perfect Coffee Cup',
    excerpt: 'Four variables, one kettle and a little patience. Our baristas’ guide to better coffee at home.',
    photo: '1504627298434-2119d6928e93',
    alt: 'Hot water being poured into a glass pour-over coffee maker',
    body: [
      'Great coffee at home comes down to four things: fresh beans, the right grind, clean water and an honest ratio.',
      'Start with 15 grams of coffee to 250 grams of water. Grind just before brewing — medium-fine for a pour-over, coarse for a French press.',
      'Heat your water to around 93°C. If you don’t have a thermometer, let a boiled kettle rest for thirty seconds.',
      'Bloom the grounds with a splash of water for 30 seconds, then pour slowly in circles. Taste, adjust one variable at a time, and write down what you like.',
    ],
  },
  {
    slug: 'little-things-great-cafe',
    category: 'Café Life',
    date: 'Jul 14, 2026',
    readTime: '3 min read',
    title: 'The Little Things That Make a Truly Great Café',
    excerpt: 'Warm light, the right chair and a barista who remembers your name — the details we obsess over.',
    photo: '1485182708500-e8f1f318ba72',
    alt: 'Guests sitting in a bright, airy café with large windows',
    body: [
      'A great café is rarely about one big idea. It is a hundred small decisions that add up to a feeling of ease.',
      'We chose warm 2700K lighting so evenings feel golden rather than clinical, and tuned the playlist to sit just under conversation.',
      'Our chairs were tested by the team for a full working day before we ordered them. Plugs sit under every long table, because a study session shouldn’t end at 20% battery.',
      'And we train every new barista to learn five regulars’ orders in their first week. It sounds small. It is not.',
    ],
  },
]

export const faqs = [
  {
    q: 'What kind of coffee does Feréa serve?',
    a: 'We serve specialty-grade Arabica from partner estates in Chikmagalur and Coorg, roasted in small batches every week. Expect espresso classics, pour-overs, cold brew and a rotating single-origin on the filter bar.',
  },
  {
    q: 'Can I order Feréa drinks for takeaway?',
    a: 'Absolutely. Every drink on the menu can be made to go in fully compostable cups — or bring your own cup and get ₹20 off. You can also order ahead on this site and pick up at the counter.',
  },
  {
    q: 'Does Feréa offer non-coffee drinks?',
    a: 'Yes — ceremonial matcha, masala chai, hot chocolate, cold-steeped iced teas, fresh juices and smoothies. Most drinks can be made with oat or almond milk at no extra charge.',
  },
  {
    q: 'Does Feréa offer fresh food or bakery items?',
    a: 'Our pastries and sourdough are baked in-house every morning. Breakfast is served from 07:00 to 12:00, with sandwiches and light plates available through the day.',
  },
  {
    q: 'Where can I find Feréa Café?',
    a: 'You’ll find us on End Point Road, near Manipal Lake, Manipal, Karnataka 576104 — a short walk from the End Point viewpoint. There is two-wheeler parking right outside.',
  },
]
