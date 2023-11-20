import Image from "next/image";
import { AddButton } from "../common/addToCardButton/addButton";
import "./cardDetail.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CardDetail(props: any) {
  const { card } = props;

  return (
    <div className="card-info-container">
      <div className="card-info-container__image">
        <Image src={card?.image} alt={card?.title} width={300} height={250} />
      </div>
      <div className="card-info-container__detail">
        <p className="card-title">{card?.title}</p>
        <p className="card-description">{card?.detail}</p>
        <p className="card-price">{card?.price} $</p>

        <div className="card-button-container">
          <AddButton buttonClass={"card-add-to-button"} text={"Add"} />
          <AddButton buttonClass={"card-buy-button"} text={"Buy now"} />
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
