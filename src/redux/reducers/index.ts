import {
  FETCH_POSTS,
  FetchPostsAction,
  SET_LOADING,
  SET_SEARCH_KEY_WORD,
  SetLoadingAction,
  SetSearchKeyWordAction,
} from '@models/reduxActions.model';
import { State } from '@models/reduxState.model';
import { initialState } from './initiState';

type Action = FetchPostsAction | SetSearchKeyWordAction | SetLoadingAction;

export default (state = initialState, action: Action): State => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    case SET_SEARCH_KEY_WORD:
      return { ...state, searchKeyWord: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
