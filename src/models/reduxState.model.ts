import { ResultQueryResponse } from './QueryResult.model';

export interface State {
  posts: ResultQueryResponse;
  searchKeyWord: string;
  loading: boolean;
}
