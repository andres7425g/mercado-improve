import {
  configureStore,
  ThunkAction,
  Action,
  UnknownAction,
} from '@reduxjs/toolkit';
import rootReducer from '@redux/reducers';

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  Action<string>,
  UnknownAction
>;

export default store;
