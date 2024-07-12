import { baseApi } from '@/services/base-api'
import { GetCardResponse, UpdateCardRequest } from '@/services/flashcards-type'

export const cardsService = baseApi.injectEndpoints({
  endpoints: build => {
    return {
      deleteCard: build.mutation<void, { id: string }>({
        invalidatesTags: ['Card', 'Deck'],
        query: ({ id }) => {
          return {
            method: 'DELETE',
            url: `/v1/cards/${id}`,
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
        invalidatesTags: ['Card', 'Deck'],
        query: arg => {
          const formData = new FormData()

          if (arg.body.answer) {
            formData.append('answer', arg.body.answer)
          }
          if (arg.body.question) {
            formData.append('question', arg.body.question)
          }

          if (arg.body.answerImg) {
            formData.append('answerImg', arg.body.answerImg)
          }

          if (arg.body.questionImg) {
            formData.append('questionImg', arg.body.questionImg)
          }

          return {
            body: formData,
            method: 'PATCH',
            url: `/v1/cards/${arg.id}`,
          }
        },
      }),
    }
  },
})

export const { useDeleteCardMutation, useGetCardsQuery, useUpdateCardMutation } = cardsService
