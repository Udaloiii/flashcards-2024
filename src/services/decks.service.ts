import { baseApi } from '@/services/base-api'
import {
  CreateDeckArgs,
  DeckType,
  GetCardResponse,
  GetCardsInDeckArgs,
  GetDeckById,
  GetDeckResponse,
  GetDecksArgs,
  GetMinMaxResponse,
  Pagination,
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
            // params: arg ?? {},
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
      getCardsInDeck: build.query<
        { items: GetCardResponse[] } & { pagination: Pagination },
        { body?: GetCardsInDeckArgs; id: string }
      >({
        providesTags: ['Deck'],
        query: arg => {
          return {
            params: arg.body ?? {},
            url: `v1/decks/${arg.id}/cards`,
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
        providesTags: ['Deck'],
        query: () => {
          return {
            url: `v2/decks/min-max-cards`,
          }
        },
      }),
      learnCard: build.query<GetCardResponse, { id: string; previousCardId?: string }>({
        providesTags: ['Deck'],
        query: arg => {
          return {
            params: arg.previousCardId ?? {},
            url: `/v1/decks/${arg.id}/learn`,
          }
        },
      }),
      saveGradeCard: build.mutation<GetCardResponse, { cardId: string; grade: number }>({
        invalidatesTags: ['Deck'],
        query: arg => {
          return {
            body: arg,
            method: 'POST',
            // params: arg,
            url: `/v1/decks/${arg.cardId}/learn`,
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
  useDeleteDeckMutation,
  useGetCardsInDeckQuery,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useGetMinMaxCardsQuery,
  useLearnCardQuery,
  useSaveGradeCardMutation,
  useUpdateDeckMutation,
} = decksService
