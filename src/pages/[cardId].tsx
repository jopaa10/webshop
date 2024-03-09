import CardDetail from "@/components/cardDetails/cardDetail";
import { getWebshopData } from "@/utils/webshopData";

function CardDetailPage({ card }) {
  return <CardDetail card={card} />;
}

export default CardDetailPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const webshopData = await getWebshopData();

  const cardId = +params.cardId;
  const cardData = webshopData?.find((item) => item.id === cardId);

  return {
    props: { card: cardData },
  };
}
