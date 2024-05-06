import { Price } from './price.model';

export interface Item {
  initial_quantity: number;
  currency_id: any;
  id: string;
  title: string;
  price: Price;
  picture: string;
  pictures: any;
  condition: string;
  shipping: any;
  free_shipping: boolean;
  sold_quantity: number;
  descriptions: string | string[];
  map(
    arg0: (item: Item) => {
      id: string;
      title: string;
      price: { currency: string; amount: number; decimals: number };
      picture: string;
      condition: string;
      free_shipping: boolean;
      sold_quantity: number;
      description: string;
    },
  ): Item;
}
