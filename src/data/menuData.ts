export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
  image?: string; // 👈 ADD THIS (optional so nothing breaks)
}


export interface MenuItem {
  name: string;
  price500gm?: string;
  price1kg?: string;
  pricePerPiece?: string;
  pricePerTub?: string;
  description: string;
  ingredients?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'regular-cakes',
    name: 'Regular Cakes',
    description: '100% eggless cakes in classic flavors - Available in 500gm & 1kg',
    items: [
      {
        name: 'Black Forest',
        price500gm: '₹350',
        price1kg: '₹650',
        description: 'Classic chocolate sponge layered with whipped cream and cherry',
        ingredients: 'Chocolate sponge, whipped cream, cherries, chocolate shavings',
      },
      {
        name: 'Cookie & Cream',
        price500gm: '₹400',
        price1kg: '₹750',
        description: 'Vanilla cake with crushed Oreo cookies and cream',
        ingredients: 'Vanilla sponge, Oreo cookies, fresh cream',
      },
      {
        name: 'Blueberry',
        price500gm: '₹400',
        price1kg: '₹750',
        description: 'Light vanilla cake with fresh blueberry compote',
        ingredients: 'Vanilla sponge, blueberry compote, whipped cream',
      },
      {
        name: 'Mango',
        price500gm: '₹400',
        price1kg: '₹750',
        description: 'Tropical mango flavored cake with mango pulp',
        ingredients: 'Vanilla sponge, mango pulp, whipped cream',
      },
      {
        name: 'Strawberry',
        price500gm: '₹400',
        price1kg: '₹750',
        description: 'Fresh strawberry cake with strawberry crush',
        ingredients: 'Vanilla sponge, strawberry crush, fresh cream',
      },
      {
        name: 'KitKat Crunch',
        price500gm: '₹450',
        price1kg: '₹850',
        description: 'Chocolate cake loaded with KitKat pieces',
        ingredients: 'Chocolate sponge, KitKat bars, chocolate cream',
      },
      {
        name: 'Butterscotch',
        price500gm: '₹400',
        price1kg: '₹750',
        description: 'Rich butterscotch flavor with crunchy praline',
        ingredients: 'Vanilla sponge, butterscotch sauce, praline crunch',
      },
      {
        name: 'Choco-Chips',
        price500gm: '₹400',
        price1kg: '₹750',
        description: 'Vanilla cake studded with chocolate chips',
        ingredients: 'Vanilla sponge, chocolate chips, fresh cream',
      },
      {
        name: 'Truffle',
        price500gm: '₹450',
        price1kg: '₹850',
        description: 'Rich chocolate truffle cake with ganache',
        ingredients: 'Chocolate sponge, chocolate truffle, ganache',
      },
      {
        name: 'Kulfi Faluda',
        price500gm: '₹450',
        price1kg: '₹850',
        description: 'Unique Indian kulfi flavor with faluda vermicelli',
        ingredients: 'Vanilla sponge, kulfi essence, faluda, nuts',
      },
      {
        name: 'Ras Malai',
        price500gm: '₹450',
        price1kg: '₹850',
        description: 'Traditional ras malai flavored cake',
        ingredients: 'Milk sponge, ras malai essence, saffron, nuts',
      },
      {
        name: 'Pistachio',
        price500gm: '₹450',
        price1kg: '₹850',
        description: 'Premium pistachio flavored cake',
        ingredients: 'Vanilla sponge, pistachio paste, crushed pistachios',
      },
      {
        name: 'Cassata',
        price500gm: '₹450',
        price1kg: '₹850',
        description: 'Colorful tri-flavor Italian ice cream cake',
        ingredients: 'Three layered sponge, mixed fruits, nuts',
      },
      {
        name: 'Oreo',
        price500gm: '₹400',
        price1kg: '₹750',
        description: 'Chocolate cake with crushed Oreo cookies',
        ingredients: 'Chocolate sponge, Oreo cookies, cream cheese',
      },
      {
        name: 'White Forest',
        price500gm: '₹400',
        price1kg: '₹750',
        description: 'Vanilla version of classic Black Forest',
        ingredients: 'Vanilla sponge, whipped cream, cherries, white chocolate',
      },
    ],
  },
  {
    id: 'royal-cakes',
    name: 'Royal Flavour Cakes',
    description: 'Premium luxury cakes with exotic flavors',
    items: [
      {
        name: 'Nutella / Hazelnut',
        price500gm: '₹500',
        price1kg: '₹950',
        description: 'Rich Nutella chocolate hazelnut cake',
        ingredients: 'Chocolate sponge, Nutella spread, roasted hazelnuts',
      },
      {
        name: 'Biscoff',
        price500gm: '₹500',
        price1kg: '₹950',
        description: 'Caramelized Lotus Biscoff cookie cake',
        ingredients: 'Vanilla sponge, Biscoff spread, Biscoff cookies',
      },
      {
        name: 'Mix Fruit',
        price500gm: '₹500',
        price1kg: '₹950',
        description: 'Loaded with seasonal fresh fruits',
        ingredients: 'Vanilla sponge, mixed seasonal fruits, fresh cream',
      },
    ],
  },
  {
    id: 'jar-cakes',
    name: 'Jar / Tub Cakes',
    description: 'Convenient single-serve cake jars',
    items: [
      {
        name: 'Mango Jar Cake',
        pricePerTub: '₹80',
        description: 'Layered mango cake in a convenient jar',
        ingredients: 'Mango cake layers, mango mousse, whipped cream',
      },
      {
        name: 'Chocolate Jar Cake',
        pricePerTub: '₹80',
        description: 'Rich chocolate cake in a jar',
        ingredients: 'Chocolate cake layers, chocolate mousse',
      },
      {
        name: 'Pineapple Jar Cake',
        pricePerTub: '₹80',
        description: 'Tropical pineapple jar cake',
        ingredients: 'Pineapple cake layers, pineapple compote',
      },
      {
        name: 'Blueberry Jar Cake',
        pricePerTub: '₹80',
        description: 'Blueberry flavored jar cake',
        ingredients: 'Vanilla cake, blueberry compote, cream',
      },
      {
        name: 'Strawberry Jar Cake',
        pricePerTub: '₹80',
        description: 'Fresh strawberry jar cake',
        ingredients: 'Strawberry cake layers, strawberry mousse',
      },
      {
        name: 'Rasmalai Jar Cake',
        pricePerTub: '₹100',
        description: 'Premium ras malai flavored jar cake',
        ingredients: 'Milk cake, ras malai essence, saffron',
      },
      {
        name: 'Nutella Jar Cake',
        pricePerTub: '₹100',
        description: 'Premium Nutella jar cake',
        ingredients: 'Chocolate cake, Nutella mousse, hazelnuts',
      },
      {
        name: 'Ferrero Rocher Jar Cake',
        pricePerTub: '₹120',
        description: 'Luxury Ferrero Rocher jar cake',
        ingredients: 'Hazelnut cake, Ferrero Rocher pieces, chocolate',
      },
      {
        name: 'Biscoff Jar Cake',
        pricePerTub: '₹100',
        description: 'Premium Biscoff jar cake',
        ingredients: 'Vanilla cake, Biscoff spread, Biscoff cookies',
      },
    ],
  },
  {
    id: 'chocolate-bars',
    name: 'Chocolate Bars',
    description: 'Handcrafted chocolate bars with unique flavors',
    items: [
      {
        name: 'Rasmalai Chocolate Bar',
        pricePerPiece: '₹80',
        description: 'White chocolate bar infused with ras malai flavor',
        ingredients: 'White chocolate, ras malai essence, saffron, nuts',
      },
      {
        name: 'Chocolate Nuts Bar',
        pricePerPiece: '₹80',
        description: 'Rich chocolate loaded with mixed nuts',
        ingredients: 'Dark chocolate, almonds, cashews, pistachios',
      },
      {
        name: 'Rose Thandai Bar',
        pricePerPiece: '₹80',
        description: 'Festive thandai flavored chocolate bar',
        ingredients: 'White chocolate, rose essence, thandai spices',
      },
      {
        name: 'Pistachio Bar',
        pricePerPiece: '₹80',
        description: 'Premium pistachio chocolate bar',
        ingredients: 'Milk chocolate, pistachio paste, crushed pistachios',
      },
    ],
  },
  {
    id: 'cupcakes',
    name: 'Cupcakes',
    description: 'Freshly baked cupcakes (Minimum order: 4 pieces)',
    items: [
      {
        name: 'Chocolate Cupcakes',
        pricePerPiece: '₹50',
        description: 'Classic chocolate cupcakes with frosting',
        ingredients: 'Chocolate sponge, chocolate frosting',
      },
      {
        name: 'Strawberry Cupcakes',
        pricePerPiece: '₹50',
        description: 'Strawberry flavored cupcakes',
        ingredients: 'Vanilla sponge, strawberry frosting',
      },
      {
        name: 'Blueberry Cupcakes',
        pricePerPiece: '₹50',
        description: 'Blueberry flavored cupcakes',
        ingredients: 'Vanilla sponge, blueberry frosting',
      },
      {
        name: 'Pineapple Cupcakes',
        pricePerPiece: '₹50',
        description: 'Tropical pineapple cupcakes',
        ingredients: 'Vanilla sponge, pineapple frosting',
      },
      {
        name: 'Biscoff Cupcakes',
        pricePerPiece: '₹70',
        description: 'Premium Biscoff flavored cupcakes',
        ingredients: 'Vanilla sponge, Biscoff frosting, Biscoff cookie',
      },
      {
        name: 'Nutella Cupcakes',
        pricePerPiece: '₹70',
        description: 'Premium Nutella chocolate cupcakes',
        ingredients: 'Chocolate sponge, Nutella frosting, hazelnuts',
      },
    ],
  },
  {
  id: 'cookies',
  name: 'Cookies',
  description: 'Freshly baked crunchy cookies (Minimum order applies)',
  items: [
    {
      name: 'Choco Chip Cookies',
      pricePerPiece: '₹30',
      description: 'Classic cookies loaded with chocolate chips',
      ingredients: 'Flour, butter, sugar, chocolate chips',
    },
    {
      name: 'Butter Cookies',
      pricePerPiece: '₹25',
      description: 'Melt-in-mouth buttery cookies',
      ingredients: 'Flour, butter, sugar',
    },
    {
      name: 'Oatmeal Cookies',
      pricePerPiece: '₹35',
      description: 'Healthy oatmeal cookies with a soft crunch',
      ingredients: 'Oats, flour, butter, brown sugar',
    },
    {
      name: 'Double Chocolate Cookies',
      pricePerPiece: '₹40',
      description: 'Chocolate cookies with gooey chocolate chunks',
      ingredients: 'Cocoa, dark chocolate, butter',
    },
  ],
},

];
