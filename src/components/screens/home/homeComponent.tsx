import "./home.scss";
import { MOCK_DATA, sortData } from "@/utils/mockData";
import { CartData } from "@/types/cart";
import OptionsContainer from "./options/optionsContainer";
import { useGlobalContext } from "@/context/context";
import { useEffect, useState } from "react";
import { SortOrder } from "@/types/sortOrder";
import { BackgroundImg } from "./backgroundImage/backgroundImg";
import PaginationContainer from "@/components/common/pagination/PaginationContainer";

function HomeComponent() {
  const { filteredData, selectedCheckboxes } = useGlobalContext();
  const [mockData, setMockData] = useState<CartData[]>(MOCK_DATA);

  useEffect(() => {
    setMockData(selectedCheckboxes.length > 0 ? filteredData : MOCK_DATA);
  }, [selectedCheckboxes, filteredData]);

  const handleSort = (sortBy: keyof CartData, sortOrder: SortOrder) => {
    const sortedData = sortData(mockData, sortBy, sortOrder);

    if (!sortedData) {
      return;
    }
    setMockData(sortedData);
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
          <div className="sort-list">
            <ul>
              <li onClick={() => handleSort("date", "asc")}>newest first</li>
              <li onClick={() => handleSort("price", "desc")}>
                cheapest first
              </li>
              <li onClick={() => handleSort("title", "desc")}>a-z</li>
              <li onClick={() => handleSort("title", "asc")}>z-a</li>
            </ul>
          </div>
          <PaginationContainer totalProducts={mockData} />
        </div>
      </div>
    </section>
  );
}

export default HomeComponent;
