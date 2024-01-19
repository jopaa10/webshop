import { AddButton } from "@/components/common/addToCardButton/addButton";
import { useGlobalContext } from "@/context/context";
import { CartData } from "@/types/cart";
import { CheckoutItems } from "@/types/checkoutItems";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./shoppingCart.scss";

function ShoppingCartPage() {
  const {
    cart,
    removeItemFromCart,
    addToShoppingCart,
    decreaseItemQuantity,
    totalCost,
    subTotalCost,
  } = useGlobalContext();
  const router = useRouter();

  const handleNavigateToCardDetails = (id: string) => {
    router.push(`/${id}`);
  };

  const checkoutItems: CheckoutItems[] = [
    {
      id: 1,
      text: "Subtotal",
      icon: `${subTotalCost.toFixed(2)} $`,
    },
    {
      id: 2,
      text: "Tax",
      icon: "24 %",
    },
    {
      id: 3,
      text: "total",
      icon: `${totalCost.toFixed(2)} $`,
    },
  ];

  return (
    <section className="shopping-cart">
      <div className="cart-container">
        {cart.length > 0 ? (
          cart.map((item: CartData) => (
            <div key={item.id} className="cart-container__cart">
              <div className="details">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={120}
                />

                <div className="details__text">
                  <button
                    className="navigation-button"
                    onClick={() =>
                      handleNavigateToCardDetails(item.id.toString())
                    }
                  >
                    <h3>{item.title}</h3>
                  </button>
                  <p className="text">{item.detail}</p>
                  <p className="price">{item.price} $</p>
                  <div className="details__button-container">
                    <button
                      onClick={() => decreaseItemQuantity(item.id.toString())}
                    >
                      -
                    </button>
                    <p className="quantity">{item.quantity}</p>
                    <button
                      onClick={() => addToShoppingCart(item.id.toString())}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="delete-container">
                <p>{item.price}$</p>
                <AddButton
                  text="Delete"
                  buttonClass="delete-container__button"
                  isDelete={true}
                  handleOnClick={() => removeItemFromCart(item.id.toString())}
                />
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className="checkout-container">
        <p>Checkout </p>
        <div className="checkout-container__total">
          {checkoutItems.map((item: CheckoutItems) => (
            <div key={item.id} className="checkout-items">
              <p>{item.text}</p>
              <span>{item.icon}</span>
            </div>
          ))}
        </div>
        <button className="checkout-container__proceed-button">
          Proceed to checkout
        </button>
        <button className="checkout-container__continue-button">
          Continue shopping
        </button>
      </div>
    </section>
  );
}

export default ShoppingCartPage;
