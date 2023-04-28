// eslint-disable-next-line no-unused-vars
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { articleAPI } from './article';
export const store = configureStore({
    reducer: {
      [articleAPI.reducerPath]: articleAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(articleAPI.middleware),
  });
  
  setupListeners(store.dispatch);