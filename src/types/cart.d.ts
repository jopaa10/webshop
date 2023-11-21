export interface CartData {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  detail: string;
}

export interface Card {
  card: CartData;
}
