import { CartData } from "@/types/cart";
import { AddToLocalStorage, LSKeyType } from "@/utils/addToLS";
import { Actions } from "./actions";

interface Action {
  type: Actions;
  payload: {
    id?: string | number;
    property?: keyof CartData;
    value?: string;
    data?: CartData[];
  };
}

interface State {
  favorites: CartData[];
  cart: CartData[];
  totalQuantity: number;
  filteredData: CartData[];
  selectedCheckboxes: string[];
  webshopData: CartData[] | undefined;
}

export const reducer = (state: State, action: Action) => {
  if (action.type === Actions.SET_WEBSHOP_DATA) {
    const { data } = action.payload;

    return {
      ...state,
      webshopData: data,
    };
  }

  if (action.type === Actions.ADD_TO_FAVORITES) {
    let updatedFavorites;

    state.favorites = JSON.parse(
      localStorage.getItem(LSKeyType.FAVORITES) || "[]"
    );

    const favoritesSet = new Set<CartData>(state.favorites);
    const isFavorite = state.favorites?.find(
      (item) =>
        item?.id === (action.payload.id !== undefined && +action.payload.id)
    );

    const handleGetCardById = async () => {
      if (isFavorite) {
        favoritesSet.delete(isFavorite);
        updatedFavorites = Array.from(favoritesSet);
      } else {
        const favoritesData = state.webshopData?.find(
          (item: CartData) =>
            item.id === (action.payload.id !== undefined && +action.payload.id)
        );

        updatedFavorites = [...state.favorites, favoritesData] as CartData[];
      }
      AddToLocalStorage({ key: LSKeyType.FAVORITES, items: updatedFavorites });
    };

    handleGetCardById();

    return {
      ...state,
    };
  }

  if (action.type === Actions.REMOVE_FROM_FAVORITES) {
    const dataFromLocalStorage = JSON.parse(
      localStorage.getItem(LSKeyType.FAVORITES) || "[]"
    );

    let newFavorites = [];

    if (dataFromLocalStorage) {
      newFavorites = dataFromLocalStorage?.filter(
        (item: CartData) =>
          item?.id !== (action.payload.id !== undefined && +action.payload.id)
      );
    } else {
      newFavorites = state.favorites.filter(
        (item: CartData) =>
          item?.id !== (action.payload.id !== undefined && +action.payload.id)
      );
    }

    AddToLocalStorage({ key: LSKeyType.FAVORITES, items: newFavorites });

    return {
      ...state,
      favorites: newFavorites,
    };
  }

  if (action.type === Actions.ADD_TO_CART) {
    state.cart = JSON.parse(localStorage.getItem(LSKeyType.CART_ITEMS) || "[]");

    const isItemInCart = state.cart.find(
      (item: CartData) =>
        item.id ===
        (action.payload.id !== undefined &&
          action.payload.id !== undefined &&
          +action.payload.id)
    );

    let updatedCart;
    const handleGetCardById = async () => {
      if (isItemInCart) {
        updatedCart = state.cart.map((item: CartData) =>
          item.id ===
          (action.payload.id !== undefined &&
            action.payload.id !== undefined &&
            +action.payload.id)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const cartData = state.webshopData?.find(
          (item: CartData) =>
            item.id === (action.payload.id !== undefined && +action.payload.id)
        );
        updatedCart = [...state.cart, cartData] as CartData[];
      }

      AddToLocalStorage({ key: LSKeyType.CART_ITEMS, items: updatedCart });
    };

    handleGetCardById();

    return {
      ...state,
    };
  }

  if (action.type === Actions.REMOVE_FROM_CART) {
    const storedCartItems: CartData[] = JSON.parse(
      localStorage.getItem(LSKeyType.CART_ITEMS) || "[]"
    );
    const cartItems = new Set<CartData>(storedCartItems);

    const itemToRemove = Array.from(cartItems).find(
      (item: CartData) =>
        item.id === (action.payload.id !== undefined && +action.payload.id)
    );

    if (itemToRemove) {
      cartItems.delete(itemToRemove);
    }

    AddToLocalStorage({
      key: LSKeyType.CART_ITEMS,
      items: Array.from(cartItems),
    });

    return {
      ...state,
      cart: Array.from(cartItems),
    };
  }

  if (action.type === Actions.DECREASE_QUANTITY) {
    const storedCartItems: CartData[] = JSON.parse(
      localStorage.getItem(LSKeyType.CART_ITEMS) || "[]"
    );

    const cartItems = new Set<CartData>(storedCartItems);
    const itemFound = Array.from(cartItems).find(
      (item: CartData) =>
        item.id === (action.payload.id !== undefined && +action.payload.id)
    );

    let updatedCart: CartData[];

    if (itemFound && itemFound?.quantity > 1) {
      updatedCart = Array.from(cartItems).map((item: CartData) =>
        item.id === (action.payload.id !== undefined && +action.payload.id)
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    } else {
      updatedCart = Array.from(cartItems).filter(
        (item: CartData) =>
          item.id !== (action.payload.id !== undefined && +action.payload.id)
      );
    }

    AddToLocalStorage({ key: LSKeyType.CART_ITEMS, items: updatedCart });

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === Actions.DELETE_CART) {
    AddToLocalStorage({ key: LSKeyType.CART_ITEMS, items: [] });
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === Actions.FILTER_DATA) {
    const { value } = action.payload;
    let newData = [] as CartData[];
    const updatedCheckboxes = [...state.selectedCheckboxes];

    if (value !== undefined) {
      if (updatedCheckboxes.includes(value)) {
        const index = updatedCheckboxes.indexOf(value);
        updatedCheckboxes.splice(index, 1);
      } else {
        updatedCheckboxes.push(value);
      }
      newData = state.webshopData?.filter((item) =>
        updatedCheckboxes.some((checkbox) =>
          [item.brand, item.ram].includes(checkbox)
        )
      ) as CartData[];
    }

    return {
      ...state,
      selectedCheckboxes: updatedCheckboxes,
      filteredData: newData,
    };
  }

  if (action.type === Actions.REMOVE_FILTER) {
    const { value } = action.payload;
    let updatedCheckboxes: string[] = [];

    if (state.selectedCheckboxes) {
      updatedCheckboxes = state.selectedCheckboxes.filter(
        (item) => item !== value
      );
    }

    return {
      ...state,
      selectedCheckboxes: updatedCheckboxes,
    };
  }

  throw new Error(`no matching action types: ${action.type}`);
};
