import { useGlobalContext } from "@/context/context";
import { CartData } from "@/types/cart";
import Image from "next/image";
import { AddButton } from "../common/addToCardButton/addButton";
import "./cardDetail.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CardDetail(props: { card?: CartData }) {
  const { addToShoppingCart } = useGlobalContext();

  if (!props.card) {
    return <div>No card details available</div>;
  }

  const { id, title, detail, price, image } = props.card;

  const handleAddToCart = () => {
    addToShoppingCart(id.toString());
  };

  return (
    <div className="card-info-container">
      <div className="card-info-container__image">
        <Image
          src={`https:${image.fields.file.url}`}
          alt={title}
          width={300}
          height={250}
        />
      </div>
      <div className="card-info-container__detail">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{detail}</p>
        <p className="card-price">{price} $</p>

        <div className="card-button-container">
          <AddButton
            buttonClass={"card-add-to-button"}
            text={"Add"}
            handleOnClick={handleAddToCart}
          />
          <AddButton buttonClass={"card-buy-button"} text={"Buy now"} />
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
