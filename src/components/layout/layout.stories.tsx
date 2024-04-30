import { Layout } from '@/components/layout/layout'
import { Page } from '@/components/page/page'
import { LoginForm } from '@/pages/auth/login-form'
import { SignUpForm } from '@/pages/auth/sigh-up-form'
import { DecksList } from '@/pages/decks-list'
import { MyDeck } from '@/pages/my-deck/my-deck'
import { PageNotFound } from '@/pages/page-not-found/page-not-found'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Layout,
  tags: ['autodocs'],
  title: 'LAYOUT/Layout',
} satisfies Meta<typeof Layout>

export default meta
type Story = StoryObj<typeof meta>

export const LayoutExample: Story = {
  args: {
    children: (
      <Page>
        <DecksList
          currentPage={1}
          items={['asd', 'asdd', 'aqw']}
          onPageChange={() => {}}
          pageSize={5}
          siblingCount={2}
          totalCount={22}
        />
      </Page>
    ),
    isLoggedIn: true,
    userName: 'Eugene',
  },
}

export const LayoutLoginExample: Story = {
  args: {
    children: (
      <Page>
        <LoginForm />
      </Page>
    ),
    isLoggedIn: false,
  },
}

export const LayoutSignUpExample: Story = {
  args: {
    children: (
      <Page>
        <SignUpForm />
      </Page>
    ),
    isLoggedIn: false,
  },
}

export const LayoutErrorExample: Story = {
  args: {
    children: (
      <Page>
        <PageNotFound />
      </Page>
    ),
    isLoggedIn: true,
  },
}

export const LayoutMyDeckExample: Story = {
  args: {
    children: (
      <Page>
        <MyDeck
          currentPage={1}
          onPageChange={() => {}}
          pageSize={5}
          siblingCount={2}
          totalCount={20}
        />
      </Page>
    ),
    isLoggedIn: true,
  },
}
