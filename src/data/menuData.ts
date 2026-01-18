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
  // 🎂 REGULAR CAKES (WITH IMAGES)
  {
    id: "regular-cakes",
    name: "Regular Cakes",
    description: "100% eggless cakes in classic flavors - Available in 500gm & 1kg",
    items: [
      { name: "Black Forest", price500gm: "₹350", price1kg: "₹650", description: "Classic chocolate sponge layered with whipped cream and cherry", image: blackForestImg },
      { name: "Blueberry", price500gm: "₹400", price1kg: "₹750", description: "Vanilla cake with blueberry compote", image: blueberryImg },
      { name: "Butterscotch", price500gm: "₹400", price1kg: "₹750", description: "Butterscotch with crunchy praline", image: butterscotchImg },
      { name: "Cassata", price500gm: "₹450", price1kg: "₹850", description: "Tri-flavor layered cake", image: cassataImg },
      { name: "Cookie & Cream", price500gm: "₹400", price1kg: "₹750", description: "Vanilla cake with crushed cookies", image: cookieCreamImg },
      { name: "KitKat Crunch", price500gm: "₹450", price1kg: "₹850", description: "Chocolate cake with KitKat crunch", image: kitkatImg },
      { name: "Mango", price500gm: "₹400", price1kg: "₹750", description: "Fresh mango cake", image: mangoImg },
      { name: "Pineapple", price500gm: "₹400", price1kg: "₹750", description: "Classic pineapple cake", image: pineappleImg },
      { name: "Pistachio", price500gm: "₹450", price1kg: "₹850", description: "Premium pista cake", image: pistaImg },
      { name: "Red Velvet", price500gm: "₹450", price1kg: "₹850", description: "Classic red velvet cake", image: redVelvetImg },
      { name: "Strawberry", price500gm: "₹400", price1kg: "₹750", description: "Fresh strawberry cake", image: strawberryImg },
      { name: "Truffle", price500gm: "₹450", price1kg: "₹850", description: "Rich chocolate truffle", image: truffleImg },
      { name: "White Forest", price500gm: "₹400", price1kg: "₹750", description: "White chocolate forest cake", image: whiteForestImg },
    ],
  },

  // 👑 ROYAL CAKES
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

  // 🫙 JAR / TUB CAKES
  {
    id: "jar-cakes",
    name: "Jar / Tub Cakes",
    description: "Single-serve cake jars",
    items: [
      { name: "Mango Jar Cake", pricePerTub: "₹80", description: "Mango layered jar cake" },
      { name: "Chocolate Jar Cake", pricePerTub: "₹80", description: "Chocolate jar cake" },
      { name: "Blueberry Jar Cake", pricePerTub: "₹80", description: "Blueberry jar cake" },
      { name: "Strawberry Jar Cake", pricePerTub: "₹80", description: "Strawberry jar cake" },
    ],
  },

  // 🍫 CHOCOLATE BARS
  {
    id: "chocolate-bars",
    name: "Chocolate Bars",
    description: "Handcrafted chocolate bars",
    items: [
      { name: "Rasmalai Chocolate Bar", pricePerPiece: "₹80", description: "Rasmalai flavored chocolate" },
      { name: "Chocolate Nuts Bar", pricePerPiece: "₹80", description: "Chocolate with nuts" },
      { name: "Rose Thandai Bar", pricePerPiece: "₹80", description: "Thandai flavored chocolate" },
    ],
  },

  // 🧁 CUPCAKES
  {
    id: "cupcakes",
    name: "Cupcakes",
    description: "Freshly baked cupcakes (Min order: 4)",
    items: [
      { name: "Chocolate Cupcakes", pricePerPiece: "₹50", description: "Chocolate cupcakes" },
      { name: "Strawberry Cupcakes", pricePerPiece: "₹50", description: "Strawberry cupcakes" },
      { name: "Biscoff Cupcakes", pricePerPiece: "₹70", description: "Biscoff cupcakes" },
    ],
  },

  // 🍪 COOKIES
  {
    id: "cookies",
    name: "Cookies",
    description: "Freshly baked cookies",
    items: [
      { name: "Choco Chip Cookies", pricePerPiece: "₹30", description: "Chocolate chip cookies" },
      { name: "Butter Cookies", pricePerPiece: "₹25", description: "Buttery cookies" },
      { name: "Oatmeal Cookies", pricePerPiece: "₹35", description: "Oatmeal cookies" },
    ],
  },
];
