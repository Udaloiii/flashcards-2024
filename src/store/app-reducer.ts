import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type InitialAppState = {
  error: null | string
  infoMessage: null | string
  isLoading: boolean
}
const slice = createSlice({
  initialState: {
    error: null,
    infoMessage: null,
    isLoading: false,
  } as InitialAppState,
  name: 'app',
  reducers: {
    setError: (state, action: PayloadAction<{ error: null | string }>) => {
      state.error = action.payload.error
    },
    setInfoMessage: (state, action: PayloadAction<{ message: null | string }>) => {
      state.infoMessage = action.payload.message
    },
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading
    },
  },
})

export const appReducer = slice.reducer
export const { setError, setInfoMessage, setIsLoading } = slice.actions
