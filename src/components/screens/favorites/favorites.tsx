import "./favorites.scss";

import { CartData } from "@/types/cart";
import Card from "../home/card/card";
import { BackgroundImg } from "../home/backgroundImage/backgroundImg";

export function FavoritesPage(props: { favorites: CartData[] }) {
  const { favorites } = props;

  return (
    <div className="favorites-container">
      <BackgroundImg
        name={"Favorites"}
        backgroundImg={"/images/favorites.jpg"}
      />

      {favorites.length > 0 ? (
        <div className="favorites-container__cards">
          {favorites?.map((item: CartData) => (
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
