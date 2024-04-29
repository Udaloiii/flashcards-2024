import { Layout } from '@/components/layout/layout'
import { Page } from '@/components/page/page'
import { LoginForm } from '@/pages/auth/login-form'
import { SignUpForm } from '@/pages/auth/sigh-up-form'
import { DecksList } from '@/pages/decks-list'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Layout,
  tags: ['autodocs'],
  title: 'Components/Layout',
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
  },
}

export const LayoutLoginExample: Story = {
  args: {
    children: (
      <Page>
        <LoginForm />
      </Page>
    ),
  },
}

export const LayoutSignUpExample: Story = {
  args: {
    children: (
      <Page>
        <SignUpForm />
      </Page>
    ),
  },
}
