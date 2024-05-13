import { baseApi } from '@/services/base-api'
import {
  CreateDeckArgs,
  DeckType,
  GetDeckById,
  GetDeckResponse,
  GetDecksArgs,
  GetMinMaxResponse,
} from '@/services/flashcards-type'

const decksService = baseApi.injectEndpoints({
  endpoints: build => {
    return {
      createDeck: build.mutation<DeckType, CreateDeckArgs>({
        query: arg => {
          return {
            body: arg,
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
    }
  },
})

export const {
  useCreateDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useGetMinMaxCardsQuery,
} = decksService
