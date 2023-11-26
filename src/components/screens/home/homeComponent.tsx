import styles from "./home.module.scss";

import { MOCK_DATA } from "@/utils/mockData";
import Card from "./card";
import { PageTitle } from "../../common/pageTitle/pageTitle";
import { CartData } from "@/types/cart";

function HomeComponent() {
  return (
    <div className={styles.home}>
      <PageTitle text={"Home"} />

      <div className={styles.cardContainer}>
        {MOCK_DATA.map((item: CartData) => {
          return <Card key={item.id} card={item} />;
        })}
      </div>
    </div>
  );
}

export default HomeComponent;
