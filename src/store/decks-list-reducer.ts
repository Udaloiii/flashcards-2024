import { OrderByDecksSort } from '@/services/flashcards-type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type InitialState = {
  cardsCount: null | number[]
  currPage: number
  pageSize: number
  sortBy: OrderByDecksSort
}
const slice = createSlice({
  initialState: {
    cardsCount: null,
    currPage: 1,
    pageSize: 10,
    sortBy: 'updated-desc',
  } as InitialState,
  name: 'decks-list',
  reducers: {
    setCardsCount: (state, action: PayloadAction<{ cardsCount: number[] }>) => {
      state.cardsCount = action.payload.cardsCount
    },
    setCurrPage: (state, action: PayloadAction<{ currPage: number }>) => {
      state.currPage = action.payload.currPage
    },
    setOrderByDecks: (state, action: PayloadAction<{ orderBy: OrderByDecksSort }>) => {
      state.sortBy = action.payload.orderBy
    },
    setPageSize: (state, action: PayloadAction<{ pageSize: number }>) => {
      state.pageSize = action.payload.pageSize
    },
  },
})

export const decksListReducer = slice.reducer
export const { setCardsCount, setCurrPage, setOrderByDecks, setPageSize } = slice.actions
