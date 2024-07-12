export interface MenuItem {
  categoryLabel:
    | "Entradas"
    | "Dominican food"
    | "Platos de la casa"
    | "Postre"
    | "Acompañantes o extras"
    | "Acompañantes o extras";
  name: string;
  price: number;
  description: string;
}

const EntradaMenus: MenuItem[] = [
  {
    categoryLabel: "Entradas",
    name: "MOFONGUITOS DE BISTEC",
    price: 20.0,
    description:
      "Tostones Filled With Steak, Onions & Peppers Topped with Mayo Ketchup. Three in an order",
  },
  {
    categoryLabel: "Entradas",
    name: "CHICHARRON DE POLLO SIN HUESO",
    price: 18.0,
    description: "Fried Boneless Chicken Chunks",
  },
  {
    categoryLabel: "Entradas",
    name: "JASON'S FISHING BOAT",
    price: 21.0,
    description:
      "Fried Shrimp, Calamari, Plantain Chips, Marinara. This dish contains shellfish. Please enjoy responsibly.",
  },
  {
    name: "CRISPY CALAMARI",
    price: 17.0,
    description: "Served with Marinara Sauce",
    categoryLabel: "Entradas",
  },
  {
    name: "CAMARONES FRITO",
    price: 16.0,
    description: "Fried Shrimp Served with Tartar Sauce",
    categoryLabel: "Entradas",
  },
  {
    name: "CHICHARRON DE POLLO CON HUESO",
    price: 16.0,
    description: "Bone In Fried Chicken",
    categoryLabel: "Entradas",
  },
  {
    name: "TRIO DE EMPANADAS",
    price: 15.0,
    description: "Cheese, Chicken, Beef Empanadas",
    categoryLabel: "Entradas",
  },
  {
    name: "PALITOS DE QUESO",
    price: 12.0,
    description: "Mozzarella Sticks",
    categoryLabel: "Entradas",
  },
  {
    name: "JALAPENO CHEESE POPPERS",
    price: 13.0,
    description: "Esto pica mucho",
    categoryLabel: "Entradas",
  },
  {
    name: "SANCOCHO",
    price: 14.0,
    description:
      "Beef, Chicken and Pork Soup. Add a small side of Rice or Avocado on the side for $3 each.",
    categoryLabel: "Entradas",
  },
  {
    name: "SOPA DE POLLO",
    price: 12.0,
    description:
      "Homemade Chicken Soup. Add a small side of Rice or Avocado on the side for $3 each.",
    categoryLabel: "Entradas",
  },
];
const dominicanFood: MenuItem[] = [
  {
    name: "CHURRASCO Y HUEVOS",
    price: 27.99,
    description:
      "Churrasco with two fried or scrambled eggs. served with tostones and a small salad. Available daily until 4pm. Does not come with rice and beans",
    categoryLabel: "Dominican food",
  },
  {
    name: "SANTIAGO'S BRUNCH SAMPLER",
    price: 19.99,
    description:
      "Two fried or scrambled eggs, your choice of Bacon or Salami served with tostones and a small salad. Available Daily until 4pm. Does not come with rice and beans.",
    categoryLabel: "Dominican food",
  },
  {
    name: "CHICHARRON DE POLLO SIN HUESO",
    price: 22.0,
    description: "Fried Boneless Chicken Chunks",
    categoryLabel: "Dominican food",
  },
  {
    name: "CHURRASCO",
    price: 36.0,
    description:
      "Skirt Steak, Sliced and served on top of Grilled Peppers and Onions, Chimichurri Sauce",
    categoryLabel: "Dominican food",
  },
  {
    name: "MAR Y TIERRA",
    price: 42.0,
    description:
      "Skirt Steak & Shrimp . Chimichurrri Sauce. This dish contains shellfish. Please enjoy responsibly.",
    categoryLabel: "Dominican food",
  },
  {
    name: "BISTEC ENCEBOLLADO",
    price: 28.0,
    description: "Steak and Onions",
    categoryLabel: "Dominican food",
  },
  {
    name: "BERENJENA (V)",
    price: 16.0,
    description: "Stewed Eggplant",
    categoryLabel: "Dominican food",
  },
  {
    name: "SALMON",
    price: 26.0,
    description:
      "Served with Tostones and House Veggies. The sauce on this dish contains shellfish. Please enjoy responsibly. Does not come with rice and beans.",
    categoryLabel: "Dominican food",
  },
  {
    name: "RABO",
    price: 29.0,
    description: "Stewed Oxtail",
    categoryLabel: "Dominican food",
  },
  {
    name: "POLLO GUISADO",
    price: 19.0,
    description: "Stewed Chicken",
    categoryLabel: "Dominican food",
  },
  {
    name: "RES GUISADA",
    price: 19.0,
    description: "Stewed Beef",
    categoryLabel: "Dominican food",
  },
  {
    name: "POLLO AL HORNO",
    price: 16.0,
    description: "Dark Meat Roasted Chicken",
    categoryLabel: "Dominican food",
  },
  {
    name: "CAMARONES FRITO",
    price: 25.0,
    description: "Fried Shrimp",
    categoryLabel: "Dominican food",
  },
  {
    name: "CAMARONES AL AJILLO",
    price: 25.0,
    description: "Garlic Shrimp",
    categoryLabel: "Dominican food",
  },
  {
    name: "PERNIL",
    price: 19.0,
    description: "Slow Roasted Pork",
    categoryLabel: "Dominican food",
  },
  {
    name: "POLLO A LA PLANCHA",
    price: 26.0,
    description: "Grilled Chicken With Onions and Peppers",
    categoryLabel: "Dominican food",
  },
  {
    name: "CHULETA FRITA",
    price: 24.0,
    description: "Fried Double Pork Chop With Onions",
    categoryLabel: "Dominican food",
  },
  {
    name: "CHICHARRON DE POLLO CON HUESO",
    price: 21.0,
    description: "Bone In Fried Chicken",
    categoryLabel: "Dominican food",
  },
  {
    name: "SIN CARNE (V)",
    price: 17.0,
    description: "Rice, Beans & Maduros",
    categoryLabel: "Dominican food",
  },
  {
    name: "BACALAO",
    price: 19.0,
    description: "Stewed Codfish",
    categoryLabel: "Dominican food",
  },
];
const platosDeLaCasa: MenuItem[] = [
  {
    name: "MAR Y TIERRA",
    price: 42.0,
    description:
      "Skirt Steak and Shrimp, Chimichurri Sauce. This dish contains shellfish. Please enjoy responsibly.",
    categoryLabel: "Platos de la casa",
  },
  {
    name: "MATTHEW'S WAY",
    price: 37.0,
    description: "Oxtail with Fried Chicken Chunks",
    categoryLabel: "Platos de la casa",
  },
  {
    name: "DON AMANCIO",
    price: 34.0,
    description:
      "House Marinated Grilled Chicken and Shrimp. This dish contains shellfish. Please enjoy responsibly.",
    categoryLabel: "Platos de la casa",
  },
  {
    name: "DOÑA VERONICA",
    price: 32.0,
    description:
      "Pork Chops and Onions with Grilled Shrimp. This dish contains shellfish. Please enjoy responsibly.",
    categoryLabel: "Platos de la casa",
  },
  {
    name: "HAY HAMBRE",
    price: 38.0,
    description:
      "Sliced Skirt Steak, Chimichurri Sauce, Served With Mashed Potatoes and Spaghetti. Does not come with rice and beans.",
    categoryLabel: "Platos de la casa",
  },
  {
    name: "ROCKAWAY JETSKI",
    price: 34.0,
    description:
      "Salmon and Grilled Shrimp Served with Tostones and House Veggies. This dish contains shellfish. Please enjoy responsibly. Does not come with rice and beans.",
    categoryLabel: "Platos de la casa",
  },
  {
    name: "EL BARRIO",
    price: 33.0,
    description: "Pork Chop with onions and Grilled Chicken",
    categoryLabel: "Platos de la casa",
  },
];
const postre: MenuItem[] = [
  {
    name: "TRES LECHES",
    price: 11.0,
    description: "Three Milk Cake",
    categoryLabel: "Postre",
  },
  {
    name: "CARAMEL TRES LECHES",
    price: 12.0,
    description: "Three Milk Cake",
    categoryLabel: "Postre",
  },
  {
    name: "FLAN",
    price: 11.0,
    description: "Caramel Custard",
    categoryLabel: "Postre",
  },
  {
    name: "CHEESECAKE",
    price: 12.0,
    description: "",
    categoryLabel: "Postre",
  },
  {
    name: "CHEESECAKE CON FRESA",
    price: 12.0,
    description: "Strawberry Cheesecake",
    categoryLabel: "Postre",
  },
  {
    name: "WARM BROWNIE SOMETIMES BLONDIES",
    price: 12.0,
    description:
      "Whipped Cream, Caramel Sauce and served with ice cream. This dish contains nuts. Please enjoy responsibly.",
    categoryLabel: "Postre",
  },
  {
    name: "VANILLA ICE CREAM",
    price: 4.0,
    description: "1 Scoop",
    categoryLabel: "Postre",
  },
  {
    name: "OREO MOUSSE CAKE",
    price: 11.0,
    description: "",
    categoryLabel: "Postre",
  },
];
const acompanantesOExtras: MenuItem[] = [
  {
    name: "MADUROS",
    price: 9.0,
    description: "Fried Sweet Plantains",
    categoryLabel: "Acompañantes o extras",
  },
  {
    name: "AGUACATE ENTERO",
    price: 9.0,
    description: "Whole Sliced Avocado",
    categoryLabel: "Acompañantes o extras",
  },
  {
    name: "TOSTONES",
    price: 9.0,
    description: "Fried Green Plaintains",
    categoryLabel: "Acompañantes o extras",
  },
  {
    name: "ARROZ BLANCO",
    price: 9.0,
    description: "White Rice",
    categoryLabel: "Acompañantes o extras",
  },
  {
    name: "ARROZ AMARILLO",
    price: 9.0,
    description: "Yellow Vegetable Rice",
    categoryLabel: "Acompañantes o extras",
  },
  {
    name: "MORO CON COCO",
    price: 9.0,
    description: "Coconut Rice",
    categoryLabel: "Acompañantes o extras",
  },
  {
    name: "ENSALADA MIXTA",
    price: 9.0,
    description: "House Salad",
    categoryLabel: "Acompañantes o extras",
  },
  {
    name: "VEGETALES",
    price: 9.0,
    description: "Steamed Vegetables",
    categoryLabel: "Acompañantes o extras",
  },
  {
    name: "YUCA FRITA",
    price: 9.0,
    description: "Yuca Fries",
    categoryLabel: "Acompañantes o extras",
  },
  {
    name: "HABICHUELAS NEGRA",
    price: 7.0,
    description: "Black Beans",
    categoryLabel: "Acompañantes o extras",
  },
  {
    name: "HABICHUELAS ROJA",
    price: 7.0,
    description: "Red Beans",
    categoryLabel: "Acompañantes o extras",
  },
  {
    name: "PAPAS FRITAS",
    price: 9.0,
    description: "French Fries",
    categoryLabel: "Acompañantes o extras",
  },
  {
    name: "ENSALADA DE CAESAR",
    price: 12.0,
    description: "Caesar Salad. Add Shrimp for $8.00 Add Chicken for $6.00",
    categoryLabel: "Acompañantes o extras",
  },
  {
    name: "MANGU",
    price: 9.0,
    description: "Dominican Mashed Green Plantains",
    categoryLabel: "Acompañantes o extras",
  },
  {
    name: "ESPAGUETIS",
    price: 9.0,
    description: "Dominican Style Spaghetti",
    categoryLabel: "Acompañantes o extras",
  },
  {
    name: "PURE DE PAPA",
    price: 9.0,
    description: "Mashed Potatoes",
    categoryLabel: "Acompañantes o extras",
  },
  {
    name: "QUESO FRITO",
    price: 3.0,
    description: "One thick slice of fried Dominican Cheese",
    categoryLabel: "Acompañantes o extras",
  },
  {
    name: "TOCINO",
    price: 5.0,
    description: "Four Strips of Bacon",
    categoryLabel: "Acompañantes o extras",
  },
  {
    name: "DOS HUEVOS",
    price: 5.0,
    description: "2 Eggs, Fried or Scrambled. Available until 4pm",
    categoryLabel: "Acompañantes o extras",
  },
];

export const AllMenus: MenuItem[] = [
  ...EntradaMenus,
  ...dominicanFood,
  ...platosDeLaCasa,
  ...postre,
  ...acompanantesOExtras,
];
