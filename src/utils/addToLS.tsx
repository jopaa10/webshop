import { CartData } from "@/types/cart";

export enum LSKeyType {
  FAVORITES = "FAVORITES",
  CART_ITEMS = "CART_ITEMS",
}
interface IStorage {
  key: string;
  items: CartData[];
}

export const AddToLocalStorage = ({ key, items }: IStorage): void => {
  localStorage.setItem(key, JSON.stringify(items));
};
