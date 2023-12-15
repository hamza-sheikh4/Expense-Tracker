import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { expenseApi } from './Slice/apiSlice';

const store = configureStore({
    reducer: {
      [expenseApi.reducerPath]: expenseApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(expenseApi.middleware),
    // middleware: (xys) => 
    //   xys().concat(expenseApi.middleware)
    
      
  });

setupListeners(store.dispatch);
export default store;
