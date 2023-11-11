import styles from "./header.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

type Pages = {
  pathname: string;
  name: string;
};

function Header() {
  const router = useRouter();

  const pages: Pages[] = [
    {
      pathname: "/",
      name: "Home",
    },
    {
      pathname: "/favorites",
      name: "Favorites",
    },
    {
      pathname: "/shop",
      name: "Shop",
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>logo</p>
      </div>
      <nav>
        <ul>
          {pages.map((item) => {
            return (
              <li
                key={item.pathname}
                className={
                  router.pathname === item.pathname ? styles.active : ""
                }
              >
                <Link href={item.pathname}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
