import { Layout } from '@/components/layout/layout'
import { Page } from '@/components/page/page'
import { LoginForm } from '@/pages/auth/login-form'
import { SignUpForm } from '@/pages/auth/sigh-up-form'
import { Deck } from '@/pages/deck/deck'
import { DecksList } from '@/pages/decks-list'
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

export const MyDecksPage: Story = {
  args: {
    children: (
      <Page>
        <DecksList
          currentPage={1}
          items={['asd', 'asdd', 'aqw']}
          myDecks
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
export const OtherDecksPage: Story = {
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

export const MyDeckExample: Story = {
  args: {
    children: (
      <Page>
        <Deck
          currentPage={1}
          deckTitle={'My Deck'}
          myDeck
          onPageChange={() => {}}
          pageSize={5}
          siblingCount={2}
          totalCount={20}
        />
      </Page>
    ),
    isLoggedIn: true,
    userName: 'Eugene',
  },
}

export const OtherDeckExample: Story = {
  args: {
    children: (
      <Page>
        <Deck
          currentPage={1}
          deckTitle={'Friend`s Deck'}
          onPageChange={() => {}}
          pageSize={5}
          siblingCount={2}
          totalCount={20}
        />
      </Page>
    ),
    isLoggedIn: true,
    userName: 'Eugene',
  },
}
