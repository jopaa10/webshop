import styles from "./header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

import MenuIcon from "@mui/icons-material/Menu";
import { Fragment, useEffect, useState } from "react";

type Pages = {
  pathname: string;
  name: string;
};

function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.logo}>
            <p>Webshop</p>
          </div>
          <ul
            style={{
              display: `${
                isMenuOpen || windowSize.width > 480 ? "flex" : "none"
              }`,
            }}
          >
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
        </div>
        <button
          className={styles.menuIcon}
          onClick={handleOpenMenu}
          style={{ display: `${windowSize.width < 480 ? "flex" : "none"}` }}
        >
          <MenuIcon fontSize="inherit" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
