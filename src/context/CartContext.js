import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "../reducer/CartReducer";

import { faker } from "@faker-js/faker";
const CartContext = createContext();
faker.seed(99);
const CartProvider = ({ children }) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.datatype.boolean(),
    fastDelivery: faker.datatype.boolean(),
    ratings: getRandomInt(4),
  }));
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });
  return (
    <CartContext.Provider
      value={{ state, dispatch, productState, productDispatch }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { CartProvider, useCart };
