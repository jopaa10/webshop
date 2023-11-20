import { FavoriteData } from "@/types/favorites";
import { AddToLocalStorage, LSKeyType } from "@/utils/addToLS";
import { MOCK_DATA } from "@/utils/mockData";
import { Actions } from "./actions";

interface Action {
  type: Actions;
  payload: { id: string };
}

interface State {
  favorites: FavoriteData[];
}

export const reducer = (state: State, action: Action) => {
  if (action.type === Actions.ADD_TO_FAVORITES) {
    const favoritesData = MOCK_DATA.find(
      (item: FavoriteData) => item.id === Number(action.payload.id)
    );

    if (favoritesData) {
      state.favorites = [...state.favorites, favoritesData];
      AddToLocalStorage({ key: LSKeyType.FAVORITES, items: state.favorites });
    }

    return { ...state, favorites: state.favorites };
  }
  if (action.type === Actions.REMOVE_FROM_FAVORITES) {
    const dataFromLocalStorage = JSON.parse(
      localStorage.getItem(LSKeyType.FAVORITES) || "[]"
    );

    let newFavorites = [];

    if (dataFromLocalStorage) {
      newFavorites = dataFromLocalStorage.filter(
        (item: FavoriteData) => item.id !== Number(action.payload.id)
      );
    } else {
      newFavorites = state.favorites.filter(
        (item: FavoriteData) => item.id !== Number(action.payload.id)
      );
    }

    AddToLocalStorage({ key: LSKeyType.FAVORITES, items: newFavorites });

    return {
      ...state,
      favorites: newFavorites,
    };
  }
  throw new Error(`no matching action types: ${action.type}`);
};
