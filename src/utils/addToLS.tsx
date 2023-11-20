import { FavoriteData } from "@/types/favorites";

export enum LSKeyType {
  FAVORITES = "FAVORITES",
}
interface IStorage {
  key: string;
  items: FavoriteData[];
}

export const AddToLocalStorage = ({ key, items }: IStorage): void => {
  localStorage.setItem(key, JSON.stringify(items));
};
