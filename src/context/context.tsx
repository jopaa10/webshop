import { CartData } from "@/types/cart";
import { LSKeyType } from "@/utils/addToLS";
import { getTotal } from "@/utils/getTotal";
import {
  useContext,
  useReducer,
  createContext,
  useState,
  useEffect,
} from "react";
import { Actions } from "./actions";
import { reducer } from "./reducer";
import { getWebshopData } from "@/utils/webshopData";

interface InitialState {
  //isLoading: boolean;
  favorites: CartData[];
  webshopData: CartData[] | undefined;
  addToFavorites(id: string): void;
  removeFromFavorites(id: string): void;
  cart: CartData[];
  addToShoppingCart(id: string): void;
  totalQuantity: number;
  removeItemFromCart(id: string): void;
  decreaseItemQuantity(id: string): void;
  handleFilterData(property: keyof CartData, value: string): void;
  filteredData: CartData[];
  selectedCheckboxes: string[];
  subTotalCost: number;
  totalCost: number;
  handleRemoveFilter(filter: string): void;
  handleDeleteCart(): void;
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
  handleFilterData() {},
  filteredData: [],
  selectedCheckboxes: [],
  subTotalCost: 0,
  totalCost: 0,
  handleRemoveFilter() {},
  webshopData: [],
  handleDeleteCart() {},
};

const WebshopContext = createContext<InitialState>(initialState);

export const WebShopProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newFavorites, setNewFavorites] = useState<CartData[]>([]);
  const [newCartData, setNewCartData] = useState<CartData[]>([]);
  const { subTotalCost, totalCost } = getTotal(newCartData);

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

  const handleFilterData = (property: keyof CartData, value: string) => {
    dispatch({ type: Actions.FILTER_DATA, payload: { property, value } });
  };

  const handleRemoveFilter = (filter: string) => {
    dispatch({ type: Actions.FILTER_DATA, payload: { value: filter } });
  };

  const handleDeleteCart = () => {
    dispatch({ type: Actions.DELETE_CART, payload: {} });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const fetchData = async () => {
        try {
          const webshopData = (await getWebshopData()) as unknown as CartData[];
          dispatch({
            type: Actions.SET_WEBSHOP_DATA,
            payload: { data: webshopData },
          });
        } catch (error) {
          //console.log(error);
        }
      };

      const localFavorites = JSON?.parse(
        localStorage.getItem(LSKeyType.FAVORITES) || "[]"
      );
      const localCart = JSON?.parse(
        localStorage.getItem(LSKeyType.CART_ITEMS) || "[]"
      );

      if (localFavorites?.length >= 0 || localCart?.length >= 0) {
        setNewFavorites(localFavorites);
        setNewCartData(localCart);
      }
      fetchData();
    }
  }, [state.favorites, state.cart]);

  return (
    <WebshopContext.Provider
      value={{
        ...state,
        webshopData: state.webshopData,
        favorites: newFavorites.length > 0 ? newFavorites : state.favorites,
        addToFavorites,
        removeFromFavorites,
        addToShoppingCart,
        cart: newCartData.length > 0 ? newCartData : state.cart,
        totalQuantity:
          newCartData.length > 0 ? newCartData.length : state.cart.length,
        removeItemFromCart,
        decreaseItemQuantity,
        handleFilterData,
        filteredData: state.filteredData,
        subTotalCost,
        totalCost,
        handleRemoveFilter,
        handleDeleteCart,
      }}
    >
      {children}
    </WebshopContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(WebshopContext);
};
