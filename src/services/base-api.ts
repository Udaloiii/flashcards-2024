import { DeckType, GetDeckById, GetDeckResponse, GetDecksArgs } from '@/services/flashcards-type'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: build => {
    return {
      getDeckById: build.query<DeckType, GetDeckById>({
        query: ({ id }) => {
          return {
            url: `v1/decks/${id}`,
          }
        },
      }),
      getDecks: build.query<GetDeckResponse, GetDecksArgs | void>({
        query: arg => {
          return {
            params: arg ?? {},
            url: `v1/decks`,
          }
        },
      }),
    }
  },
  reducerPath: 'baseApi',
})

export const { useGetDeckByIdQuery, useGetDecksQuery } = baseApi
