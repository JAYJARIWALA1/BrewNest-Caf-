import { unsplash } from "./cafeInfo.js";

export const MENU = [
  {
    id: "coffee",
    label: "Coffee",
    items: [
      {
        id: "cappuccino",
        name: "Cappuccino",
        description: "Double espresso under a thick, velvety cap of steamed milk foam.",
        price: 149,
        image: unsplash("photo-1534778101976-62847782c213"),
      },
      {
        id: "latte",
        name: "Café Latte",
        description: "Smooth espresso with silky steamed milk, finished with latte art.",
        price: 169,
        image: unsplash("photo-1561882468-9110e03e0f78"),
      },
      {
        id: "espresso",
        name: "Espresso",
        description: "A short, bold shot pulled from freshly ground beans. Strong and clean.",
        price: 99,
        image: unsplash("photo-1510707577719-ae7c14805e3a"),
      },
      {
        id: "cold-coffee",
        name: "Cold Coffee",
        description: "Chilled blended coffee with milk and ice, served tall. A summer favourite.",
        price: 179,
        image: unsplash("photo-1517701604599-bb29b565090c"),
      },
    ],
  },
  {
    id: "snacks",
    label: "Snacks",
    items: [
      {
        id: "veg-sandwich",
        name: "Veg Sandwich",
        description: "Grilled sandwich with fresh veggies, mint chutney and melted cheese.",
        price: 129,
        image: unsplash("photo-1528735602780-2552fd46c7af"),
      },
      {
        id: "garlic-bread",
        name: "Cheese Garlic Bread",
        description: "Toasted garlic bread topped with bubbling mozzarella and herbs.",
        price: 149,
        image: unsplash("photo-1619535860434-ba1d8fa12536"),
      },
      {
        id: "fries",
        name: "French Fries",
        description: "Crispy golden fries with a sprinkle of peri-peri seasoning.",
        price: 119,
        image: unsplash("photo-1573080496219-bb080dd4f877"),
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      {
        id: "brownie",
        name: "Chocolate Brownie",
        description: "Warm, fudgy brownie with a crackly top. Pairs well with an espresso.",
        price: 139,
        image: unsplash("photo-1606313564200-e75d5e30476c"),
      },
      {
        id: "chocolate-cake",
        name: "Chocolate Cake",
        description: "Layers of moist chocolate sponge and rich dark ganache.",
        price: 159,
        image: unsplash("photo-1578985545062-69928b1d9587"),
      },
      {
        id: "cheesecake",
        name: "Cheesecake",
        description: "Creamy baked cheesecake on a buttery biscuit base with berry sauce.",
        price: 189,
        image: unsplash("photo-1533134242443-d4fd215305ad"),
      },
    ],
  },
];
