import { baseApi } from '@/services/base-api'
import { GetCardResponse, UpdateCardRequest } from '@/services/flashcards-type'

export const cardsService = baseApi.injectEndpoints({
  endpoints: build => {
    return {
      deleteCard: build.mutation<void, { id: string }>({
        invalidatesTags: ['Card'],
        query: ({ id }) => {
          return {
            method: 'DELETE',
            url: `/v1/users/${id}`,
          }
        },
      }),
      getCards: build.query<GetCardResponse, { id: string }>({
        providesTags: ['Card'],
        query: ({ id }) => {
          return {
            url: `/v1/cards/${id}`,
          }
        },
      }),
      updateCard: build.mutation<GetCardResponse, { body: UpdateCardRequest; id: string }>({
        invalidatesTags: ['Card'],
        query: arg => {
          return {
            body: arg.body,
            method: 'POST',
            url: `/v1/cards/${arg.id}`,
          }
        },
      }),
    }
  },
})

export const { useDeleteCardMutation, useGetCardsQuery, useUpdateCardMutation } = cardsService
