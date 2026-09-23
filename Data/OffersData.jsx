const img = (id, w = 800, h = 600) => {
  return `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;
}
const OffersData = [
    
        {
    id: 'burger_combo',
    name: 'Burger Combo',
    description: 'Classic Smash Burger + Loaded Fries + Fresh Lemonade',
    originalPrice: 91,
    offerPrice: 59,
    image: img('photo-1551782450-a2132b4ba21d', 900, 600),
    tag: 'SAVE 32 MAD',
    color: 'orange' ,
  },
  {
    id: 'family_box',
    name: 'Family Box',
    description: '4 Burgers + 4 Sides + 4 Drinks of your choice — feeds the whole crew.',
    originalPrice: 260,
    offerPrice: 199,
    image: img('photo-1678110707493-8d05425137ac', 900, 600),
    tag: 'SAVE 61 MAD',
    color: 'red' ,
  },
    
]

export default OffersData