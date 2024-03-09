import Link from "next/link";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export function NavigationContainer({
  PAGES,
  handleCloseNavMenu,
  animate,
  setAnimate,
  totalQuantity,
  router,
}) {
  return (
    <nav className={`navigation__nav`} id="nav">
      <ul className="navigation__list">
        {PAGES.map((item) => {
          return (
            <li
              key={item.pathname}
              className={router.pathname === item.pathname ? "active" : ""}
            >
              <Link
                href={item.pathname}
                onClick={handleCloseNavMenu}
                key={router.asPath}
              >
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
  );
}
