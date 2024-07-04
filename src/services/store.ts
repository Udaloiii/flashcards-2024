import { baseApi } from '@/services/base-api'
import { appReducer } from '@/store/app-reducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
  reducer: {
    app: appReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
