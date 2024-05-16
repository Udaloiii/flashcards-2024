import { baseApi } from '@/services/base-api'
import { LoginType, User } from '@/services/flashcards-type'

export const authService = baseApi.injectEndpoints({
  endpoints: build => {
    return {
      authMe: build.query<User, void>({
        providesTags: ['Auth'],
        query: () => {
          return {
            url: `/v1/auth/me`,
          }
        },
      }),
      logIn: build.mutation<void, LoginType>({
        query: body => {
          return {
            body: body,
            method: 'POST',
            url: '/v1/auth/login',
          }
        },
      }),
    }
  },
})

export const { useAuthMeQuery, useLogInMutation } = authService
