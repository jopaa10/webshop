import CardDetail from "@/components/cardDetails/cardDetail";
import { CartData } from "@/types/cart";
import { getCardById } from "@/utils/mockData";
import { useRouter } from "next/router";

function CardDetailPage() {
  const router = useRouter();

  const cardId = Number(router.query.cardId);
  let card: CartData | undefined;

  if (cardId) {
    card = getCardById(cardId);
  }

  return <CardDetail card={card} />;
}

export default CardDetailPage;
