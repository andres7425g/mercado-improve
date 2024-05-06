import { State } from '@models/reduxState.model';

export const initialState: State = {
  posts: {
    author: {
      name: '',
      lastname: '',
    },
    categories: ['Celulares y Smartphones'],
    items: [],
  },
  searchKeyWord: '',
  loading: false,
};
