import { baseApi } from '@/services/base-api'
import {
  CreateDeckArgs,
  DeckType,
  GetDeckById,
  GetDeckResponse,
  GetDecksArgs,
  GetMinMaxResponse,
  UpdateDeckArgs,
} from '@/services/flashcards-type'

const decksService = baseApi.injectEndpoints({
  endpoints: build => {
    return {
      createDeck: build.mutation<DeckType, CreateDeckArgs>({
        invalidatesTags: ['Deck'],
        query: arg => {
          return {
            body: arg,
            method: 'POST',
            params: arg ?? '',
            url: `v1/decks`,
          }
        },
      }),
      deleteDeck: build.mutation<Omit<DeckType, 'author'>, { id: string }>({
        invalidatesTags: ['Deck'],
        query: ({ id }) => {
          return {
            method: 'DELETE',
            url: `v1/decks/${id}`,
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
        providesTags: ['Deck'],
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
      updateDeck: build.mutation<DeckType, { data: UpdateDeckArgs; id: string }>({
        invalidatesTags: ['Deck'],
        query: ({ data, id }) => {
          return {
            body: data,
            method: 'POST',
            url: `v1/decks/${id}`,
          }
        },
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useGetMinMaxCardsQuery,
} = decksService
