import getImage from "./getImage";

const products = [
  {
    id: 1,
    name: "Premium Almonds",
    image: getImage("almonds"),
    price: 299,
    oldPrice: 349,
    category: "Nuts",
    rating: 4.8,
    weight: "250 g",
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Crunchy Cashews",
    image: getImage("cashews"),
    price: 349,
    oldPrice: 399,
    category: "Nuts",
    rating: 4.9,
    weight: "250 g",
    badge: "Popular"
  },
  {
    id: 3,
    name: "Golden Raisins",
    image: getImage("raisins"),
    price: 179,
    oldPrice: 219,
    category: "Dried Fruits",
    rating: 4.6,
    weight: "250 g",
    badge: ""
  },
  {
    id: 4,
    name: "Dried Mango",
    image: getImage("dried-mango"),
    price: 249,
    oldPrice: 299,
    category: "Dried Fruits",
    rating: 4.7,
    weight: "200 g",
    badge: "New"
  },
  {
    id: 5,
    name: "California Walnuts",
    image: getImage("walnuts"),
    price: 329,
    oldPrice: 379,
    category: "Nuts",
    rating: 4.7,
    weight: "250 g",
    badge: ""
  },
  {
    id: 6,
    name: "Royal Dates",
    image: getImage("dates"),
    price: 199,
    oldPrice: 249,
    category: "Dried Fruits",
    rating: 4.8,
    weight: "250 g",
    badge: "Popular"
  },
  {
    id: 7,
    name: "Green Pistachios",
    image: getImage("pistachios"),
    price: 399,
    oldPrice: 449,
    category: "Nuts",
    rating: 4.8,
    weight: "200 g",
    badge: ""
  },
  {
    id: 8,
    name: "Dried Blueberries",
    image: getImage("blueberries"),
    price: 299,
    oldPrice: 349,
    category: "Dried Fruits",
    rating: 4.5,
    weight: "200 g",
    badge: "New"
  },
  {
    id: 9,
    name: "Dried Apricots",
    image: getImage("apricots"),
    price: 269,
    oldPrice: 319,
    category: "Dried Fruits",
    rating: 4.7,
    weight: "250 g",
    badge: ""
  },
  {
    id: 10,
    name: "Coconut Chips",
    image: getImage("coconut-chips"),
    price: 159,
    oldPrice: 199,
    category: "Healthy Snacks",
    rating: 4.5,
    weight: "150 g",
    badge: ""
  },
  {
    id: 11,
    name: "Mixed Dry Fruits",
    image: getImage("mixed-dryfruits"),
    price: 449,
    oldPrice: 499,
    category: "Combos",
    rating: 4.9,
    weight: "400 g",
    badge: "Best Value"
  }
];

export default products;