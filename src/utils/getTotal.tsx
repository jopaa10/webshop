import { CartData } from "@/types/cart";

export const getTotal = (cart: CartData[]) => {
  let subTotalCost = 0;
  let totalCost = 0;

  for (const item of cart) {
    subTotalCost += item.quantity * item.price;
    totalCost = subTotalCost + subTotalCost * 0.24;
  }

  return { subTotalCost, totalCost };
};
