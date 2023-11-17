import "./card.scss";

import Image from "next/image";

import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Card(props: any) {
  const { detail, id, image, price, quantity, title } = props.card;

  const router = useRouter();
  const [toggleFavoriteIcon, setToggleFavoriteIcon] = useState<boolean>(false);
  const [activeIdFavoriteIcon, setActiveIdFavoriteIcon] = useState<
    (number | null)[]
  >([]);

  const handleNavigateToDetails = (id: number) => {
    router.push(`/${id}`);
  };

  const handleAddToFavorites = (id: number) => {
    const favoriteId = activeIdFavoriteIcon.find((item: any) => item.id === id);

    if (!favoriteId) {
      setActiveIdFavoriteIcon(activeIdFavoriteIcon.concat(id));
    }
    activeIdFavoriteIcon.pop();
    setToggleFavoriteIcon(!toggleFavoriteIcon);
  };

  return (
    <div className={"card"} key={id}>
      <span
        className={"card__favorite-icon"}
        onClick={() => handleAddToFavorites(id)}
      >
        {toggleFavoriteIcon &&
        activeIdFavoriteIcon &&
        activeIdFavoriteIcon.includes(id) ? (
          <TurnedInIcon color="inherit" fontSize="inherit" />
        ) : (
          <TurnedInNotIcon color="inherit" fontSize="inherit" />
        )}
      </span>

      <Image src={image} alt={title} width={150} height={150} />

      <a onClick={() => handleNavigateToDetails(id)} className={"card__title"}>
        {title}
      </a>

      <p className={"card__detail"}>{detail}</p>
      <p className={"card__price"}>{price} $</p>
      <button className={"card__shopping-icon"}>
        <span>Add</span>
        <ShoppingBasketIcon />
      </button>
    </div>
  );
}

export default Card;
