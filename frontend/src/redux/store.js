import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { coloshopApi } from './Slice'

export const store = configureStore({
  reducer: {
    [coloshopApi.reducerPath]: coloshopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coloshopApi.middleware),
})

setupListeners(store.dispatch)