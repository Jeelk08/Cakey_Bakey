// =====================
// REGULAR CAKES IMAGES
// =====================
import blackForestImg from "../assets/images/regular_cakes/black-forest.jpg";
import blueberryImg from "../assets/images/regular_cakes/blueberry.jpg";
import butterscotchImg from "../assets/images/regular_cakes/butterscotch.jpg";
import cassataImg from "../assets/images/regular_cakes/cassata.jpg";
import cookieCreamImg from "../assets/images/regular_cakes/cookiecream.jpg";
import kitkatImg from "../assets/images/regular_cakes/kitkat.jpg";
import mangoImg from "../assets/images/regular_cakes/mango.jpg";
import pineappleImg from "../assets/images/regular_cakes/pineapple.jpg";
import pistaImg from "../assets/images/regular_cakes/pista.jpg";
import redVelvetImg from "../assets/images/regular_cakes/red-velvet.jpg";
import strawberryImg from "../assets/images/regular_cakes/strawberry.jpg";
import truffleImg from "../assets/images/regular_cakes/truffle.jpg";
import whiteForestImg from "../assets/images/regular_cakes/white-forest.jpg";

// =====================
// TYPES
// =====================
export interface MenuItem {
  name: string;
  price500gm?: string;
  price1kg?: string;
  pricePerPiece?: string;
  pricePerTub?: string;
  description: string;
  ingredients?: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

// =====================
// DATA
// =====================
export const menuCategories: MenuCategory[] = [
  {
    id: "regular-cakes",
    name: "Regular Cakes",
    description: "100% eggless cakes in classic flavors - Available in 500gm & 1kg",
    items: [
      { name: "Black Forest", price500gm: "₹350", price1kg: "₹650", description: "Classic chocolate sponge layered with whipped cream and cherry", ingredients: "Chocolate sponge, whipped cream, cherries", image: blackForestImg },
      { name: "Blueberry", price500gm: "₹400", price1kg: "₹750", description: "Vanilla cake with blueberry compote", ingredients: "Vanilla sponge, blueberry compote", image: blueberryImg },
      { name: "Butterscotch", price500gm: "₹400", price1kg: "₹750", description: "Rich butterscotch with crunchy praline", ingredients: "Vanilla sponge, butterscotch sauce", image: butterscotchImg },
      { name: "Cassata", price500gm: "₹450", price1kg: "₹850", description: "Tri-flavor ice cream style cake", ingredients: "Layered sponge, fruits", image: cassataImg },
      { name: "Cookie & Cream", price500gm: "₹400", price1kg: "₹750", description: "Vanilla cake with crushed cookies", ingredients: "Vanilla sponge, Oreo cookies", image: cookieCreamImg },
      { name: "KitKat Crunch", price500gm: "₹450", price1kg: "₹850", description: "Chocolate cake with KitKat crunch", ingredients: "Chocolate sponge, KitKat", image: kitkatImg },
      { name: "Mango", price500gm: "₹400", price1kg: "₹750", description: "Fresh mango flavored cake", ingredients: "Vanilla sponge, mango pulp", image: mangoImg },
      { name: "Pineapple", price500gm: "₹400", price1kg: "₹750", description: "Classic pineapple cream cake", ingredients: "Vanilla sponge, pineapple", image: pineappleImg },
      { name: "Pistachio", price500gm: "₹450", price1kg: "₹850", description: "Premium pista cake", ingredients: "Pistachio paste, sponge", image: pistaImg },
      { name: "Red Velvet", price500gm: "₹450", price1kg: "₹850", description: "Classic red velvet cream cake", ingredients: "Red velvet sponge", image: redVelvetImg },
      { name: "Strawberry", price500gm: "₹400", price1kg: "₹750", description: "Fresh strawberry cream cake", ingredients: "Strawberry crush", image: strawberryImg },
      { name: "Truffle", price500gm: "₹450", price1kg: "₹850", description: "Rich chocolate truffle cake", ingredients: "Chocolate ganache", image: truffleImg },
      { name: "White Forest", price500gm: "₹400", price1kg: "₹750", description: "White chocolate version of black forest", ingredients: "White chocolate, cream", image: whiteForestImg },
    ],
  },

  // 🔽 ALL OTHER CATEGORIES UNTOUCHED
  {
    id: "royal-cakes",
    name: "Royal Flavour Cakes",
    description: "Premium luxury cakes with exotic flavors",
    items: [
      { name: "Nutella / Hazelnut", price500gm: "₹500", price1kg: "₹950", description: "Nutella chocolate cake" },
      { name: "Biscoff", price500gm: "₹500", price1kg: "₹950", description: "Lotus biscoff cake" },
      { name: "Mix Fruit", price500gm: "₹500", price1kg: "₹950", description: "Seasonal fruits cake" },
    ],
  },

  {
    id: "cookies",
    name: "Cookies",
    description: "Freshly baked crunchy cookies",
    items: [
      { name: "Choco Chip Cookies", pricePerPiece: "₹30", description: "Classic cookies" },
      { name: "Butter Cookies", pricePerPiece: "₹25", description: "Buttery cookies" },
      { name: "Oatmeal Cookies", pricePerPiece: "₹35", description: "Healthy oatmeal cookies" },
      { name: "Double Chocolate Cookies", pricePerPiece: "₹40", description: "Rich chocolate cookies" },
    ],
  },
];
