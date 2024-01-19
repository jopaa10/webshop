import "./card.scss";
import Image from "next/image";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/context/context";
import { Card, CartData } from "@/types/cart";
import { AddButton } from "@/components/common/addToCardButton/addButton";

function Card(props: Card): JSX.Element {
  const { detail, id, image, price, title } = props.card;

  const router = useRouter();
  const { favorites, addToFavorites, removeFromFavorites, addToShoppingCart } =
    useGlobalContext();

  const handleNavigateToDetails = (id: number) => {
    router.push(`/${id}`);
  };

  const handleAddToCart = () => {
    addToShoppingCart(id.toString());
  };

  return (
    <div className={"card"} key={id}>
      {favorites?.find((item: CartData) => item?.id === id) ? (
        <button
          className={"card__favorite-icon"}
          onClick={() => removeFromFavorites(id.toString())}
        >
          <TurnedInIcon color="inherit" fontSize="inherit" />
        </button>
      ) : (
        <button
          className={"card__favorite-icon"}
          onClick={() => addToFavorites(id.toString())}
        >
          <TurnedInNotIcon color="inherit" fontSize="inherit" />
        </button>
      )}

      <Image src={image} alt={title} width={150} height={150} />

      <a onClick={() => handleNavigateToDetails(id)} className={"card__title"}>
        {title}
      </a>

      <p className={"card__detail"}>{detail}</p>
      <p className={"card__price"}>{price} $</p>

      <AddButton
        buttonClass={"card__shopping-icon"}
        text={"Add"}
        handleOnClick={handleAddToCart}
      />
    </div>
  );
}

export default Card;
