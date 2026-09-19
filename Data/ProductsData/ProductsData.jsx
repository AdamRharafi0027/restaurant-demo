// BURGERS
import burger1 from "../../public/menu/burgers/burger1.avif"
import burger2 from "../../public/menu/burgers/burger2.avif"
import burger3 from "../../public/menu/burgers/burger3.avif"
import burger4 from "../../public/menu/burgers/burger4.avif"
// DRINKS
import drink1 from "../../public/menu/drinks/drink1.avif"
import drink2 from "../../public/menu/drinks/drink2.avif"
import drink3 from "../../public/menu/drinks/drink3.avif"
import drink4 from "../../public/menu/drinks/drink4.avif"
// CHICKEN
import chicken1 from "../../public/menu/chicken/chicken1.avif"
import chicken2 from "../../public/menu/chicken/chicken2.avif"
import chicken3 from "../../public/menu/chicken/chicken3.avif"
// WRAPS
import wrap1 from "../../public/menu/wraps/wrap1.avif"
import wrap2 from "../../public/menu/wraps/wrap2.avif"
import wrap3 from "../../public/menu/wraps/wrap3.avif"
// SIDES
import sides1 from "../../public/menu/sides/side1.avif"
import sides2 from "../../public/menu/sides/side2.avif"
import sides3 from "../../public/menu/sides/side3.avif"
import sides4 from "../../public/menu/sides/side4.avif"

const img = (id, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;


// const ProductsData = [

//   {
//     id: 1,
//     title: 'Classic Smash Burger',
//     description: 'Two smashed beef patties, American cheese, pickles, special house sauce on a toasted brioche bun.',
//     price: 45,
//     category: 'burgers',
//     image: burger1,
//     tag: 'POPULAR',
//   },
//   {
//     id: 2,
//     title: 'Spicy Chicken Burger',
//     description: 'Crispy fried chicken fillet, jalapeño mayo, pickled slaw, fresh tomato on a brioche bun.',
//     price: 49,
//     category: 'burgers',
//     image: burger2,
//     tag: 'HOT',
//   },
//   {
//     id: 3,
//     title: 'Double Smash Burger',
//     description: 'Double beef patties, double American cheese, caramelized onions, house special sauce.',
//     price: 62,
//     category: 'burgers',
//     image: burger3,
//   },
//   {
//     id: 4,
//     title: 'BBQ Bacon Burger',
//     description: 'Beef patty, smoky BBQ sauce, crispy bacon, sharp cheddar, crunchy onion rings.',
//     price: 55,
//     category: 'burgers',
//     image: burger4,
//     tag: 'NEW',
//   },

//   // Chicken
//   {
//     id: 5,
//     title: 'Crispy Chicken Strips',
//     description: 'Golden-fried chicken tenders with a crunchy coating, served with honey mustard sauce.',
//     price: 38,
//     category: 'chicken',
//     image: chicken1,
//     tag: 'POPULAR',
//   },
//   {
//     id: 6,
//     title: 'Nashville Hot Tenders',
//     description: 'Fiery spiced chicken strips glazed with Nashville hot sauce, with cool ranch dip.',
//     price: 44,
//     category: 'chicken',
//     image: chicken2,
//     tag: 'HOT',
//   },
//   {
//     id: 7,
//     title: 'Chicken Wings (6 pcs)',
//     description: 'Crispy wings with your choice of sauce: BBQ, Buffalo, or Garlic Parmesan.',
//     price: 48,
//     category: 'chicken',
//     image: chicken3,
//   },

//   // Wraps
//   {
//     id: 8,
//     title: 'Crispy Chicken Wrap',
//     description: 'Fried chicken, romaine lettuce, fresh tomato, pickles, and sriracha mayo in a warm tortilla.',
//     price: 42,
//     category: 'wraps',
//     image: wrap1,
//     tag: 'POPULAR',
//   },
//   {
//     id: 9,
//     title: 'Grilled Veggie Wrap',
//     description: 'Grilled peppers, zucchini, hummus, feta cheese, and herb dressing in a whole wheat wrap.',
//     price: 36,
//     category: 'wraps',
//     image: wrap2,
//   },
//   {
//     id: 10,
//     title: 'Smash Burger Wrap',
//     description: 'Smashed beef, melted cheese, jalapeños, pickles, and secret sauce wrapped tight.',
//     price: 45,
//     category: 'wraps',
//     image: wrap3,
//     tag: 'NEW',
//   },

//   // Sides
//   {
//     id: 11,
//     title: 'Loaded Fries',
//     description: 'Crispy fries topped with cheddar sauce, jalapeños, sour cream, and bacon bits.',
//     price: 28,
//     category: 'sides',
//     image: sides1,
//     tag: 'POPULAR',
//   },
//   {
//     id: 12,
//     title: 'Sweet Potato Fries',
//     description: 'Crispy sweet potato fries seasoned with smoked paprika, served with chipotle dip.',
//     price: 24,
//     category: 'sides',
//     image: sides2,
//   },
//   {
//     id: 13,
//     title: 'Onion Rings (8 pcs)',
//     description: 'Beer-battered golden onion rings, served with a creamy ranch dipping sauce.',
//     price: 22,
//     category: 'sides',
//     image: sides3,
//   },
//   {
//     id: 14,
//     title: 'Creamy Coleslaw',
//     description: 'House-made creamy coleslaw with a light tangy dressing. The perfect side.',
//     price: 15,
//     category: 'sides',
//     image: sides4,
//   },

//   // Drinks
//   {
//     id: 15,
//     title: 'Fresh Lemonade',
//     description: 'House-squeezed lemonade with fresh mint, a touch of honey, served over crushed ice.',
//     price: 18,
//     category: 'drinks',
//     image: drink1,
//     tag: 'POPULAR',
//   },
//   {
//     id: 16,
//     title: 'Iced Tea',
//     description: 'Chilled black tea, lightly sweetened, with a fresh lemon slice and ice.',
//     price: 16,
//     category: 'drinks',
//     image: drink2,
//   },
//   {
//     id: 17,
//     title: 'Strawberry Milkshake',
//     description: 'Thick and creamy shake blended with fresh strawberries and premium vanilla ice cream.',
//     price: 28,
//     category: 'drinks',
//     image: drink3,
//     tag: 'POPULAR',
//   },
//   {
//     id: 18,
//     title: 'Soft Drink',
//     description: 'Your choice of Pepsi, 7UP, or Mirinda. Served cold.',
//     price: 12,
//     category: 'drinks',
//     image: drink4
//   },
// ];
const ProductsData = [
  // Burgers
  {
    id: 1,
    title: 'Classic Smash Burger',
    description: 'Two smashed beef patties, American cheese, pickles, special house sauce on a toasted brioche bun.',
    price: 45,
    category: 'burgers',
    image: img('photo-1706901358629-bca346006c1a'),
    tag: 'POPULAR',
  },
  {
    id: 2,
    title: 'Spicy Chicken Burger',
    description: 'Crispy fried chicken fillet, jalapeño mayo, pickled slaw, fresh tomato on a brioche bun.',
    price: 49,
    category: 'burgers',
    image: img('photo-1637710847214-f91d99669e18'),
    tag: 'HOT',
  },
  {
    id: 3,
    title: 'Double Smash Burger',
    description: 'Double beef patties, double American cheese, caramelized onions, house special sauce.',
    price: 62,
    category: 'burgers',
    image: img('photo-1678110707289-ab14382a1625'),
  },
  {
    id: 4,
    title: 'BBQ Bacon Burger',
    description: 'Beef patty, smoky BBQ sauce, crispy bacon, sharp cheddar, crunchy onion rings.',
    price: 55,
    category: 'burgers',
    image: img('photo-1655895176036-bf1a11326e5c'),
    tag: 'NEW',
  },

  // Chicken
  {
    id: 5,
    title: 'Crispy Chicken Strips',
    description: 'Golden-fried chicken tenders with a crunchy coating, served with honey mustard sauce.',
    price: 38,
    category: 'chicken',
    image: img('photo-1606755962773-d324e0a13086'),
    tag: 'POPULAR',
  },
  {
    id: 6,
    title: 'Nashville Hot Tenders',
    description: 'Fiery spiced chicken strips glazed with Nashville hot sauce, with cool ranch dip.',
    price: 44,
    category: 'chicken',
    image: img('photo-1771818708882-bd87d9c46297'),
    tag: 'HOT',
  },
  {
    id: 7,
    title: 'Chicken Wings (6 pcs)',
    description: 'Crispy wings with your choice of sauce: BBQ, Buffalo, or Garlic Parmesan.',
    price: 48,
    category: 'chicken',
    image: img('photo-1551782450-a2132b4ba21d'),
  },

  // Wraps
  {
    id: 8,
    title: 'Crispy Chicken Wrap',
    description: 'Fried chicken, romaine lettuce, fresh tomato, pickles, and sriracha mayo in a warm tortilla.',
    price: 42,
    category: 'wraps',
    image: img('photo-1728155734335-f262972ed44f'),
    tag: 'POPULAR',
  },
  {
    id: 9,
    title: 'Grilled Veggie Wrap',
    description: 'Grilled peppers, zucchini, hummus, feta cheese, and herb dressing in a whole wheat wrap.',
    price: 36,
    category: 'wraps',
    image: img('photo-1584268184243-1d27f6fec5a8'),
  },
  {
    id: 10,
    title: 'Smash Burger Wrap',
    description: 'Smashed beef, melted cheese, jalapeños, pickles, and secret sauce wrapped tight.',
    price: 45,
    category: 'wraps',
    image: img('photo-1713330801172-03f8d1c0dde7'),
    tag: 'NEW',
  },

  // Sides
  {
    id: 11,
    title: 'Loaded Fries',
    description: 'Crispy fries topped with cheddar sauce, jalapeños, sour cream, and bacon bits.',
    price: 28,
    category: 'sides',
    image: img('photo-1639744210631-209fce3e256c'),
    tag: 'POPULAR',
  },
  {
    id:12,
    title: 'Sweet Potato Fries',
    description: 'Crispy sweet potato fries seasoned with smoked paprika, served with chipotle dip.',
    price: 24,
    category: 'sides',
    image: img('photo-1763208385612-fbbf89e4a5ed'),
  },
  {
    id: 13,
    title: 'Onion Rings (8 pcs)',
    description: 'Beer-battered golden onion rings, served with a creamy ranch dipping sauce.',
    price: 22,
    category: 'sides',
    image: img('photo-1689151128603-4828c1c2838f'),
  },
  {
    id:14,
    title: 'Creamy Coleslaw',
    description: 'House-made creamy coleslaw with a light tangy dressing. The perfect side.',
    price: 15,
    category: 'sides',
    image: img('photo-1551782450-17144efb9c50'),
  },

  // Drinks
  {
    id: 15,
    title: 'Fresh Lemonade',
    description: 'House-squeezed lemonade with fresh mint, a touch of honey, served over crushed ice.',
    price: 18,
    category: 'drinks',
    image: img('photo-1782453777601-82031a688b59'),
    tag: 'POPULAR',
  },
  {
    id: 16,
    title: 'Iced Tea',
    description: 'Chilled black tea, lightly sweetened, with a fresh lemon slice and ice.',
    price: 16,
    category: 'drinks',
    image: img('photo-1776320298721-07534863091b'),
  },
  {
    id: 17,
    title: 'Strawberry Milkshake',
    description: 'Thick and creamy shake blended with fresh strawberries and premium vanilla ice cream.',
    price: 28,
    category: 'drinks',
    image: img('photo-1677523874406-f29605c08a34'),
    tag: 'POPULAR',
  },
  {
    id: 18,
    title: 'Soft Drink',
    description: 'Your choice of Pepsi, 7UP, or Mirinda. Served cold.',
    price: 12,
    category: 'drinks',
    image: img('photo-1782453777601-82031a688b59', 800, 600),
  },
]
export default ProductsData;