
import Happy from './../assets/HappyMunchkin.jpg';
import Lucky from './../assets/LuckyDays.jpg';
import Inner from './../assets/InnerPeace.jpg';
import Peace from './../assets/PeacefulPines.jpg';
import Timid from './../assets/TimidTrees.jpg';
import Devilish from './../assets/Twisted.jpg';
import Unity from './../assets/LastOfUs.jpg';
import Wishful from './../assets/Dreams.jpg';
export type ProductInfo = {
  id: string
  name: string
  stock: number
  healthIntel?: string
  manufacturer: string
  price: number
  category: "Regular" | "Decaf" | "Specialty"
  logo?: string;
}

export type CartItem = {
  product: ProductInfo
  pounds: number
}



export const products: ProductInfo[] = [
  {
    id: "lucky-day-coffee",
    name: "Lucky Days Coffee",
    stock: 999,
    healthIntel: "Should not be consumed while immunocompromised or pregnant",
    manufacturer: "Milton Brand Incorporated",
    price: 100,
    category: "Regular",
    logo: Lucky
  },
  {
    id: "happy-munchkin-coffee",
    name: "Happy Munchkin Coffee",
    stock: 999, 
    manufacturer: "Sour Skittles Drink Inc.",
    price: 399,
    category: "Regular",
    logo: Happy
  },
  {
    id: "inner-peace-coffee",
    name: "Inner Peace Coffee",
    stock: 999,
    manufacturer: "Milton Brand Incorporated",
    price: 599,
    category: "Regular",
    logo: Inner
  },
  {
    id: "timid-tree-coffee",
    name: "Timid Tree Diet Coffee",
    stock: 999,
    manufacturer: "LayFrito Inc",
    price: 1099,
    category: "Decaf",
    logo: Timid
  },
  {
    id: "peaceful-pines-coffee",
    name: "Peaceful Pines Elixirs",
    stock: 999,
    manufacturer: "Milton Brand Inc.",
    healthIntel: "Do not drink while on medication",
    price: 2999,
    category: "Decaf",
    logo: Peace
  },
  {
    id: "sleepy-meadow-drink",
    name: "Sleepy Meadow Mushroom Coffee",
    stock: 100,
    manufacturer: "Cordy Exceptional Inc",
    healthIntel: "Please do not seek out underground or cold, damp places 24 hours post consumption",
    price: 99,
    category: "Decaf",
    logo: Unity
  },
  {
    id: "iconoclastic-desires",
    name: "Ragnarok Hard Brew",
    stock: 50,
    healthIntel: "Must be 18+ to purchase and consume. Limit 1 per customer. Cannot be drunk if having pre-existing heart conditions",
    price: 19999,
    category: "Specialty",
    manufacturer: "Twisted Delights Inc.",
    logo: Devilish
  },
  {
    id: "wishful-dreams-coffee",
    name: "Dreamer's Prayers Coffee",
    stock: 1,
    healthIntel: "Sign a waiver before consumption. Ensure you are thinking of your deepest desires in your heart of hearts while drinking.",
    price: 1,
    category: "Specialty",
    manufacturer: "N/A",
    logo: Wishful
  }
]