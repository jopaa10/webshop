/* eslint-disable @typescript-eslint/no-explicit-any */
import { CartData } from "@/types/cart";
import { SortOrder } from "@/types/sortOrder";

export const MOCK_DATA: CartData[] = [
  {
    id: 1,
    title: "Samsung Galaxy s10",
    price: 499.99,
    quantity: 1,
    image: "/images/s10.png",
    detail: "New smartphone",
    brand: "samsung",
    ram: "6 gb",
    date: "2023-10-10",
  },
  {
    id: 2,
    title: "Samsung Galaxy s21",
    price: 599.99,
    quantity: 1,
    image: "/images/s21.png",
    detail: "New smartphone",
    brand: "samsung",
    ram: "4 gb",
    date: "2023-09-18",
  },
  {
    id: 3,
    title: "Samsung Galaxy s20",
    price: 299.99,
    quantity: 1,
    image: "/images/s20.png",
    detail: "New smartphone",
    brand: "samsung",
    ram: "6 gb",
    date: "2023-10-10",
  },
  {
    id: 4,
    title: "iPhone 13",
    price: 899.99,
    quantity: 1,
    image: "/images/iphone13.png",
    detail: "New smartphone",
    brand: "iphone",
    ram: "6 gb",
    date: "2023-10-01",
  },
  {
    id: 5,
    title: "iPhone 14 Pro",
    price: 599.99,
    quantity: 1,
    image: "/images/iphone14.png",
    detail: "New smartphone",
    brand: "iphone",
    ram: "8 gb",
    date: "2023-12-05",
  },
  {
    id: 6,
    title: "Xiaomi 13",
    price: 599.99,
    quantity: 1,
    image: "/images/iphone14.png",
    detail: "New smartphone",
    brand: "xiaomi",
    ram: "12 gb",
    date: "2023-11-19",
  },
  {
    id: 7,
    title: "Xiaomi 13",
    price: 599.99,
    quantity: 1,
    image: "/images/iphone14.png",
    detail: "New smartphone",
    brand: "xiaomi",
    ram: "12 gb",
    date: "2023-11-19",
  },
  {
    id: 8,
    title: "Xiaomi 13",
    price: 599.99,
    quantity: 1,
    image: "/images/iphone14.png",
    detail: "New smartphone",
    brand: "xiaomi",
    ram: "12 gb",
    date: "2023-11-19",
  },
  {
    id: 9,
    title: "Xiaomi 13",
    price: 599.99,
    quantity: 1,
    image: "/images/iphone14.png",
    detail: "New smartphone",
    brand: "xiaomi",
    ram: "12 gb",
    date: "2023-11-19",
  },
  {
    id: 10,
    title: "Xiaomi 13",
    price: 599.99,
    quantity: 1,
    image: "/images/iphone14.png",
    detail: "New smartphone",
    brand: "xiaomi",
    ram: "12 gb",
    date: "2023-11-19",
  },
  {
    id: 11,
    title: "Xiaomi 13",
    price: 599.99,
    quantity: 1,
    image: "/images/iphone14.png",
    detail: "New smartphone",
    brand: "xiaomi",
    ram: "12 gb",
    date: "2023-11-19",
  },
  {
    id: 12,
    title: "Xiaomi 13",
    price: 599.99,
    quantity: 1,
    image: "/images/iphone14.png",
    detail: "New smartphone",
    brand: "xiaomi",
    ram: "12 gb",
    date: "2023-11-19",
  },
  {
    id: 13,
    title: "Xiaomi 13",
    price: 599.99,
    quantity: 1,
    image: "/images/iphone14.png",
    detail: "New smartphone",
    brand: "xiaomi",
    ram: "12 gb",
    date: "2023-11-19",
  },
];

export const getCardById = (id: number | string) => {
  return MOCK_DATA.find((item: CartData) => item.id === id);
};

export const filteredDataOptions = () => {
  const counts = MOCK_DATA.reduce(
    (
      allItems: {
        ram: { [key: string]: number };
        brands: { [key: string]: number };
      },
      item
    ) => {
      allItems.ram[item.ram] = (allItems.ram[item.ram] || 0) + 1;

      allItems.brands[item.brand] = (allItems.brands[item.brand] || 0) + 1;

      return allItems;
    },
    { ram: {}, brands: {} }
  );

  const ramArray = Object.entries(counts.ram).map(([name, count]) => ({
    name: name,
    count,
  }));
  const brandArray = Object.entries(counts.brands).map(([name, count]) => ({
    name,
    count,
  }));

  const object = { ram: ramArray, brands: brandArray };

  return object;
};

export const sortData = <T extends CartData, K extends keyof T>(
  data: T[],
  sortBy: K,
  sortOrder: SortOrder
): T[] => {
  const sortedData = [...data].sort((a, b) => {
    const valueA = String(a[sortBy]).toLowerCase();
    const valueB = String(b[sortBy]).toLowerCase();

    if (sortOrder === "desc") {
      if (valueA < valueB) return -1;
      if (valueA > valueB) return 1;
    }

    if (sortOrder === "asc") {
      if (valueA > valueB) return -1;
      if (valueA < valueB) return 1;
    }

    if (sortBy === "date") {
      if (sortOrder === "asc") {
        return new Date(valueA).getTime() - new Date(valueB).getTime();
      } else if (sortOrder === "desc") {
        return new Date(valueB).getTime() - new Date(valueA).getTime();
      }
    }

    return 0;
  });

  return sortedData;
};
