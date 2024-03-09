/* eslint-disable @typescript-eslint/no-explicit-any */
import { CartData } from "@/types/cart";
import { getWebshopData } from "./webshopData";

export async function GenerateNumberedItems(property: keyof CartData) {
  const data = await getWebshopData();

  const instances = data?.reduce(function (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    allItems: any,
    item: any
  ) {
    const itemProperty = item[property];

    if (itemProperty in allItems) {
      allItems[itemProperty]++;
    } else {
      allItems[itemProperty] = 1;
    }
    return allItems;
  }, {});

  return instances;
}

export function mergePriceCountData(
  data: { id: number; name: string; minPrice: number; maxPrice: number }[],
  counts: { [key: string]: number }
): { id: number; name: string; count: number }[] {
  return data.map((item) => {
    const countData = Object.entries(counts).reduce((acc, [price, count]) => {
      const parsedPrice = parseFloat(price);
      if (
        !isNaN(parsedPrice) &&
        parsedPrice >= item.minPrice &&
        parsedPrice <= item.maxPrice
      ) {
        return acc + count;
      }
      return acc;
    }, 0);
    return { ...item, count: countData };
  });
}
