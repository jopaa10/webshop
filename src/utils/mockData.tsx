import { CartData } from "@/types/cart";

export const MOCK_DATA: CartData[] = [
  {
    id: 1,
    title: "Samsung Galaxy s10",
    price: 499.99,
    quantity: 1,
    image: "/images/s10.jpg",
    detail: "New smartphone",
    brand: "samsung",
    ram: "6 gb",
  },
  {
    id: 2,
    title: "Samsung Galaxy s21",
    price: 599.99,
    quantity: 1,
    image: "/images/s20.jpeg",
    detail: "New smartphone",
    brand: "samsung",
    ram: "4 gb",
  },
  {
    id: 3,
    title: "Samsung Galaxy s20",
    price: 299.99,
    quantity: 1,
    image: "/images/s21.webp",
    detail: "New smartphone",
    brand: "samsung",
    ram: "6 gb",
  },
  {
    id: 4,
    title: "iPhone 13",
    price: 899.99,
    quantity: 1,
    image: "/images/iphone13.jpg",
    detail: "New smartphone",
    brand: "iphone",
    ram: "8 gb",
  },
  {
    id: 5,
    title: "iPhone 14 Pro",
    price: 599.99,
    quantity: 1,
    image: "/images/iphone14pro.jpeg",
    detail: "New smartphone",
    brand: "iphone",
    ram: "8 gb",
  },
];

export const getCardById = (id: number | string) => {
  return MOCK_DATA.find((item: CartData) => item.id === id);
};

export const filterDataByProperty = <T extends keyof CartData>(
  property: T | undefined,
  value: CartData[T] | undefined
): CartData[] => {
  if (!property) {
    return [];
  }
  return MOCK_DATA.filter((item: CartData) => item[property] === value);
};

export const sortDataAlphabetic = () => {
  return MOCK_DATA.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
};
