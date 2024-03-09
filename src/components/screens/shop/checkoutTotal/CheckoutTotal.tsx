import { CheckoutItems } from "@/types/checkoutItems";

export function CheckoutTotal({
  checkoutItems,
}: {
  checkoutItems: CheckoutItems[];
}) {
  return (
    <div className="checkout-container__total">
      {checkoutItems.map((item: CheckoutItems) => (
        <div key={item.id} className="checkout-items">
          <p>{item.text}</p>
          <span>{item.icon}</span>
        </div>
      ))}
    </div>
  );
}
