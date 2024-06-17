import { baseQueryWithReauth } from '@/services/flashCardsBaseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Deck', 'Auth', 'Card'],
})
