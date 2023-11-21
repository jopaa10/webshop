import { CartData } from "@/types/cart";
import { LSKeyType } from "@/utils/addToLS";
import {
  useContext,
  useReducer,
  createContext,
  useState,
  useEffect,
} from "react";
import { Actions } from "./actions";
import { reducer } from "./reducer";

interface InitialState {
  //isLoading: boolean;
  favorites: CartData[];
  addToFavorites(id: string): void;
  removeFromFavorites(id: string): void;
  cart: CartData[];
  addToShoppingCart(id: string): void;
  totalQuantity: number;
  startAnimation: boolean;
  removeItemFromCart(id: string): void;
}

interface Props {
  children: React.ReactNode;
}

const initialState: InitialState = {
  //isLoading: false,
  favorites: [],
  addToFavorites() {},
  removeFromFavorites() {},
  cart: [],
  addToShoppingCart() {},
  totalQuantity: 0,
  startAnimation: false,
  removeItemFromCart() {},
};

const WebshopContext = createContext<InitialState>(initialState);

export const WebShopProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newFavorites, setNewFavorites] = useState<CartData[]>([]);
  const [newCartData, setNewCartData] = useState<CartData[]>([]);

  const addToFavorites = (id: string) => {
    dispatch({ type: Actions.ADD_TO_FAVORITES, payload: { id } });
  };

  const removeFromFavorites = (id: string) => {
    dispatch({ type: Actions.REMOVE_FROM_FAVORITES, payload: { id } });
  };

  const addToShoppingCart = (id: string) => {
    dispatch({ type: Actions.ADD_TO_CART, payload: { id } });
  };

  const removeItemFromCart = (id: string) => {
    dispatch({ type: Actions.REMOVE_FROM_CART, payload: { id } });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localFavorites = JSON.parse(
        localStorage.getItem(LSKeyType.FAVORITES) || "[]"
      );

      const localCart = JSON.parse(
        localStorage.getItem(LSKeyType.CART_ITEMS) || "[]"
      );

      if (localFavorites.length >= 0 || localCart.length >= 0) {
        setNewFavorites(localFavorites);
        setNewCartData(localCart);
      }
    }
  }, [state.favorites, state.cart]);

  return (
    <WebshopContext.Provider
      value={{
        ...state,
        favorites: newFavorites.length > 0 ? newFavorites : state.favorites,
        addToFavorites,
        removeFromFavorites,
        addToShoppingCart,
        cart: newCartData.length > 0 ? newCartData : state.cart,
        totalQuantity:
          newCartData.length > 0 ? newCartData.length : state.cart.length,
        removeItemFromCart,
      }}
    >
      {children}
    </WebshopContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(WebshopContext);
};
