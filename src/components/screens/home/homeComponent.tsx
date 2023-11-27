import "./home.scss";
import { MOCK_DATA } from "@/utils/mockData";
import { PageTitle } from "../../common/pageTitle/pageTitle";
import { CartData } from "@/types/cart";
import OptionsContainer from "./options/optionsContainer";
import Card from "./card/card";
import { useGlobalContext } from "@/context/context";
import { useEffect, useState } from "react";

function HomeComponent() {
  const { filteredData, selectedCheckboxes } = useGlobalContext();
  const [mockData, setMockData] = useState<CartData[]>(MOCK_DATA);

  useEffect(() => {
    setMockData(selectedCheckboxes.length > 0 ? filteredData : MOCK_DATA);
  }, [selectedCheckboxes]);

  return (
    <section className={"home-section"}>
      <PageTitle text={"Home"} />

      <div className="home-section__card-container">
        <OptionsContainer />
        <div className={"cards"}>
          {mockData.map((item: CartData) => {
            return <Card key={item.id} card={item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default HomeComponent;
