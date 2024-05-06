import { ResultQueryResponse } from './QueryResult.model';

export const FETCH_POSTS = 'FETCH_POSTS';
export const SET_SEARCH_KEY_WORD = 'SET_SEARCH_KEY_WORD';
export const SET_LOADING = 'SET_LOADING';

export interface FetchPostsAction {
  type: typeof FETCH_POSTS;
  payload: ResultQueryResponse;
  [key: string]: string | ResultQueryResponse;
}

export interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
  [key: string]: string | boolean;
}

export interface SetSearchKeyWordAction {
  type: typeof SET_SEARCH_KEY_WORD;
  payload: string;
  [key: string]: string;
}
