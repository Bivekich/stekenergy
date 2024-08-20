import React, { createContext, useReducer, ReactNode } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface CartAction {
  type: "ADD_ITEM" | "REMOVE_ITEM";

  payload: Product | number;
}

const CartContext = createContext<{
  cart: Product[];

  dispatch: React.Dispatch<CartAction>;
}>({
  cart: [],

  dispatch: () => null,
});

const cartReducer = (state: Product[], action: CartAction): Product[] => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload as Product];

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== (action.payload as number));

    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
