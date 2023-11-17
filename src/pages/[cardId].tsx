import { getCardById } from "@/utils/mockData";
import Image from "next/image";
import { useRouter } from "next/router";

function CardDetailPage() {
  const router = useRouter();

  const cardId = Number(router.query.cardId);
  console.log(cardId);

  let card = null;

  if (cardId) {
    card = getCardById(cardId);
  }

  console.log(cardId);

  return (
    <div className="cardInfoContainer">
      <p>{card?.title}</p>
      <Image
        src={`${card?.image}`}
        alt={`${card?.title}`}
        width={100}
        height={200}
      />
      <p>{card?.price}</p>
      <p>{card?.quantity}</p>
    </div>
  );
}

export default CardDetailPage;
