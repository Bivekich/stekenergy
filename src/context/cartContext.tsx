import React, { createContext, useReducer, useContext, useEffect } from "react";
interface CartItem {
  id: number;
  mainImg: string;
  title: string;
  numberOfItems: number;
  link: string;
}
const CartContext = createContext<CartItem[]>([]);
const CartDispatchContext = createContext<React.Dispatch<Action> | undefined>(
  undefined
);

type Action =
  | { type: "add"; item: CartItem }
  | { type: "remove"; id: number }
  | { type: "clear" };

const cartReducer = (state: CartItem[], action: Action): CartItem[] => {
  switch (action.type) {
    case "add":
      const existingItem = state.find((item) => item.id === action.item.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.item.id ? { ...item } : item
        );
      }
      return [...state, action.item];
    case "remove":
      return state.filter((item) => item.id !== action.id);
    case "clear":
      return [];
    default:
      return state;
  }
};
interface CartProviderProps {
  children: React.ReactNode;
}
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export const useCartDispatch = () => {
  const context = useContext(CartDispatchContext);
  if (!context) {
    throw new Error("useCartDispatch must be used within a CartProvider");
  }
  return context;
};
