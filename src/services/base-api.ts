import {
  CreateDeckArgs,
  DeckType,
  GetDeckById,
  GetDeckResponse,
  GetDecksArgs,
  GetMinMaxResponse,
} from '@/services/flashcards-type'
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
      createDeck: build.mutation<DeckType, CreateDeckArgs>({
        query: arg => {
          return {
            method: 'POST',
            params: arg ?? '',
            url: `v1/decks`,
          }
        },
      }),
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
            url: `v2/decks`,
          }
        },
      }),
      getMinMaxCards: build.query<GetMinMaxResponse, void>({
        query: () => {
          return {
            url: `v2/decks/min-max-cards`,
          }
        },
      }),
    }
  },
  reducerPath: 'baseApi',
})

export const {
  useCreateDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useGetMinMaxCardsQuery,
} = baseApi
