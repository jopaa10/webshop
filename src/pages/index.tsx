import { getWebshopData } from "@/utils/webshopData";
import HomeComponent from "../components/screens/home/homeComponent";
import { CartData } from "@/types/cart";
import { GetStaticProps } from "next";

interface ICart {
  data: CartData[];
}

export default function Home({ data }: ICart) {
  return (
    <>
      <main>
        <HomeComponent data={data} />
      </main>
    </>
  );
}

export const getStaticProps = (async () => {
  const webshopData = await getWebshopData();

  return { props: { data: webshopData } };
}) satisfies GetStaticProps;
