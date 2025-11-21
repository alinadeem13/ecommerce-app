import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext(null); // FIX 1: Add default value

const ShopContextProvider = ({ children }) => {
  // FIX 2: Destructure props
  const currency = "$";
  const delivery_fee = 10;

  const value = { products, currency, delivery_fee };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
