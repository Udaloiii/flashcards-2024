import { baseApi } from '@/services/base-api'
import { LoginResponse, LoginType, SignUpArg, User } from '@/services/flashcards-type'

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
      logIn: build.mutation<LoginResponse, LoginType>({
        invalidatesTags: ['Auth'],
        async onQueryStarted(_, { queryFulfilled }) {
          const { data } = await queryFulfilled

          if (!data) {
            return
          }
          localStorage.setItem('accessToken', data.accessToken)
          localStorage.setItem('refreshToken', data.refreshToken)
        },
        query: arg => {
          return {
            body: arg,
            method: 'POST',
            url: '/v1/auth/login',
          }
        },
      }),
      logOut: build.mutation<void, void>({
        invalidatesTags: ['Auth'],
        query: () => {
          return {
            method: 'POST',
            url: '/v1/auth/logout',
          }
        },
      }),
      recoverPassword: build.mutation<void, { email: string; html?: string; subject?: string }>({
        query: arg => {
          return {
            body: arg,
            method: 'POST',
            url: `/v1/auth/recover-password`,
          }
        },
      }),
      refreshToken: build.mutation<void, void>({
        invalidatesTags: ['Auth'],
        query: () => {
          return {
            method: 'POST',
            url: `/v2/auth/refresh-token`,
          }
        },
      }),
      resendEmail: build.mutation<void, { html?: string; subject?: string; userId: string }>({
        query: arg => {
          return {
            body: arg,
            method: 'POST',
            url: '/v1/auth/resend-verification-email',
          }
        },
      }),
      resetPassword: build.mutation<void, { body: { password: string }; token: string }>({
        query: arg => {
          return {
            body: arg.body,
            method: 'POST',
            url: `/v1/auth/reset-password/${arg.token}`,
          }
        },
      }),
      signUp: build.mutation<User, SignUpArg>({
        query: arg => {
          return {
            body: arg,
            method: 'POST',
            url: `/v1/auth/sign-up`,
          }
        },
      }),
      updateUser: build.mutation<User, { avatar?: string; name: string }>({
        invalidatesTags: ['Auth'],
        query: arg => {
          return {
            body: arg,
            method: 'PATCH',
            url: `/v1/auth/me`,
          }
        },
      }),
      verifyEmail: build.mutation<void, { code: string }>({
        query: arg => {
          return {
            body: arg,
            method: 'POST',
            url: `/v1/auth/verify-email`,
          }
        },
      }),
    }
  },
})

export const {
  useAuthMeQuery,
  useLogInMutation,
  useLogOutMutation,
  useRecoverPasswordMutation,
  useRefreshTokenMutation,
  useResendEmailMutation,
  useResetPasswordMutation,
  useSignUpMutation,
  useUpdateUserMutation,
  useVerifyEmailMutation,
} = authService
