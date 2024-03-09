import "./home.scss";
import { sortData } from "@/utils/mockData";
import { CartData } from "@/types/cart";
import OptionsContainer from "./options/optionsContainer";
import { useGlobalContext } from "@/context/context";
import { useEffect, useState } from "react";
import { SortOrder } from "@/types/sortOrder";
import { BackgroundImg } from "./backgroundImage/backgroundImg";
import PaginationContainer from "@/components/common/pagination/PaginationContainer";
import { SortList } from "./sortList/SortList";

interface ICart {
  data: CartData[];
}

function HomeComponent({ data }: ICart) {
  const { filteredData, selectedCheckboxes } = useGlobalContext();
  const [webshopData, setWebshopData] = useState<CartData[]>(data);

  useEffect(() => {
    setWebshopData(selectedCheckboxes?.length > 0 ? filteredData : data);
  }, [selectedCheckboxes, filteredData, data]);

  const handleSort = (sortBy: keyof CartData, sortOrder: SortOrder) => {
    const sortedData = sortData(webshopData, sortBy, sortOrder);

    if (!sortedData) {
      return;
    }
    setWebshopData(sortedData);
  };

  return (
    <section className={"home-section"}>
      <BackgroundImg
        name={"Home"}
        backgroundImg={"/images/home_background.png"}
      />

      <div className="home-section__card-container">
        <OptionsContainer />

        <div className="cards">
          <SortList handleSort={handleSort} />
          <PaginationContainer totalProducts={webshopData} />
        </div>
      </div>
    </section>
  );
}

export default HomeComponent;
