import { baseApi } from '@/services/base-api'
import { appReducer } from '@/store/app-reducer'
import { cardsListReducer } from '@/store/cards-list-reducer'
import { decksListReducer } from '@/store/decks-list-reducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
  reducer: {
    app: appReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    cardsList: cardsListReducer,
    decksList: decksListReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
