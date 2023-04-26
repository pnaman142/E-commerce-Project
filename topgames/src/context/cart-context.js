import React, { useState } from "react";

const CartContext = React.createContext();

const CartProvider = (props) => {
  const [cartData, setCartData] = useState([]);
  const addCartData = (data) => {
    setCartData([...cartData, data]);
  };
  const removeCartData = (data) => {
    setCartData((prev) => {
      return prev.splice(
        prev.findIndex((a) => a.id === data.id),
        1
      );
    });
  };

  return (
    <CartContext.Provider value={{ cartData, addCartData, removeCartData }}>
      {props.children}
    </CartContext.Provider>
  );
};
export { CartContext, CartProvider };
