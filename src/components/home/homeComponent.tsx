import { useRouter } from "next/navigation";
import styles from "./home.module.scss";

function HomeComponent() {
  const MOCK_DATA = [
    {
      id: 1,
      title: "Samsung Galaxy s10",
      price: 499.99,
      quantity: 1,
    },
    {
      id: 2,
      title: "Samsung Galaxy s21",
      price: 599.99,
      quantity: 1,
    },
    {
      id: 3,
      title: "Samsung Galaxy s20",
      price: 299.99,
      quantity: 1,
    },
  ];

  const router = useRouter();

  console.log(router);

  const handleNavigateToDetails = (id: number) => {
    router.push(`/${id}`);
  };

  return (
    <div className={styles.home}>
      <p className={styles.home__title}>Home</p>

      <div className={styles.cardContainer}>
        {MOCK_DATA.map((item: any) => {
          return (
            <button
              className={styles.card}
              key={item.id}
              onClick={() => handleNavigateToDetails(item.id)}
            >
              <p className={styles.title}>{item.title}</p>
              <img src="" alt={item.title} />
              <p className={styles.price}>price: {item.price}</p>
              <p className={styles.quantity}>quantity: {item.quantity}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default HomeComponent;
