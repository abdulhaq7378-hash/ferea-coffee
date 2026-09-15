/*
 * All copy, prices and photography for the site live here.
 * Photos: Unsplash ids look like "1541167760496-1628856ab772", Pexels ids are numeric ("31774138",
 * or "33932441.png" for the few stored as PNG). Any full URL or local "/images/…" path also works.
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
  heroPour: '33932441.png',
  heroEspresso: '1680413002471-965cca788f5b',
  storyIced: '14932958',
  careFresh: '35588501',
  careSpecialty: '29748530',
  careHospitality: '15801128',
  placeInterior: '13258456',
  placeCounter: '32328759',
  placeTerrace: '31774138',
  signature: '37174966',
  comboLatte: '36883603',
  comboCroissant: '1623334044303-241021148842',
  finalCta: '37266550',
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
    note: 'Arabica from partner estates in Chikmagalur and Coorg, roasted in small batches every week.',
    items: [
      { id: 'filter-kaapi', name: 'Filter Kaapi', price: 70, desc: 'Strong decoction and frothy milk, poured tumbler-and-davara style.', photo: '38201891.png', tag: 'Hot' },
      { id: 'americano', name: 'Americano', price: 130, desc: 'A double shot over hot water. Bright, clean and bold.', photo: '1551030173-122aabc4489c', tag: 'Hot' },
      { id: 'cappuccino', name: 'Cappuccino', price: 160, desc: 'Velvety microfoam over a double shot of house espresso.', photo: '1625033405953-f20401c7d848', tag: 'Hot' },
      { id: 'cafe-latte', name: 'Café Latte', price: 170, desc: 'Silky steamed milk and espresso, finished with latte art.', photo: '1561047029-3000c68339ca', tag: 'Hot' },
      { id: 'coconut-cold-brew', name: 'Coconut Cold Brew', price: 190, desc: '16-hour cold brew topped with tender coconut cream.', photo: '31142368', tag: 'Iced' },
      { id: 'cold-coffee', name: 'Classic Cold Coffee', price: 150, desc: 'Thick, chilled and blended — the exam-week favourite.', photo: '34806927', tag: 'Iced' },
    ],
  },
  {
    key: 'non-coffee',
    label: 'Non-Coffee',
    note: 'Strong chai, coastal coolers and a few slow-afternoon treats.',
    items: [
      { id: 'masala-chai', name: 'Masala Chai', price: 60, desc: 'Ginger, cardamom and clove, brewed strong in a kulhad.', photo: '20270270', tag: 'Hot' },
      { id: 'kokum-cooler', name: 'Kokum Mint Cooler', price: 120, desc: 'Tangy coastal kokum with fresh mint and a splash of soda.', photo: '1600718374662-0483d2b9da44', tag: 'Iced' },
      { id: 'lemon-iced-tea', name: 'Lemon Iced Tea', price: 110, desc: 'House-brewed black tea, lemon and a little honey.', photo: '1556679343-c7306c1976bc', tag: 'Iced' },
      { id: 'orange-juice', name: 'Fresh Orange Juice', price: 110, desc: 'Pressed to order. Nothing added, nothing taken away.', photo: '1600271886742-f049cd451bba', tag: 'Cold' },
      { id: 'hot-chocolate', name: 'Hot Chocolate', price: 170, desc: 'Dark cocoa melted slowly into steamed milk.', photo: '1542990253-0d0f5be5f0ed', tag: 'Hot' },
      { id: 'matcha', name: 'Matcha Latte', price: 210, desc: 'Ceremonial-grade matcha whisked with oat or dairy milk.', photo: '1515823064-d6e0c04616a7', tag: 'Hot / Iced' },
    ],
  },
  {
    key: 'breakfast',
    label: 'All-Day Eats',
    short: 'Eats',
    note: 'South Indian classics in the morning, café favourites all day. Most dishes are vegetarian.',
    items: [
      { id: 'idli-vada', name: 'Idli Vada Plate', price: 110, desc: 'Two soft idlis, a crisp vada, sambar and coconut chutney.', photo: '37867687', tag: 'Veg' },
      { id: 'benne-dosa', name: 'Benne Masala Dosa', price: 140, desc: 'Butter-roasted dosa with potato palya and chutney.', photo: '9619560', tag: 'Veg' },
      { id: 'chilli-cheese-toast', name: 'Chilli Cheese Toast', price: 130, desc: 'Green chilli, coriander and a molten cheese blanket.', photo: '12337069', tag: 'Veg' },
      { id: 'omelette-toast', name: 'Masala Omelette Toast', price: 150, desc: 'Onion, chilli and coriander omelette on buttered toast.', photo: '27396342', tag: 'Egg' },
      { id: 'paneer-sandwich', name: 'Pesto Paneer Sandwich', price: 190, desc: 'Grilled paneer, basil pesto and peppers on multigrain.', photo: '35054704', tag: 'Veg' },
      { id: 'pancakes', name: 'Buttermilk Pancakes', price: 190, desc: 'A fluffy stack with honey butter and seasonal fruit.', photo: '1528207776546-365bb710ee93', tag: 'Egg' },
    ],
  },
  {
    key: 'bakes',
    label: 'Bakes',
    note: 'Baked in-house every morning. Eggless options marked.',
    items: [
      { id: 'croissant', name: 'Butter Croissant', price: 120, desc: 'Flaky, laminated and out of the oven by 7am.', photo: '1555507036-ab1f4038808a', tag: 'Daily' },
      { id: 'pain-au-chocolat', name: 'Pain au Chocolat', price: 150, desc: 'Croissant dough rolled around dark chocolate batons.', photo: '36654508', tag: 'Daily' },
      { id: 'cinnamon-roll', name: 'Cinnamon Roll', price: 130, desc: 'Soft swirl with cinnamon sugar and cream-cheese glaze.', photo: '1509365465985-25d11c17e812', tag: 'Daily' },
      { id: 'brownie', name: 'Fudge Brownie', price: 110, desc: 'Dense, dark and crackle-topped. Best with cold coffee.', photo: '28744928', tag: 'Daily' },
      { id: 'banana-muffin', name: 'Banana Walnut Muffin', price: 90, desc: 'Moist, made with local bananas and toasted walnuts.', photo: '1603532648955-039310d9ed75', tag: 'Eggless' },
      { id: 'black-forest', name: 'Black Forest Slice', price: 140, desc: 'Chocolate sponge, whipped cream and cherries.', photo: '37551576', tag: 'Eggless' },
    ],
  },
]

export const signature = {
  id: 'ferea-latte',
  name: 'The Feréa Latte',
  price: 190,
  desc: 'Double espresso, silky steamed milk and our house jaggery caramel.',
  photo: photos.signature,
}

export const combo = {
  id: 'breakfast-combo',
  name: 'Breakfast Combo',
  price: 240,
  original: 280,
  items: [
    { name: 'Cappuccino', price: 160 },
    { name: 'Butter Croissant', price: 120 },
  ],
}

export const careBlocks = [
  {
    no: '01',
    title: 'Fresh every day',
    heading: 'Out of the oven before sunrise.',
    body: 'Croissants, brownies and cinnamon rolls are baked in-house every morning. What doesn’t sell by evening goes to the staff table — never to tomorrow’s counter.',
    photo: photos.careFresh,
    alt: 'A café pastry counter with croissants and cakes, terracotta jars on the shelves',
  },
  {
    no: '02',
    title: 'Specialty coffee',
    heading: 'Brewed with intention.',
    body: 'We work with growers in Chikmagalur and Coorg, roast in small batches and dial in every bean each morning — from your filter kaapi to your flat white.',
    photo: photos.careSpecialty,
    alt: 'A barista pouring latte art into a cup',
  },
  {
    no: '03',
    title: 'Warm hospitality',
    heading: 'More than a coffee stop.',
    body: 'Remember-your-order kind of service, long tables for study sessions and quiet corners for slow Sundays. Stay as long as the coffee lasts — and then some.',
    photo: photos.careHospitality,
    alt: 'A server placing a latte on a garden café table for a guest',
  },
]

export const places = [
  { title: 'The Lounge', caption: 'Rattan lights, long conversations', photo: photos.placeInterior, alt: 'Café interior with rattan pendant lamps, patterned tile floor and a garden view' },
  { title: 'The Counter', caption: 'Watch your coffee being made', photo: photos.placeCounter, alt: 'Café counter under a wooden lattice ceiling with rattan lamps' },
  { title: 'The Terrace', caption: 'Tiled roof, monsoon greenery', photo: photos.placeTerrace, alt: 'Open-air café terrace under a terracotta tiled roof surrounded by greenery' },
]

export const testimonials = [
  {
    quote: 'Feréa has become my favourite coffee stop. The coffee is consistently amazing, and there’s something about the space that makes you want to stay a little longer.',
    name: 'Ananya Rao',
    place: 'Manipal',
    photo: '11413997',
    alt: 'Friends raising cups of kulhad chai together',
    tone: 'espresso',
  },
  {
    quote: 'The kind of place you find yourself returning to without even thinking about it. Great coffee, beautiful atmosphere, and genuinely warm people.',
    name: 'Karthik Shenoy',
    place: 'Udupi',
    photo: '38173003',
    alt: 'A couple chatting at a garden café table under palm trees',
    tone: 'ivory',
  },
  {
    quote: 'Perfect for a slow breakfast or an afternoon coffee. The food is excellent and the space feels incredibly calm.',
    name: 'Meera Pai',
    place: 'Manipal',
    photo: '36683119',
    alt: 'A smiling guest chatting across a café table',
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
      'By the time your barista dials in the grinder at 06:30, that bean has travelled roughly 200 kilometres down the ghats and passed through at least a dozen careful hands. We think that is worth slowing down for.',
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
      'Light roasts keep the origin character intact: citrus, florals and a juicy acidity. They shine as pour-overs and are what we reach for on the filter bar.',
      'Medium roasts balance sweetness and body — think jaggery, milk chocolate and roasted nuts. Our house espresso sits here because it plays beautifully with milk.',
      'Dark roasts trade brightness for bittersweet cocoa and a heavier mouthfeel. If you grew up on strong filter kaapi, start here and work your way lighter.',
    ],
  },
  {
    slug: 'art-of-brewing',
    category: 'Brewing',
    date: 'Jul 30, 2026',
    readTime: '5 min read',
    title: 'The Simple Art of Brewing a Perfect Coffee Cup',
    excerpt: 'From the steel filter to the frothy pour — our baristas’ guide to great filter kaapi at home.',
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
    photo: '35813673',
    alt: 'A bright café with mustard arches, a checkerboard floor and potted plants',
    body: [
      'A great café is rarely about one big idea. It is a hundred small decisions that add up to a feeling of ease.',
      'We chose warm lighting so monsoon evenings feel golden rather than clinical, and tuned the playlist to sit just under conversation.',
      'Our chairs were tested by the team for a full working day before we ordered them. Plugs sit under every long table, because a study session before exams shouldn’t end at 20% battery.',
      'And we train every new barista to learn five regulars’ orders in their first week. It sounds small. It is not.',
    ],
  },
]

export const faqs = [
  {
    q: 'What kind of coffee does Feréa serve?',
    a: 'Specialty-grade Arabica from partner estates in Chikmagalur and Coorg, roasted in small batches every week. Expect proper filter kaapi alongside espresso classics, cold brew and cold coffee.',
  },
  {
    q: 'Can I order Feréa drinks for takeaway?',
    a: 'Absolutely. Every drink on the menu can be packed to go — or bring your own cup and get ₹10 off. You can also order ahead on this site and pick up at the counter.',
  },
  {
    q: 'Does Feréa offer non-coffee drinks?',
    a: 'Yes — masala chai, kokum mint cooler, lemon iced tea, fresh juice, hot chocolate and matcha. Most milk drinks can be made with oat milk on request.',
  },
  {
    q: 'Does Feréa offer fresh food or bakery items?',
    a: 'Our bakes come out of the oven every morning. Idli-vada and dosa are served from 07:00 to 11:30, with toasts, sandwiches and pancakes available all day. Most dishes are vegetarian.',
  },
  {
    q: 'Where can I find Feréa Café?',
    a: 'You’ll find us on End Point Road, near Manipal Lake, Manipal, Karnataka 576104 — a short walk from the End Point viewpoint. There is two-wheeler parking right outside.',
  },
]
