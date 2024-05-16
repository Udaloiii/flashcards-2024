import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    // prepareHeaders: headers => {
    //   headers.append('x-auth-skip', 'true')
    // }, // убрал, потому что сделал реальную авторизацию
  }),
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Deck', 'Auth'],
})
