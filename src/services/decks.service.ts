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
} from '@/services/flashcards-type'

const decksService = baseApi.injectEndpoints({
  endpoints: build => {
    return {
      createDeck: build.mutation<DeckType, CreateDeckArgs>({
        invalidatesTags: ['Deck'],
        query: arg => {
          const formData = new FormData()

          formData.append('name', arg.name)
          if (arg.isPrivate) {
            formData.append('isPrivate', arg.isPrivate.toString())
          }
          if (arg.cover) {
            formData.append('cover', arg.cover)
          } else if (arg.cover === null) {
            formData.append('cover', '')
          }

          return {
            body: formData,
            method: 'POST',
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
      updateDeck: build.mutation<DeckType, { data: CreateDeckArgs; id: string }>({
        invalidatesTags: ['Deck'],
        query: ({ data, id }) => {
          const formData = new FormData()

          if (data.name) {
            formData.append('name', data.name)
          }

          if (data.isPrivate) {
            formData.append('isPrivate', data.isPrivate.toString())
          }
          if (data.cover) {
            formData.append('cover', data.cover)
          } else if (data.cover === null) {
            formData.append('cover', '')
          }

          return {
            body: formData,
            method: 'PATCH',
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
