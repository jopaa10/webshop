import { FavoriteData } from "@/types/favorites";
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
  favorites: Array<FavoriteData>;
  addToFavorites(id: string): void;
  removeFromFavorites(id: string): void;
}

interface Props {
  children: React.ReactNode;
}

const initialState: InitialState = {
  //isLoading: false,
  favorites: [],
  addToFavorites() {},
  removeFromFavorites() {},
};

const WebshopContext = createContext<InitialState>(initialState);

export const WebShopProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToFavorites = (id: string) => {
    dispatch({ type: Actions.ADD_TO_FAVORITES, payload: { id } });
  };

  const removeFromFavorites = (id: string) => {
    dispatch({ type: Actions.REMOVE_FROM_FAVORITES, payload: { id } });
  };

  const [newFavorites, setNewFavorites] = useState<Array<FavoriteData>>([]);

  useEffect(() => {
    let localFavorites = [];
    if (typeof window !== "undefined") {
      localFavorites = JSON.parse(
        localStorage.getItem(LSKeyType.FAVORITES) || "[]"
      );
    }

    // Update newFavorites only if there are favorites in local storage
    if (localFavorites.length >= 0) {
      setNewFavorites(localFavorites);
    }
  }, [state.favorites]);

  return (
    <WebshopContext.Provider
      value={{
        ...state,
        favorites: newFavorites.length > 0 ? newFavorites : state.favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </WebshopContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(WebshopContext);
};
