import { useGlobalContext } from "@/context/context";
import { CartData } from "@/types/cart";
import { CheckoutItems } from "@/types/checkoutItems";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./shoppingCart.scss";
import { useSelector } from "react-redux";
import { DeleteContainer } from "./deleteContainer/DeleteContainer";
import { NavSubmitButton } from "./navSubmitButton/NavSubmitButton";
import { CheckoutTotal } from "./checkoutTotal/CheckoutTotal";

interface UserState {
  userState: {
    email: string;
    password: string;
    user: string;
  };
}

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
  const user = useSelector((state: UserState) => state.userState);

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

  const handleGoBackShopping = () => {
    router.push("/");
  };

  return (
    <section className="shopping-cart">
      <div className="cart-container">
        {cart.length > 0 ? (
          cart.map((item: CartData) => (
            <div key={item.id} className="cart-container__cart">
              <div className="details">
                <Image
                  src={`https:${item.image.fields.file.url}`}
                  alt={item.title}
                  width={100}
                  height={120}
                />

                <div className="details__text">
                  <NavSubmitButton
                    onClick={() =>
                      handleNavigateToCardDetails(item.id.toString())
                    }
                    clsName={"navigation-button"}
                    text={item.title}
                    isCard={true}
                  />
                  <p className="text">{item.detail}</p>
                  <p className="price">{item.price} $</p>
                  <div className="details__button-container">
                    <NavSubmitButton
                      onClick={() => decreaseItemQuantity(item.id.toString())}
                      text={"-"}
                    />
                    <p className="quantity">{item.quantity}</p>
                    <NavSubmitButton
                      onClick={() => addToShoppingCart(item.id.toString())}
                      text={"+"}
                    />
                  </div>
                </div>
              </div>
              <DeleteContainer
                price={item?.price}
                removeItemFromCart={removeItemFromCart}
                id={item?.id}
              />
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className="checkout-container">
        <p>Checkout </p>
        <CheckoutTotal checkoutItems={checkoutItems} />
        <NavSubmitButton
          onClick={() => router.push(user?.user ? `/checkout` : `/login`)}
          clsName={"checkout-container__proceed-button"}
          text={"Proceed to checkout"}
        />
        <NavSubmitButton
          onClick={handleGoBackShopping}
          clsName={"checkout-container__continue-button"}
          text={"Continue shopping"}
        />
      </div>
    </section>
  );
}

export default ShoppingCartPage;
