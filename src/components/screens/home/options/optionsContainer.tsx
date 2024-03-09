import { useGlobalContext } from "@/context/context";
import { SortOrder } from "@/types/sortOrder";
import { filteredDataOptions } from "@/utils/mockData";
import CloseIcon from "@mui/icons-material/Close";
import { Fragment, useState } from "react";
import { OptionsCard } from "./optionsCard";
import "./optionsContainer.scss";

function OptionsContainer() {
  const [openDropdown, setOpenDropdown] = useState([]);
  const { selectedCheckboxes, handleRemoveFilter, webshopData } =
    useGlobalContext();

  const options = filteredDataOptions(webshopData);

  const newBrandOrder = (
    brands: { name: string; count: number }[],
    sortOrder: SortOrder
  ): { name: string; count: number }[] => {
    const sortedBrands = [...brands].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    return sortedBrands;
  };

  const sortedBrandsDescending = newBrandOrder(options.brands || [], "asc");

  options.ram?.sort((a, b) => {
    return +a.name.slice(0, 2) - +b.name.slice(0, 2);
  });

  return (
    <div className="filter-container">
      <p>Filter by</p>
      <div className="filters">
        {selectedCheckboxes?.map((item) => {
          return (
            <Fragment key={item}>
              <p>{item}&nbsp;</p>
              <button onClick={() => handleRemoveFilter(item)}>
                <CloseIcon />
              </button>
            </Fragment>
          );
        })}
      </div>
      <OptionsCard
        title={"Brand"}
        items={sortedBrandsDescending}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
      {/* <OptionsCard
        title={"Price"}
        items={mergedPrice}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      /> */}
      <OptionsCard
        title={"RAM"}
        items={options?.ram}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
    </div>
  );
}

export default OptionsContainer;
