import { CardData } from "@/types/card";

export const MOCK_DATA = [
  {
    id: 1,
    title: "Samsung Galaxy s10",
    price: 499.99,
    quantity: 1,
    image: "/images/s10.jpg",
    detail: "New smartphone",
  },
  {
    id: 2,
    title: "Samsung Galaxy s21",
    price: 599.99,
    quantity: 1,
    image: "/images/s20.jpeg",
    detail: "New smartphone",
  },
  {
    id: 3,
    title: "Samsung Galaxy s20",
    price: 299.99,
    quantity: 1,
    image: "/images/s21.webp",
    detail: "New smartphone",
  },
];

export const getCardById = (id: number) => {
  return MOCK_DATA.find((item: CardData) => item.id === id);
};
