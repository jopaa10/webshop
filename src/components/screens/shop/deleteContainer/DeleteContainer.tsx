import { AddButton } from "@/components/common/addToCardButton/addButton";

export function DeleteContainer({ price, removeItemFromCart, id }) {
  return (
    <div className="delete-container">
      <p>{price}$</p>
      <AddButton
        text="Delete"
        buttonClass="delete-container__button"
        isDelete={true}
        handleOnClick={() => removeItemFromCart(id.toString())}
      />
    </div>
  );
}
