import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type InitialState = {
  currPage: number
  pageSize: number
}
const slice = createSlice({
  initialState: {
    currPage: 1,
    pageSize: 10,
  } as InitialState,
  name: 'cards-list',
  reducers: {
    setCurrPageCards: (state, action: PayloadAction<{ currPage: number }>) => {
      state.currPage = action.payload.currPage
    },
    setPageSizeCards: (state, action: PayloadAction<{ pageSize: number }>) => {
      state.pageSize = action.payload.pageSize
    },
  },
})

export const cardsListReducer = slice.reducer
export const { setCurrPageCards, setPageSizeCards } = slice.actions
