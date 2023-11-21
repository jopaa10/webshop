import "./header.scss";
import Link from "next/link";
import { useRouter } from "next/router";

import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "@/context/context";

interface Pages {
  pathname: string;
  name: string;
  icon?: string;
}

function Header() {
  const router = useRouter();
  const { totalQuantity, startAnimation } = useGlobalContext();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(startAnimation);
  const isMounting = useRef(true);

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
    window.addEventListener("resize", handleResize);

    if (isMounting.current) {
      isMounting.current = false;
    } else {
      setAnimate(true);
    }

    // Call handler right away so state gets updated with initial window size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [totalQuantity]);

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
    <header className={"header"}>
      <nav className={"navbar"}>
        <div className={"navbar__container"}>
          <div className={"logo"}>
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
                  className={router.pathname === item.pathname ? "active" : ""}
                >
                  <Link href={item.pathname}>{item.name}</Link>
                  {item.pathname.includes("shop") && (
                    <>
                      <div
                        className={`shopping-cart-icon-container ${
                          animate ? "animation" : ""
                        }`}
                        onAnimationEnd={() => setAnimate(false)}
                      >
                        <AddShoppingCartIcon />
                        <p>{totalQuantity}</p>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <button
          className={"menu-icon"}
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
