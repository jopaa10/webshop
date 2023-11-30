/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGlobalContext } from "@/context/context";
import { CartData } from "@/types/cart";
import { filteredDataOptions } from "@/utils/mockData";
import { useState } from "react";
import { OptionsCard } from "./optionsCard";
import "./optionsContainer.scss";

function OptionsContainer() {
  const [openDropdown, setOpenDropdown] = useState([]);
  const { filteredData, selectedCheckboxes } = useGlobalContext();

  const options = filteredDataOptions();
  console.log(options, filteredData);

  // Function to generate the new object based on the selected filter
  function generateFilterOptions(filter: string, filterType: "brand" | "ram") {
    if (filterType === "brand") {
      const availableRams: string[] = [];
      return {
        brand: [{ name: filter }],
        ram: availableRams.map((ram) => ({ name: ram })),
      };
    } else if (filterType === "ram") {
      const availableBrands: string[] = [];
      return {
        ram: [{ name: filter }],
        brands: availableBrands.map((brand) => ({ name: brand })),
      };
    }
    return {};
  }

  // Example usage:
  const selectedFilter: string = "samsung"; // or '6 gb' based on user selection
  const filterType: "brand" | "ram" = selectedFilter.includes("gb")
    ? "ram"
    : "brand";

  const newObject = generateFilterOptions(selectedFilter, filterType);
  console.log(newObject);

  return (
    <div className="filter-container">
      <p>Filter by</p>
      <OptionsCard
        title={"Brand"}
        items={selectedFilter ? newObject?.brand : options?.brands}
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
        items={newObject?.ram}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
    </div>
  );
}

export default OptionsContainer;
