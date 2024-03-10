import { useGlobalContext } from "@/context/context";
import { ArrowDropDown } from "@mui/icons-material";
import { Fragment } from "react";
import { FilterContainer } from "./FilterContainer";
import "./optionsContainer.scss";

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

      <FilterContainer
        isOpen={isOpen}
        items={items}
        title={title}
        handleOnChange={handleOnChange}
        selectedCheckboxes={selectedCheckboxes}
      />
    </Fragment>
  );
}
