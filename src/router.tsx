import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Layout } from '@/components/layout'
import { Page } from '@/components/page/page'
import { LoginForm } from '@/pages/auth/login-form'
import { Deck } from '@/pages/deck'
import { DecksList } from '@/pages/decks-list'
import { EditProfile } from '@/pages/edit-profile'
import { PageNotFound } from '@/pages/page-not-found'
import { useAuthMeQuery } from '@/services/auth.service'

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
  const { data, isError, isLoading } = useAuthMeQuery()

  if (isLoading) {
    return null
  }

  return !isError ? (
    <Layout email={data?.email} icon={data?.avatar} isLoggedIn userName={data?.name}>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to={'/login'} />
  )
}

const route = createBrowserRouter([
  {
    children: privateRoute,
    element: <PrivateRoutes />,
  },
  ...publicRoute,
])

export const Router = () => {
  return <RouterProvider router={route} />
}
