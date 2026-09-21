const T = (n, p, d) => ({ n, p: '₱' + p, d: d || '' });

export const TAMP_BOARDS = ['Food', 'Drinks', 'Breakfast', 'Family box'];
export const BLACK_SHEEP_BOARDS = ['Black Sheep food', 'Black Sheep drinks'];

export const MENUS = {
  Food: [
    { name: 'Cafe specials', items: [
      T('Shrimps in Thai Street Cilantro Sauce', 435, 'Stir fried shrimps (skin and head on for more flavor) in our Thai Street Cilantro Sauce'),
      T('Seared Fish in Calamansi & Butter Sauce', 495, 'Fillet of fresh marlin or mahi-mahi, salty and tangy calamansi butter sauce, white rice'),
      T('Vietnamese Hangover Shrimp Bowl', 475, 'Stir fry shrimps on our lemongrass coconut rice, spiced cucumber, fried egg and onions (mild spicy)'),
      T('Bak Kut Teh (Pork Rib Soup)', 455, 'Popular in Singapore — prime pork ribs slow cooked till tender, mixed with herb spices and garlic, white rice'),
      T('Crab Omelette', 485, '3 egg crab omelette in crab roe, curry and spices, served with our thai street cilantro sauce and house salad'),
      T('Crispy Beef Masala on Cilantro Rice Pilaf', 495, 'Fried Indian masala spiced tender cut beef with yogurt sauce on cilantro cucumber rice pilaf'),
      T('Spanish Chorizo & Peeled Shrimp Pasta', 495, 'Smoky Spanish chorizo and sauteed peeled shrimps on al dente pasta spaghetti, mild spicy'),
      T('Chicken Bake Tomato Rice', 385, 'Crusted chicken, italian cheese on tomato brown rice'),
      T('Sticky Korean Chicken Wings', 475, 'To share — tossed in our house sweet korean sauce, mild spicy'),
      T('Cereal Chicken', 385, 'New! Breakfast cereal coated chicken, asian herbs with a buttery fragrance, originated from Singapore. Mildly spicy (can take out spice for kids)'),
    ]},
    { name: 'Soup & starters', items: [
      T('Salmon Croquettes', 275, '5 bite size croquettes, wasabi mayo dip, nori'),
      T('Truffled Mushroom Soup', 175, 'Lightly herbed, mushroom bits, croutons, truffle'),
      T('French Onion Soup', 245, 'Beef stock, caramelized onion, bread, italian cheese'),
      T('Potato Chips with Garlic Mayo Dip', 285, 'Thinly sliced, crispy potato chips with garlic mayo dip'),
    ]},
    { name: 'All day breakfast', items: [
      T('Spinach Omelette', 395, 'Spiced spinach, mushrooms, mozzarella cheese, side salad (mild spicy)'),
      T('Tomato & Basil Omelette', 365, 'Fresh basil leaves, tomatoes, mozzarella cheese, side salad'),
      T('Bacon and Mushroom Omelette', 475, 'Shitake, mozzarella cheese, side salad'),
      T('Dark Yogurt Bowl', 385, 'Homemade blended banana yogurt with cocoa, almond granola, cacao nibs, seasonal fruits'),
      T('Pink Granola Fruit Bowl', 395, 'Seasonal — homemade blended dragon fruit and banana yogurt, almond granola, organic chia, coconut chips'),
      T('Green Power Boost Smoothie', 395, 'Banana, spinach, yogurt, mango, almond granola, nuts, chia, coconut chips'),
      T('French Toast', 375, 'Lightly flavored with cinnamon, topped with granola, honey lemon syrup. Add fruits +125, add bacon +165'),
      T('Spanish Chorizo Breakfast', 375, 'New! Lightly spicy chorizo bunkag, paprika, garlic, tornado eggs, rice'),
    ]},
    { name: 'Salads', items: [
      T('Salted Egg w/ Mango Quinoa Salad', 455, 'Salted eggs, mango, quinoa, tomato, cucumber with citrus vinaigrette'),
      T('Tupplenut', 385, 'Our classic favorite — tuna salad on a bed of green lettuce, apple, candied walnut, cucumber and tomatoes with honey mustard vinaigrette'),
      T('Mango Kani', 385, 'Mango, crabsticks, tomato, cucumber, dried seaweed with mayo and honey mustard vinaigrette'),
    ]},
    { name: 'Grilled sandwiches', note: 'white bread', items: [
      T('Tomato and Basil Fontina', 335, 'Basil leaves, fresh tomatoes, fontina italian cheese'),
      T('Tuna Sandwich', 345, 'Tuna salad with tomato and cucumber, fontina italian cheese'),
      T('Angus Beef Cheesesteak', 445, 'Angus beef, caramelized onions, fontina cheese'),
    ]},
    { name: 'Chicken', items: [
      T('Chicken Parmigiana', 375, 'Best of Cebu! Crusted chicken with marinara sauce over garlic olive oil pasta'),
      T('Korean Sticky Chicken Bibimbap', 395, 'Crispy boneless chicken tossed in korean style sauce, carrots, cucumber, sunny egg, with rice, mild spicy'),
      T('Prawn Paste Chicken', 395, 'Must try! Singaporean inspired dish — fried prawn paste marinated chicken, mango cilantro salad, rice'),
      T('Chicken Pops!', 265, 'Kids meal — served with scrambled egg, white rice and juice'),
    ]},
    { name: 'Pork', items: [
      T('Pork Kawali in Tomato Onion Stew', 375, 'Pork kawali in a salty and sweet tomato onion stew, white rice'),
      T('Twin Chops', 395, '2pcs pan seared pork chops with herb butter, garlic rice'),
      T('Tamp Pork Ribs', 495, 'Prime cut ribs with bbq sauce, side salad, garlic rice'),
      T('Caramelized Asian Pork Donburi', 465, 'Asian glazed saucy sticky pork, spinach, sunny egg on garlic rice'),
    ]},
    { name: 'Beef', items: [
      T('Beef Stroganoff', 395, 'Slow cooked beef in a creamy white sauce, with garlic rice'),
      T('Slow Cooked Pot Roast Beef', 485, '3 hours slow cooked beef with potato & carrots in a hearty broth, served with white rice'),
    ]},
    { name: 'Fish', items: [
      T('Torched Salmon and Quinoa Salad', 495, 'Torched fillet of salmon, mixed quinoa salad & spiced spinach'),
      T('Glazed Salmon Donburi', 475, 'Salmon cubes in special glaze, carrots, cucumber, corn, nori, rice'),
      T('Boneless Bangus (Milkfish)', 395, 'Pan-fried, boneless, marinated milkfish with sunny egg, garlic rice'),
    ]},
    { name: 'Pasta', items: [
      T('Tomato and Basil Pasta', 295, 'Tomato and fresh basil with parmesan cheese'),
      T('Bacon Alfredo', 385, 'Bacon, shitake in a creamy parmesan white sauce'),
      T('White Truffle Pasta', 395, 'Truffle cream white sauce, mushrooms'),
    ]},
  ],
  Drinks: [
    { name: 'Tamp special egg cloud drinks', note: 'real whisked eggs, no preservatives', items: [
      T('Coffee Cloud Latte', '235', 'Iced, with espresso'), T('Chocolate Mousse Cloud', '235', 'Iced'), T('Vietnamese Egg Coffee', '235', 'Hot'),
    ]},
    { name: 'Brew bar', items: [
      T('V60 Japan Hario Pour Over', '150'), T('White Brew', '150', '4 for 500 promo'), T('French Press', '195', 'Serves 1–2'),
      T('Traditional Vietnamese Phin Coffee', '160', 'Strong'), T('Affogato', '265', 'Vanilla ice cream with a hazelnut chocolate bottom + espresso'),
    ]},
    { name: 'Flavored coffee', note: 'hot / iced', items: [
      T('Spanish Latte', '175 / 195'), T('Dirty Matcha', '195 / 225'), T('Café Mocha', '175 / 195'), T('Caramel Macchiato', '175 / 195'),
      T('Dirty French Vanilla', '195 / 225'), T('Sea Salt Macchiato', '225', 'Iced, new!'), T('Peach Black', '195', 'Iced black coffee, peach syrup, new!'),
    ]},
    { name: 'Coffee-free', note: 'hot / iced', items: [
      T('Chai Tea Latte', '175 / 195'), T('Chai Chocolate Latte', '225 / 245'), T('French Vanilla', '175 / 195'),
      T('Matcha Green Tea Latte', '185 / 205', 'Now with more matcha'), T('Sea Salt Matcha', '235', 'Iced, new!'),
    ]},
    { name: 'Espresso', items: [
      T('Espresso w/ milk', '175 / 195', 'Café latte, cappuccino, flat white, gibraltar cortado'), T('Espresso w/ oat milk', '205 / 225'),
      T('Americano', '155 / 165'), T('Espresso Double', '120'),
    ]},
    { name: 'Mocktails', note: 'iced, non-alcoholic', items: [
      T('Refresher', '195', 'Mango, basil'), T('Revitalize', '195', 'Honey, lemon, ginger'),
      T('Recover', '245', 'Freshly squeezed oranges, ginger, celery'), T('Rehydrate!', '195', 'Fresh cucumber, ginger, basil'),
    ]},
    { name: 'Blended fruit drinks', note: 'iced', items: [
      T('Mango Passionfruit', '175'), T('Pink Lemonade', '175'), T('The Popeye Smoothie', '195', 'Lunch on the go — banana, spinach, yogurt, chia'),
    ]},
    { name: 'Frappe', note: 'with a shot of espresso', items: [
      T('Café Caramel', '195'), T('Java Chip', '195'), T('Mocha', '195'),
      T('Strawberries and Cream', '215', 'No coffee'), T('Matcha Green Tea', '245', 'No coffee, now with more matcha'), T('Double Chocolate', '255', 'No coffee'),
    ]},
    { name: 'Tea & milk tea', items: [
      T('Tea', '145', 'Hot — Sencha, Royal Darjeeling Oolong, Moonfruit Black Tea, Vanilla Bourbon (Rooibos)'),
      T('Steeped Milk Tea', '165 / 185', 'Hot / iced'), T('Classic Hong Kong Milk Tea', '155', 'Real milk tea, the healthy way'), T('Milo Dinosaur', '175'),
    ]},
    { name: 'Brewed iced tea', items: [
      T('Red Raspberry Black Tea', '165'), T('Passion Fruit Chia Jasmine Tea', '195'),
    ]},
    { name: 'Chocolate pour over', note: 'hot / iced', items: [
      T('Dark Chocolate', '225 / 225', 'With espresso 265'), T('Milk Chocolate', '225', 'Hot'), T('Tamp Signature Chocolate', '225', 'Hot'),
    ]},
    { name: 'With ice cream', items: [
      T('Brownie ala Mode', '195'), T('Mango Brownie ala Mode', '285'), T('Vanilla Ice Cream', '90', '1 scoop'),
    ]},
    { name: 'Other beverages', items: [
      T('Freshly Squeezed Orange Juice', '295'), T('Soda', '85'), T('Mineral Water', '55'), T('Calamansi', '125', 'Hot / iced'),
    ]},
  ],
  Breakfast: [
    { name: 'Omelettes', note: '7:30 – 10:30 am', items: [
      T('Crab Omelette', 485, '3 egg crab omelette in crab roe, curry and spices, served with our thai street cilantro sauce and house salad'),
      T('Spinach Omelette', 395, 'Mild spicy — spiced spinach, mushrooms, mozzarella cheese, side salad'),
      T('Tomato & Basil Omelette', 365, 'Fresh basil leaves, tomatoes, mozzarella cheese, side salad'),
      T('Bacon and Mushroom Omelette', 475, 'Shitake, mozzarella cheese, side salad'),
    ]},
    { name: 'Healthy bowls', items: [
      T('Dark Yogurt Bowl', 385, 'Homemade banana yogurt with cocoa, almond granola, cacao nibs, seasonal fruits'),
      T('Pink Granola Fruit Bowl', 395, 'Homemade dragon fruit and banana yogurt, almond granola, organic chia, seasonal fruits, coconut chips'),
      T('Green Power Boost Smoothie', 395, 'Banana, spinach, yogurt, mango, almond granola, nuts, chia, coconut chips'),
    ]},
    { name: 'Full plates', items: [
      T('Boneless Bangus (Milkfish)', 395, 'Pan-fried, boneless, marinated milkfish with sunny egg, garlic rice'),
      T('Twin Chops', 395, '2pcs pan seared pork chops with herb butter, garlic rice'),
      T('Big Bacon Breakfast', 395, 'Sunny eggs, shitake, garlic rice and side salad. Extra bacon (4–5 strips) +165'),
      T('Chicken Bake Tomato Rice', 385, 'Crusted chicken, mozzarella cheese on tomato brown rice'),
      T('Spanish Chorizo Breakfast', 375, 'New! Lightly spicy chorizo bunkag, paprika, garlic, tornado eggs, rice'),
      T('French Toast', 375, 'Add fruits (kiwi, bananas, mangoes) +125, add bacon +165'),
    ]},
    { name: 'Soup & sandwiches', note: 'white bread', items: [
      T('Tomato and Basil Fontina', 335, 'Basil leaves, fresh tomatoes, fontina italian cheese'),
      T('Tuna Sandwich', 345, 'Tuna salad with tomato and cucumber, fontina'),
      T('Angus Beef Cheesesteak Sandwich', 445, 'Angus beef, caramelized onions, fontina'),
      T('Truffled Mushroom Soup', 175, 'Lightly herbed, mushroom bits, croutons, truffle'),
      T('French Onion Soup', 245, 'Beef stock, caramelized onion, bread, italian cheese'),
    ]},
  ],
  'Family box': [
    { name: 'Take home — family box', note: '1 box serves 3 to 4 persons sharing', items: [
      T('Shrimps in Thai Street Cilantro Sauce', 900, 'Stir fried shrimps (skin and head on for more flavor) in our Thai Street Cilantro Sauce'),
      T('Sticky Korean Chicken Wings', 475, 'Chicken wings tossed in our house sweet korean sauce, perfect for sharing'),
      T('Glazed Salmon', '1,100', 'Salmon cubes in japanese glaze'),
      T('Herbed Butter Pork Chops', 690, 'Can be chopped into bite sized pieces if requested — 4 pieces chops'),
      T('Tamp Pork Ribs', 850, 'Fall off the bone ribs with bbq sauce'),
      T('Slow Cooked Pot Roast Beef', '1,150', '3 hours slow cooked beef with potato and carrots in brown broth'),
      T('Beef Stroganoff', 790, 'Slow cooked beef in a creamy white sauce with fried garlic'),
      T('Pasta Bacon Alfredo', 690, 'Bacon and mushroom in a creamy parmesan white sauce'),
      T('Beef Stroganoff Pasta', 620, 'Slow cooked slices of beef in a creamy white sauce'),
      T('White Truffle Pasta', 730, 'Truffled creamy white sauce'),
    ]},
    // Not priced items: the "price" column holds the box recommendation.
    { name: 'Suggested boxes', items: [
      { n: '4–6 persons', p: '2 to 3 boxes', d: '' }, { n: '7–9 persons', p: '3 to 5 boxes', d: '' },
      { n: '10–12 persons', p: '4 to 6 boxes', d: '' }, { n: '13–15 persons', p: '5 to 7 boxes', d: '' },
    ]},
  ],
  'Black Sheep food': [
    { name: 'Black Sheep specials', items: [
      T('Cereal Prawn', 495, 'To share — breakfast cereal coated shrimps, asian herbs with a buttery fragrance, originated from Singapore. Mildly spicy'),
      T('Peri Peri Chicken', 475, 'Grilled chicken breast, mediterranean spices, homemade mildly spiced peri peri sauce, seared yellow rice'),
      T('Thai Tom Kha Fish Soup', 495, 'White marlin fish or mahi-mahi steamed with lemongrass, cilantro, curry and thai herbs with coconut cream — a fresh and light tasting soup'),
      T('Beef Gyudon', 475, 'Thinly sliced beef with balanced lean and fat to give that traditional gyudon umami, onions, onsen egg, japanese rice'),
      T('Spinach and Blue Cheese Pasta', 395, 'Blanched spinach, bechamel, blue cheese'),
      T('Pasta Nero', 335, 'Cuttlefish ink, garlic, spaghetti pasta'),
    ]},
    { name: 'Salads', items: [
      T('Salted Egg w/ Mango Quinoa Salad', 455, 'Salted egg, mango, quinoa, tomato, cucumber with citrus vinaigrette'),
      T('Tupplenut', 385, 'Our classic favorite — tuna salad on a bed of green lettuce, apple, candied walnut, cucumber and tomatoes with honey mustard vinaigrette'),
      T('Mango Kani', 385, 'Mango, crabsticks, tomato, cucumber, dried seaweed with mayo and honey mustard vinaigrette'),
      T('Grilled Chicken Caesar Salad', 465, 'New! Romaine leaf, other greens, anchovies cream, 75g grilled chicken breast'),
    ]},
    { name: 'Chicken', items: [
      T('Chicken Parmigiana', 375, 'Best of Cebu! Crusted chicken with marinara sauce over garlic olive oil pasta'),
      T('Korean Sticky Chicken Bibimbap', 395, 'Crispy boneless chicken tossed in korean style sauce, carrots, cucumber, sunny egg, with rice, mild spicy'),
      T('Prawn Paste Chicken', 395, 'Must try! Fried prawn paste marinated chicken, mango cilantro salad, rice'),
      T('Chicken Bake Tomato Rice', 385, 'Crusted chicken, mozzarella cheese on tomato brown rice'),
      T('Cereal Chicken', 385, 'New! To share, no rice — breakfast cereal coated chicken, asian herbs with a buttery fragrance, mildly spicy'),
      T('Chicken Pops!', 265, 'Kids meal — served with scrambled egg, white rice and juice'),
    ]},
    { name: 'Pork', items: [
      T('Pork Kawali in Tomato Onion Stew', 375, 'Pork kawali in a salty and sweet tomato onion stew, white rice'),
      T('Twin Chops', 395, '2pcs pan seared pork chops with herb butter, garlic rice'),
      T('Tamp Pork Ribs', 495, 'Prime cut ribs with bbq sauce, side salad, garlic rice'),
      T('Caramelized Asian Pork Donburi', 465, 'Asian glazed saucy sticky pork, spinach, sunny egg on garlic rice'),
      T('Bak Kut Teh (Pork Rib Soup)', 455, 'Prime pork ribs slow cooked till tender, mixed with herb spices and garlic, white rice'),
    ]},
    { name: 'Beef', items: [
      T('Beef Stroganoff', 395, 'Slow cooked beef in a creamy white sauce, with garlic rice'),
      T('Slow Cooked Pot Roast Beef', 485, '3 hours slow cooked beef with potato & carrots in a hearty broth, served with white rice'),
      T('Crispy Beef Masala on Cilantro Rice Pilaf', 495, 'Fried Indian masala spiced tender cut beef with yogurt sauce on cilantro cucumber rice pilaf'),
    ]},
    { name: 'Fish, shrimp & crab', items: [
      T('Torched Salmon and Quinoa Salad', 495, 'Torched fillet of salmon, mixed quinoa salad & spiced spinach'),
      T('Glazed Salmon Donburi', 475, 'Salmon cubes in special glaze, carrots, cucumber, corn, nori, rice'),
      T('Boneless Bangus (Milkfish)', 395, 'Pan-fried, boneless, marinated milkfish with sunny egg, garlic rice'),
      T('Shrimps in Thai Street Cilantro Sauce', 435, 'Stir fried shrimps (skin and head on for more flavor) in our Thai Street Cilantro Sauce'),
      T('Seared Fish in Calamansi & Butter Sauce', 495, 'Fillet of fresh marlin or mahi, salty & tangy calamansi butter sauce, white rice'),
      T('Vietnamese Hangover Shrimp Bowl', 475, 'Stir fry shrimps on our lemongrass coconut rice, spiced cucumber, fried egg and onions (mild spicy)'),
      T('Crab Omelette', 485, '3 egg crab omelette in crab roe, curry and spices, served with our thai street cilantro sauce and house salad'),
    ]},
    { name: 'Soup & starters', items: [
      T('Salmon Croquettes', 275, '5 bite size croquettes, wasabi mayo dip, nori'),
      T('Truffled Mushroom Soup', 175, 'Lightly herbed, mushroom bits, croutons, truffle'),
      T('French Onion Soup', 245, 'Beef stock, caramelized onion, bread, mozzarella cheese'),
      T('Potato Chips with Garlic Mayo Dip', 285, 'Thinly sliced, crispy potato chips with garlic mayo dip'),
      T('Sticky Korean Chicken Wings', 475, 'To share — chicken wings tossed in our house sweet korean sauce, mild spicy'),
    ]},
    { name: 'Pasta', items: [
      T('Tomato and Basil Pasta', 295), T('Bacon Alfredo', 385), T('White Truffle Pasta', 395),
      T('Spanish Chorizo & Peeled Shrimp Pasta', 495, 'Smoky Spanish chorizo and sauteed peeled shrimps on al dente pasta spaghetti, mild spicy'),
    ]},
    { name: 'Sandwich / all day breakfast', items: [
      T('Tomato and Basil Fontina Sandwich', 335, 'Basil leaves, fresh tomatoes, italian fontina cheese'),
      T('Tuna Sandwich', 345, 'Tuna salad with tomato and cucumber, italian fontina cheese'),
      T('Angus Beef Cheesesteak Sandwich', 445, 'Angus beef, caramelized onions, italian fontina cheese'),
      T('Spinach Omelette', 395, 'Spiced spinach, mushrooms, fontina cheese, side salad'),
      T('Tomato & Basil Omelette', 365, 'Fresh basil leaves, tomatoes, fontina cheese, side salad'),
      T('Bacon and Mushroom Omelette', 475, 'Shitake, fontina cheese, side salad'),
      T('Dark Yogurt Bowl', 385, 'Homemade blended banana yogurt with cocoa, almond granola, cacao nibs, seasonal fruits'),
      T('Big Bacon Breakfast', 395, 'Sunny eggs, shitake, garlic rice and side salad. Extra bacon (4–5 strips) +165'),
    ]},
  ],
  'Black Sheep drinks': [
    { name: 'Black Sheep specials', note: 'hot / iced', items: [
      T('Pistachio Latte', '265 / 275'), T('Horchata Cereal Latte', '175', 'Iced — recommended for kids'),
      T('Matcha Cold Foam', '185', 'Iced — orange peel cold foam'), T('Hibiscus Yuzu Iced Tea', '185', 'Iced'),
      T('Black Honey & Oat Latte', '225', 'Iced — made with Australian honey, cinnamon'),
      T('Dirty Oat Matcha', '235 / 245'), T('Banoffee Frappe', '245', 'Real bananas and a shot of espresso'),
    ]},
    { name: 'Tamp special egg cloud drinks', note: 'real whisked eggs, no preservatives', items: [
      T('Coffee Cloud Latte', '235', 'Iced, with espresso'), T('Chocolate Mousse Cloud', '235', 'Iced'), T('Vietnamese Egg Coffee', '235', 'Hot'),
    ]},
    { name: 'Brew bar', items: [
      T('V60 Japan Hario Pour Over', '150'), T('White Brew', '150', '4 for 500 promo'), T('French Press', '195', 'Serves 1–2'),
      T('Traditional Vietnamese Phin Coffee', '160', 'Strong'), T('Affogato', '265', 'Vanilla ice cream with a hazelnut chocolate bottom + espresso'),
    ]},
    { name: 'Flavored coffee', note: 'hot / iced', items: [
      T('Spanish Latte', '175 / 195'), T('Dirty Matcha', '195 / 225'), T('Café Mocha', '175 / 195'), T('Caramel Macchiato', '175 / 195'),
      T('Dirty French Vanilla', '195 / 225'), T('Sea Salt Macchiato', '225', 'Iced, new!'), T('Peach Black', '195', 'Iced black coffee, peach syrup, new!'),
    ]},
    { name: 'Coffee-free', note: 'hot / iced', items: [
      T('Chai Tea Latte', '175 / 195'), T('Chai Chocolate Latte', '225 / 245'), T('French Vanilla', '175 / 195'),
      T('Matcha Green Tea Latte', '185 / 205'), T('Sea Salt Matcha', '235', 'Iced, new!'),
    ]},
    { name: 'Mocktails', note: 'iced, non-alcoholic', items: [
      T('Refresher', '195', 'Mango, basil'), T('Revitalize', '195', 'Honey, lemon, ginger'),
      T('Recover', '245', 'Freshly squeezed oranges, ginger, celery'), T('Rehydrate!', '195', 'Fresh cucumber, ginger, basil'),
    ]},
    { name: 'Blended & frappe', items: [
      T('Mango Passionfruit', '175'), T('Pink Lemonade', '175'), T('The Popeye Smoothie', '195', 'Banana, spinach, yogurt, chia'),
      T('Café Caramel Frappe', '195'), T('Java Chip', '195'), T('Mocha', '195'), T('Double Chocolate', '255', 'No coffee'),
    ]},
    { name: 'Chocolate pour over', note: 'hot / iced', items: [
      T('Dark Chocolate', '225 / 225', 'With espresso 265'), T('Milk Chocolate', '225', 'Hot'), T('Tamp Signature Chocolate', '225', 'Hot'),
    ]},
  ],
};
