import { useGlobalContext } from "@/context/context";

import { ArrowDropDown } from "@mui/icons-material";
import { Fragment } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function OptionsCard({
  title,
  items,
  openDropdown,
  setOpenDropdown,
}: any) {
  const isOpen = openDropdown.includes(title);
  const { handleFilterData, selectedCheckboxes } = useGlobalContext();

  const handleToggle = () => {
    if (isOpen) {
      setOpenDropdown(
        openDropdown.filter((dropdown: any) => dropdown !== title)
      );
    } else {
      setOpenDropdown([...openDropdown, title]);
    }
  };

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    handleFilterData(name.toLowerCase(), value.toLowerCase());
  };

  return (
    <Fragment>
      <input
        type="checkbox"
        id={`${title}`}
        className="filter-container__checkbox"
        checked={isOpen}
        onChange={handleToggle}
      />
      <label htmlFor={`${title}`} className="filter-container__label">
        <span>{title}</span>
        <span className={`arrow`}>
          <ArrowDropDown />
        </span>
      </label>

      <div className={`filter-container__features`}>
        <ul
          className={`filter-container__dropdown-menu ${
            isOpen ? "open" : "not-open"
          }`}
          role="menu"
        >
          {items.map((item: any, index: number) => (
            <li key={index}>
              <input
                type="checkbox"
                id={item.name}
                name={title}
                onChange={(e: any) => handleOnChange(e)}
                value={item.name}
                checked={selectedCheckboxes.includes(item.name) ? true : false}
              />
              {/* <span className="checkmark"></span> */}
              <span>&nbsp;</span>
              <label htmlFor={item.name} className="checkmark">
                {item.name}
              </label>
              <span>{item?.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}
