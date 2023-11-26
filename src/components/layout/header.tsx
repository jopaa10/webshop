import "./header.scss";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const { totalQuantity } = useGlobalContext();
  const [animate, setAnimate] = useState<boolean>(false);
  const isMounting = useRef(true);

  useEffect(() => {
    if (isMounting.current) {
      isMounting.current = false;
    } else {
      setAnimate(true);
    }
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

  const handleCloseNavMenu = () => {
    const checkbox = document.getElementById("navi-toggle") as HTMLInputElement;
    if (checkbox.checked) {
      checkbox.checked = false;
    }
  };

  return (
    <header className="navigation">
      <div className="logo">
        <p>Webshop</p>
      </div>

      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className={`navigation__background`}>&nbsp;</div>
      <nav className={`navigation__nav`} id="nav">
        <ul className="navigation__list">
          {pages.map((item) => {
            return (
              <li
                key={item.pathname}
                className={router.pathname === item.pathname ? "active" : ""}
              >
                <Link href={item.pathname} onClick={handleCloseNavMenu}>
                  {item.name}
                </Link>
                {item.pathname.includes("shop") && (
                  <>
                    <div
                      className={`shopping-cart-icon-container ${
                        animate ? "animation" : ""
                      }`}
                      onAnimationEnd={() => setAnimate(false)}
                    >
                      <AddShoppingCartIcon fontSize="inherit" />
                      <p>{totalQuantity}</p>
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
