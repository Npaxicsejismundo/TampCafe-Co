// External links. The design used "#order" placeholders for all of these —
// fill in the real URLs before launch.
export const LINKS = {
  cakeOrderForm: '#',
  eventInquiry: '#',
  careers: '#',
  grab: '#',
  foodpanda: '#',
  facebook: '#',
  instagram: '#',
  tiktok: '#',
};

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Black Sheep', to: '/black-sheep' },
  { label: 'Cake', to: '/cake' },
  { label: 'Event Hall', to: '/event-hall' },
  { label: 'Contact', to: '/contact' },
];

// Five photos per branch from tampcafe.com/contact-us: public/images/branches/<key>-1..5.webp
const photos = (key) => [1, 2, 3, 4, 5].map((n) => `/images/branches/${key}-${n}.webp`);

export const BRANCHES = [
  { name: 'Lahug', photos: photos('lahug'), hours: '7:30 am – 10:00 pm', address: 'Tsai Hotel, 11 Wilson St, Lahug, Cebu City', phone: '0933 875 1159', where: 'Tsai Hotel, Wilson St', extra: 'Ground floor, street parking along Wilson St.' },
  { name: 'Banilad Town Centre', photos: photos('btc'), hours: '7:30 am – 10:00 pm', address: 'Unit 101 Banilad Town Centre, Cebu City', phone: '0933 811 1211', where: 'Unit 101, BTC', extra: 'Home of the Black Sheep menu and The Pelican Event Hall (up to 120 guests).' },
  { name: 'Kasambagan', photos: photos('kasambagan'), hours: '7:30 am – 10:00 pm', address: '12 President Aguinaldo St, Cebu City', phone: '0919 096 5707', where: '12 Pres. Aguinaldo St', extra: 'The Pelican Event Hall Kasambagan sits upstairs (up to 42 guests).' },
  { name: 'Banawa', photos: photos('banawa'), hours: '7:30 am – 10:00 pm', address: 'Paseo Arcenas, R. Arcenas St, Cebu City', phone: '0928 511 8884', where: 'Paseo Arcenas', extra: 'Now accepting reservations on the 2nd floor — Mon to Thu 7:30 am – 8:30 pm, Fri to Sun 7:30 am – 5:00 pm.' },
];

export const directionsUrl = (address) =>
  'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Tamp Cafe ' + address);

export const telUrl = (phone) => 'tel:+63' + phone.replace(/\D/g, '').replace(/^0/, '');

// `position` reproduces the crop framed in the design tool.
export const NEW_ITEMS = [
  { name: 'Cereal Chicken', image: '/images/new-cereal-chicken.webp', position: '50% 23%', desc: 'Crispy chicken tossed in buttery breakfast cereal and fragrant asian herbs.', price: '₱385 · to share' },
  { name: 'Black Peach', image: '/images/new-black-peach.webp', position: '50% 82%', desc: 'Iced black coffee with peach syrup.', price: '₱195 · iced' },
  { name: 'Sea Salt Macchiato', image: '/images/new-sea-salt-macchiato.webp', position: '50% 69%', desc: 'Bold espresso latte topped with creamy sea salt foam.', price: '₱225 · iced' },
  { name: 'Sea Salt Matcha', image: '/images/new-sea-salt-matcha.webp', position: '50% 63%', desc: 'A rich matcha latte finished with luscious sea salt foam.', price: '₱235 · iced' },
];

export const PILLARS = [
  { kicker: 'Order 2 days ahead', title: 'Tamp Signature Cakes', body: 'Thirty-something whole cakes, from Chocolate Blackout to Pistachio Decadence. Slices available daily at the chiller.', cta: 'See cakes', image: '/images/pillar-cake.webp', position: '50% 55%', alt: 'Cake slice on a plate', to: '/cake' },
  { kicker: 'Two boards', title: 'Food & Drinks', body: 'All-day breakfast, Asian comfort plates, a full brew bar — plus the Black Sheep specials at Banilad Town Centre.', cta: 'Open the menu', image: '/images/pillar-food.webp', alt: 'Drinks on a table', to: '/menu' },
  { kicker: 'Up to 120 guests', title: 'The Pelican Event Hall', body: 'Intimate weddings, birthdays and corporate gatherings at Kasambagan and Banilad Town Centre.', cta: 'Plan an event', image: '/images/pillar-pelican.webp', alt: 'Event hall long table', to: '/event-hall' },
];

export const REVIEWS = [
  { quote: 'As a regular customer, I can confidently say that the food, ambiance, and staff never disappoint on every visit. Tamp Lahug is our go-to spot, and I rate it a solid 10/10.', by: 'Gianni Nichole Capili', branch: 'Lahug' },
  { quote: 'The ambiance of the place was great. The food was delish and portion was more than what we expected. Also, don’t miss out their promo.', by: 'Shaznay Mabaylan', branch: 'Banilad Town Centre' },
  { quote: 'Had a great dining experience at Tamp! The food was delicious, and the service was excellent. My friend and I took advantage of their Piso Cake promo — a tasty slice of cake for just one peso.', by: 'Jessa Raganas', branch: 'Kasambagan' },
  { quote: 'Its the Very Best Service. And the Food is Outstanding. French Onion Soup, Steak Sandwich, Salad and Red Velvet Cake and Blueberry Cheesecake. All Very Good.', by: 'Robbi Falkner', branch: 'Paseo Banawa' },
];

export const VENUES = [
  { name: 'Kasambagan', cap: 'Up to 42 guests', image: '/images/venue-kasambagan.webp', alt: 'Tamp Kasambagan storefront with The Pelican Event Hall upstairs', address: 'No. 12, Pres. Aguinaldo St., Kasambagan, Cebu City' },
  { name: 'Banilad Town Centre', cap: 'Up to 120 guests', image: '/images/venue-btc.webp', position: '50% 30%', alt: 'The Pelican Event Hall at Banilad Town Centre', address: 'Unit 201, Banilad Town Centre, Gov. M. Cuenco Ave., Cebu City' },
];

const buffet = (name, tag, courses, tiers) => ({ name, tag, courses, tiers });

export const BUFFETS = [
  buffet('Asian', 'Buffet 1 · Kasambagan', [
    { label: 'Salad', items: 'Mango kani salad' },
    { label: 'Mains', items: 'Sticky korean chicken wings · Slow cooked pot roast beef · Shrimp in thai street cilantro sauce' },
    { label: 'Pasta', items: 'Tomato basil pasta' },
    { label: 'Dessert & drinks', items: 'Fudge brownie bites · 1 round dalandan juice' },
  ], [{ pax: '24 – 30 pax', price: '₱20,900' }, { pax: '30 – 36 pax', price: '₱26,260' }, { pax: '36 – 42 pax', price: '₱31,620' }]),
  buffet('Filipino', 'Buffet 1 · Kasambagan', [
    { label: 'Salad', items: 'Tupplenut salad' },
    { label: 'Mains', items: 'Pork kawali in tomato & onion stew · Slow cooked pot roast beef · Prawn paste chicken' },
    { label: 'Pasta', items: 'Tomato basil pasta' },
    { label: 'Dessert & drinks', items: 'Fudge brownie bites · 1 round dalandan juice' },
  ], [{ pax: '24 – 30 pax', price: '₱22,500' }, { pax: '30 – 36 pax', price: '₱27,960' }, { pax: '36 – 42 pax', price: '₱33,320' }]),
  buffet('Western', 'Buffet 1 · Kasambagan', [
    { label: 'Salad & soup', items: 'Tupplenut salad · Tomato herb or truffled mushroom soup' },
    { label: 'Mains', items: 'American pork ribs · Beef stroganoff' },
    { label: 'Pasta', items: 'Tomato basil pasta' },
    { label: 'Dessert & drinks', items: 'Fudge brownie bites · 1 round dalandan juice' },
  ], [{ pax: '24 – 30 pax', price: '₱21,600' }, { pax: '30 – 36 pax', price: '₱26,760' }, { pax: '36 – 42 pax', price: '₱32,120' }]),
  buffet('Asian', 'Buffet 2 · Banilad Town Centre', [
    { label: 'Salad', items: 'Mango kani salad' },
    { label: 'Pasta', items: 'Bonito wafu pasta' },
    { label: 'Mains', items: 'Chicken tartar · Asian caramelized pork · Japanese beef gyudon niku' },
    { label: 'Dessert & drinks', items: 'Brownie bites · 1 round dalandan juice · Plain rice' },
  ], [{ pax: '30 pax half hall', price: '₱32,400' }, { pax: '50 pax full hall', price: '₱55,100' }, { pax: '120 pax full hall', price: '₱119,900' }]),
  buffet('Filipino', 'Buffet 2 · Banilad Town Centre', [
    { label: 'Salad', items: 'Salted egg with mango quinoa' },
    { label: 'Pasta', items: 'Tomato and basil pasta' },
    { label: 'Mains', items: 'Chicken parmigiana · Pork kawali in tomato and onion stew · Pan seared fish with mango salsa' },
    { label: 'Dessert & drinks', items: 'Brownie bites · 1 round dalandan juice · Plain rice' },
  ], [{ pax: '30 pax half hall', price: '₱28,700' }, { pax: '50 pax full hall', price: '₱49,500' }, { pax: '120 pax full hall', price: '₱106,800' }]),
  buffet('Black Sheep', 'Specials buffet · Banilad Town Centre', [
    { label: 'Salad', items: 'Caesar salad' },
    { label: 'Pasta', items: 'Spinach & blue cheese rigatoni' },
    { label: 'Mains', items: 'Peri peri grilled chicken · Japanese beef gyudon niku · Cereal prawn' },
    { label: 'Dessert & drinks', items: 'Brownie bites · 1 round dalandan juice · Plain rice' },
  ], [{ pax: '30 pax half hall', price: '₱40,800' }, { pax: '50 pax full hall', price: '₱68,800' }, { pax: '120 pax full hall', price: '₱150,700' }]),
];
