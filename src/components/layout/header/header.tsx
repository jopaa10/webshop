import "./header.scss";
import { useRouter } from "next/router";
import { Fragment, useEffect, useRef, useState } from "react";
import { useGlobalContext } from "@/context/context";
import { LoginCard } from "../loginCard/loginCard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logoutUser } from "@/features/user/userSlice";
import { NavigationContainer } from "./navigation/Navigation";

interface Pages {
  pathname: string;
  name: string;
  icon?: string;
}

interface UserState {
  userState: {
    user: {
      email: string;
      password: string;
      name: string;
    };
  };
}

function Header() {
  const router = useRouter();
  const { totalQuantity, handleDeleteCart } = useGlobalContext();
  const [animate, setAnimate] = useState<boolean>(false);
  const isMounting = useRef(true);

  const dispatch = useDispatch();
  const user = useSelector((state: UserState) => state.userState?.user);

  useEffect(() => {
    if (isMounting.current) {
      isMounting.current = false;
    } else {
      setAnimate(true);
    }
  }, [totalQuantity]);

  const PAGES: Pages[] = [
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

  const handleLogout = () => {
    router.push("/");
    handleDeleteCart();
    dispatch(logoutUser());
  };

  return (
    <Fragment>
      {user?.name ? (
        <div>
          <p style={{ color: "white" }}>Hello, {user?.name}</p>
          <button onClick={handleLogout}>logout</button>
        </div>
      ) : (
        <LoginCard />
      )}
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
        <NavigationContainer
          PAGES={PAGES}
          handleCloseNavMenu={handleCloseNavMenu}
          animate={animate}
          setAnimate={setAnimate}
          totalQuantity={totalQuantity}
          router={router}
        />
      </header>
    </Fragment>
  );
}

export default Header;
