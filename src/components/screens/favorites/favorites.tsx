import "./favorites.scss";

import { PageTitle } from "@/components/common/pageTitle/pageTitle";
import Card from "../home/card";
import { FavoriteData } from "@/types/favorites";
import { CardData } from "@/types/card";

export function FavoritesPage(props: { favorites: FavoriteData[] }) {
  const { favorites } = props;

  return (
    <div className="favorites-container">
      <PageTitle text={"Favorites"} />

      {favorites.length > 0 ? (
        <div className="favorites-container__cards">
          {favorites?.map((item: CardData) => (
            <Card key={item.id} card={item} />
          ))}
        </div>
      ) : (
        <p>
          No item added in Favorites yet! Please return to the Home page and add
          some item to favorites
        </p>
      )}
    </div>
  );
}
