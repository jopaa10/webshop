import { CartData } from "@/types/cart";
import { Props } from "@/types/products";
import Card from "../screens/home/card/card";

export function CardGrid({ products }: Props) {
  return (
    <div className="card-list">
      {products.map((item: CartData) => {
        return <Card key={item.id} card={item} />;
      })}
    </div>
  );
}
