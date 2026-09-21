// Photos from tampcafe.com/cake, matched to cakes by filename: src/assets/cakes/<slug>.jpg
const PHOTOS = Object.fromEntries(
  Object.entries(import.meta.glob('../assets/cakes/*.{jpg,png,webp}', { eager: true, import: 'default' })).map(
    ([path, url]) => [path.split('/').pop().replace(/\.\w+$/, ''), url]
  )
);

const C = (name, price, label, alt, desc) => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return { name, price: '₱' + price, label, alt, desc, slug, image: PHOTOS[slug] };
};

export const CAKES = {
  Cakes: [
    C('Chocolate Blackout', '990', 'whole', '₱150 slice', 'Moist chocolate cake with dark chocolate filling'),
    C('Rainbow Cake', '1,240', 'whole', '₱160 slice', 'Layers of cake full of flavors with cream cheese icing and easy meringue'),
    C('Carrot Walnut Cake', '1,140', 'whole', '₱150 slice', 'Carrot cake with cream cheese frosting'),
    C('Chocolate Velvet', '1,240', 'whole', '₱160 slice', 'Dark velvet chocolate mousse on a smooth base'),
    C('Yema Cake', '1,140', 'whole', '₱150 slice', 'Chiffon and moist cheese cake with yema filling'),
    C('Caramel Delight', '1,040', 'whole', '₱150 slice', 'Moist chocolate cake with caramel filling, best in Cebu'),
    C('Mocha Mousse', '1,040', 'whole', '₱150 slice', 'Moist sponge cake with mocha mousse filling'),
    C('Strawberry Bliss', '1,140', 'whole', '₱150 slice', 'Chiffon cake with strawberry mousse filling'),
    C('Matcha Shortcake', '1,300', 'whole', '₱170 slice', 'Fluffy vanilla sponge with green tea and fresh cream, made with real matcha'),
    C('Matcha Basque', '2,100', 'whole', '₱190 slice', 'Matcha flavor, light and rich layer, with a caramelised top for that rich, creamy cheesecake'),
    C('Mango Mousse', '1,040', 'whole', '₱150 slice', 'Fresh chiffon cake with mango mousse and mango sauce'),
    C('Red Velvet Cheesecake', '1,880', 'whole', '₱210 slice', 'White chiffon and red velvet with a gentle velvety and cream cheese filling'),
    C('Brownie Cheesecake', '850', 'whole', '₱105 slice', 'Fudgy brownie base, warmed with rum, creamy and delicious'),
    C('Basque Cheesecake', '1,900', 'whole', '₱180 slice', 'Light, tart, indulgent, with a caramelised top for that rich, creamy cheesecake'),
    C('Blueberry Cheesecake', '1,390', 'whole', '₱170 slice', 'Baked cheesecake topped with blueberry filling'),
    C('Lemon Cheesecake', '1,390', 'whole', '₱170 slice', 'Creamy cheesecake with a bright, zesty lemon glaze'),
    C('Ube Pastillas Cake', '990', 'whole', '₱150 slice', 'Ube and pastillas — filled with layers of grated ube and condensed milk filling'),
    C('Ube Velvet', '1,590', 'whole', '₱190 slice', 'Layers of moist ube cake and butter flan with ube filling on top'),
    C('Biscoff Cheesecake', '1,390', 'whole', '₱170 slice', 'Baked cheesecake topped with biscoff filling'),
    C('Pistachio Decadence', '2,350', 'whole', '₱240 slice', 'Layers of rich chocolate crunchy nuts and a silky pistachio cream and mousse for the ultimate indulgence'),
    C('Lemon Meringue', '1,290', 'whole', '₱170 slice', 'Zesty lemon torte crowned with a fluffy toasted meringue'),
  ],
  'Cookies & bars': [
    C('Pistachio Chocolate Cookie', '150', 'per piece', '', 'Chewy chocolate cookie layered with a crisp, nutty center and a touch of pistachio'),
    C('Chocolate Chip Cookie', '120', 'per piece', '', 'Exotic, chewy cookie loaded with dark chocolate cubes — with more chocolate'),
    C('Banana Olive Muffin', '95', 'per piece', '', 'Warm banana muffin studded with chocolate chips and a hint of olive oil richness'),
    C('Fudge Brownies', '90', 'per piece', 'Box of 6 ₱480 · box of 12 ₱920', 'Dense fudge brownie bars'),
    C('Mint Brownies', '90', 'per piece', 'Box of 6 ₱480 · box of 12 ₱920', 'Fudge brownie bars with a cool mint layer'),
  ],
  'Custom & minimalist': [
    C('Minimalist Pink', '1,140', 'whole', '', 'Chiffon and moist chocolate cake with pink icing'),
    C('Minimalist Blue', '1,140', 'whole', '', 'Chiffon and moist chocolate cake with blue icing'),
    C('Two Tier Cake', '2,700', 'whole', 'Lead time applies', 'Two tiers, decorated to your occasion'),
    C('Berry Chocolate', '1,390', 'whole', '', 'Moist chocolate cake with fresh strawberries on top'),
    C('Strawberry Shortcake', '1,300', 'whole', '', 'Chocolate chiffon topped with fresh strawberries, layered with pure cream filling and fresh cream'),
  ],
};
