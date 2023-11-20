import styles from "./home.module.scss";

import { MOCK_DATA } from "@/utils/mockData";
import Card from "./card";
import { PageTitle } from "../../common/pageTitle/pageTitle";
import { CardData } from "@/types/card";

function HomeComponent() {
  return (
    <div className={styles.home}>
      <PageTitle text={"Home"} />

      <div className={styles.cardContainer}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {MOCK_DATA.map((item: CardData) => {
          return <Card key={item.id} card={item} />;
        })}
      </div>
    </div>
  );
}

export default HomeComponent;
