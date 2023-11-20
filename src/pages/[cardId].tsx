import CardDetail from "@/components/cardDetails/cardDetail";
import { getCardById } from "@/utils/mockData";
import { useRouter } from "next/router";

function CardDetailPage() {
  const router = useRouter();

  const cardId = Number(router.query.cardId);
  let card = null;

  if (cardId) {
    card = getCardById(cardId);
  }

  return <CardDetail card={card} />;
}

export default CardDetailPage;
