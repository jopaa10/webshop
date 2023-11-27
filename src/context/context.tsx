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
  removeItemFromCart(id: string): void;
  decreaseItemQuantity(id: string): void;
  filterData(property: keyof CartData, value: string): void;
  filteredData: CartData[];
  selectedCheckboxes: string[];
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
  removeItemFromCart() {},
  decreaseItemQuantity() {},
  filterData() {},
  filteredData: [],
  selectedCheckboxes: [],
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

  const decreaseItemQuantity = (id: string) => {
    dispatch({ type: Actions.DECREASE_QUANTITY, payload: { id } });
  };

  const filterData = (property: keyof CartData, value: string) => {
    dispatch({ type: Actions.FILTER_DATA, payload: { property, value } });
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
        decreaseItemQuantity,
        filterData,
        filteredData: state.filteredData,
      }}
    >
      {children}
    </WebshopContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(WebshopContext);
};
