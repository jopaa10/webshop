import { useGlobalContext } from "@/context/context";
import { CartData } from "@/types/cart";
import { Props } from "@/types/products";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { AddButton } from "../common/addToCardButton/addButton";
import "./cardList.scss";

export function CardList({ products }: Props) {
  const { addToShoppingCart } = useGlobalContext();
  const router = useRouter();

  const handleCardDetails = (id: string) => {
    router.push(`/${id}`);
  };

  return (
    <Fragment>
      {products.map((item: CartData) => (
        <div
          className="card-list-view"
          key={item.id}
          role="button"
          onClick={() => handleCardDetails(item.id.toString())}
        >
          <Image src={item.image} width={150} height={150} alt={item.title} />
          <div className="card-list-view__text">
            <p>{item.title}</p>
            <p>{item.detail}</p>
            <AddButton
              text="Add"
              handleOnClick={() => addToShoppingCart(item.id.toString())}
              buttonClass="card-list-view__text__button"
            />
          </div>
          <div className="card-list-view__price">
            <p>{item.price} $</p>
          </div>
        </div>
      ))}
    </Fragment>
  );
}
