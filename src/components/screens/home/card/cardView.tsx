import WindowIcon from "@mui/icons-material/Window";
import MenuIcon from "@mui/icons-material/Menu";
import "./cardView.scss";
import { Fragment, useState } from "react";
import { CardGrid } from "@/components/layoutViews/cardGrid";
import { CardList } from "@/components/layoutViews/cardList";
import { Props } from "@/types/products";

export function CardView({ totalProducts, products }: Props) {
  const [isActive, setIsActiveView] = useState(1);
  const [layout, setLayout] = useState("grid");
  const cardView = [
    {
      id: 1,
      icon: <WindowIcon fontSize="inherit" />,
      className: "card-view__grid-icon",
    },
    {
      id: 2,
      icon: <MenuIcon fontSize="inherit" />,
      className: "card-view__menu-icon",
    },
  ];

  const handleChangeView = (id: number) => {
    setIsActiveView(id);
    setLayout(layout.includes("grid") ? "list" : "grid");
  };

  return (
    <Fragment>
      <div className="card-view">
        <p>Products: {totalProducts}</p>
        <ul className="card-view__icons">
          {cardView.map((item) => (
            <li key={item.id} onClick={() => handleChangeView(item.id)}>
              <span
                className={`${item.className}${
                  item.id === isActive ? "--active" : ""
                }`}
              >
                {item.icon}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {layout === "grid" ? (
        <CardGrid products={products} />
      ) : (
        <CardList products={products} />
      )}
    </Fragment>
  );
}
