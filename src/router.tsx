import { useSelector } from 'react-redux'
import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Layout } from '@/components/layout'
import { Page } from '@/components/page/page'
import { Snackbar } from '@/components/ui/snackbar/snackbar'
import { LoginForm } from '@/pages/auth/login-form'
import { Deck } from '@/pages/deck'
import { DecksList } from '@/pages/decks-list'
import { EditProfile } from '@/pages/edit-profile'
import { LearnPage } from '@/pages/learn-page/learn-page'
import { PageNotFound } from '@/pages/page-not-found'
import { useAuthMeQuery } from '@/services/auth.service'
import { RootState } from '@/services/store'

import { Loader } from './components/ui/loader/loader'

const privateRoute: RouteObject[] = [
  {
    element: (
      <Page>
        <DecksList />
      </Page>
    ),
    path: '/',
  },
  {
    element: (
      <Page>
        <EditProfile />
      </Page>
    ),
    path: '/profile',
  },
  {
    element: (
      <Page>
        <Deck />
      </Page>
    ),
    path: '/:id',
  },
  {
    element: (
      <Page>
        <LearnPage />
      </Page>
    ),
    path: '/:id/learn',
  },
]
const publicRoute: RouteObject[] = [
  {
    element: (
      <Layout>
        <LoginForm />
      </Layout>
    ),
    path: '/login',
  },
  {
    element: <PageNotFound />,
    path: '/*',
  },
]

const PrivateRoutes = () => {
  const isLoading = useSelector<RootState, boolean>(state => state.app.isLoading)
  const token = localStorage.getItem('accessToken') // для того, чтобы не слать me-запрос, если нет токена
  const { data, isLoading: authIsLoading } = useAuthMeQuery(undefined, {
    skip: !token,
  })
  const accessToken = localStorage.getItem('accessToken')

  if (authIsLoading) {
    return null
  }

  return accessToken ? (
    <Layout email={data?.email} icon={data?.avatar} isLoggedIn userName={data?.name}>
      {isLoading && <Loader />}
      <Snackbar />
      <Outlet />
    </Layout>
  ) : (
    <Navigate to={'/login'} />
  )
}

export const route = createBrowserRouter([
  {
    children: privateRoute,
    element: <PrivateRoutes />,
  },
  ...publicRoute,
])

export const Router = () => {
  return <RouterProvider router={route} />
}
