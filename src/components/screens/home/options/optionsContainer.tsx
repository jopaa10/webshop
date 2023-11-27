/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  GenerateNumberedItems,
  mergeCountData,
  mergePriceCountData,
} from "@/utils/generateNumberedItems";
import { useState } from "react";
import { OptionsCard } from "./optionsCard";
import "./optionsContainer.scss";

interface BrandData {
  id: number;
  name: string;
  brand: string;
  count?: number;
}

function OptionsContainer() {
  const BRANDS: BrandData[] = [
    {
      id: 1,
      name: "Samsung",
      brand: "samsung",
    },
    {
      id: 2,
      name: "iPhone",
      brand: "iphone",
    },
    {
      id: 3,
      name: "Xiaomi",
      brand: "xiaomi",
    },
  ];

  const PRICE = [
    {
      id: 1,
      name: "100 - 299 $",
      minPrice: 100,
      maxPrice: 299.99,
    },
    {
      id: 2,
      name: "300 - 499 $",
      minPrice: 300,
      maxPrice: 499.99,
    },
    {
      id: 3,
      name: "500 - 799 $",
      minPrice: 500,
      maxPrice: 799.99,
    },
    {
      id: 4,
      name: "800+ $",
      minPrice: 800,
      maxPrice: Infinity,
    },
  ];

  const RAM = [
    {
      id: 1,
      name: "4 GB",
    },
    {
      id: 2,
      name: "6 GB",
    },
    {
      id: 3,
      name: "8 GB",
    },
    {
      id: 4,
      name: "12 GB",
    },
  ];

  const [openDropdown, setOpenDropdown] = useState([]);
  //const [numberedItems, setNumberedItems] = useState<any[]>([null]);

  let mergedBrands: any[] = [];
  let mergedRam: any[] = [];
  let mergedPrice: any[] = [];

  const brand = GenerateNumberedItems("brand");
  const ram = GenerateNumberedItems("ram");
  const price = GenerateNumberedItems("price");

  mergedBrands = mergeCountData(BRANDS, brand, "name");
  mergedRam = mergeCountData(RAM, ram, "name");

  mergedPrice = mergePriceCountData(PRICE, price);

  return (
    <div className="filter-container">
      <p>Filter by</p>
      <OptionsCard
        title={"Brand"}
        items={mergedBrands}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
      <OptionsCard
        title={"Price"}
        items={mergedPrice}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
      <OptionsCard
        title={"RAM"}
        items={mergedRam}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
    </div>
  );
}

export default OptionsContainer;
