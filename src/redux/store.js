import {
  // combineSlices,
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { eventsApi } from './eventSlice';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  [eventsApi.reducerPath]: eventsApi.reducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    eventsApi.middleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);
