import { Author } from './author.model';
import { Price } from './price.model';

export interface ResultQueryResponse {
  author: Author;
  categories: string[];
  items: Result[];
}

export interface Result {
  thumbnail: string;
  currency_id: string;
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  category_id: string;
  shipping: any;
  seller: seller;
  map(
    arg0: (result: Result) => {
      id: string;
      title: string;
      price: { currency: string; amount: number; decimals: number };
      picture: string;
      condition: string;
      free_shipping: boolean;
    },
  ): Result;
}

interface seller {
  id: number;
  nickname: string;
}
