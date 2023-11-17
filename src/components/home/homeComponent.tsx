import styles from "./home.module.scss";

import { MOCK_DATA } from "@/utils/mockData";
import Card from "./card";

function HomeComponent() {
  return (
    <div className={styles.home}>
      <p className={styles.home__title}>Home</p>

      <div className={styles.cardContainer}>
        {MOCK_DATA.map((item: any) => {
          return (
            <Card key={item.id} card={item} />
            // <div className={styles.card} key={item.id}>
            //   <span
            //     className={styles.favoriteIcon}
            //     onClick={() => handleAddToFavorites(item.id)}
            //   >
            //     {toggleFavoriteIcon &&
            //     activeIdFavoriteIcon &&
            //     activeIdFavoriteIcon.includes(item.id) ? (
            //       <TurnedInIcon color="inherit" fontSize="inherit" />
            //     ) : (
            //       <TurnedInNotIcon color="inherit" fontSize="inherit" />
            //     )}
            //   </span>

            //   <Image
            //     src={item.image}
            //     alt={item.title}
            //     width={150}
            //     height={150}
            //   />

            //   <a
            //     onClick={() => handleNavigateToDetails(item.id)}
            //     className={styles.title}
            //   >
            //     {item.title}
            //   </a>

            //   <p className={styles.detail}>{item.detail}</p>
            //   <p className={styles.price}>{item.price} $</p>
            //   <button className={styles.shoppingIcon}>
            //     <span>Add</span>
            //     <ShoppingBasketIcon />
            //   </button>
            // </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeComponent;
