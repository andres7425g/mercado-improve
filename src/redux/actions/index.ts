import axios from 'axios';
import { AppThunk } from '@redux/store';
import {
  FETCH_POSTS,
  FetchPostsAction,
  SET_LOADING,
  SET_SEARCH_KEY_WORD,
  SetLoadingAction,
  SetSearchKeyWordAction,
} from '@models/reduxActions.model';

export const fetchPosts =
  (searchWord: string): AppThunk =>
  async (dispatch) => {
    dispatch<SetLoadingAction>({ type: SET_LOADING, payload: true });

    const response = await axios.get(
      `http://localhost:4000/api/items?q=${searchWord}`,
    );

    dispatch<FetchPostsAction>({ type: FETCH_POSTS, payload: response.data });
    dispatch<SetLoadingAction>({ type: SET_LOADING, payload: false });
    return response.data;
  };

export const SetSearchKeyWord = (status: string): SetSearchKeyWordAction => ({
  type: SET_SEARCH_KEY_WORD,
  payload: status,
});
