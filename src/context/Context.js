import React from "react";
import faker from "faker";
import { createContext, useContext, useReducer, useEffect } from "react";
import productsData from "../products.json"; // Import the JSON file
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);

// const Context = ({ children }) => {
//   const products = [...Array(20)].map(() => ({
//     id: faker.datatype.uuid(),
//     name: faker.commerce.productName(),
//     price: faker.commerce.price(),
//     image: faker.random.image(),
//     inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
//     fastDelivery: faker.datatype.boolean(),
//     ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
//   }));

// const [state, dispatch] = useReducer(cartReducer, {
//   products: products,
//   cart: [],
// });

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: productsData, // Used the imported product data from json file
    cart: [],
  });
  // console.log(productsData);
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  // console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
