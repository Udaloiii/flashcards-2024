import { OrderByCardsSort } from '@/services/flashcards-type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type InitialState = {
  currPage: number
  pageSize: number
  sortBy: OrderByCardsSort
}
const slice = createSlice({
  initialState: {
    currPage: 1,
    pageSize: 10,
    sortBy: 'updated-desc',
  } as InitialState,
  name: 'cards-list',
  reducers: {
    setCurrPageCards: (state, action: PayloadAction<{ currPage: number }>) => {
      state.currPage = action.payload.currPage
    },
    setOrderByCards: (state, action: PayloadAction<{ orderBy: OrderByCardsSort }>) => {
      state.sortBy = action.payload.orderBy
    },
    setPageSizeCards: (state, action: PayloadAction<{ pageSize: number }>) => {
      state.pageSize = action.payload.pageSize
    },
  },
})

export const cardsListReducer = slice.reducer
export const { setCurrPageCards, setOrderByCards, setPageSizeCards } = slice.actions
