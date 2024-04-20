import { DecksList } from '@/pages/decks-list/decks-list'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  args: {},
  component: DecksList,
  tags: ['autodocs'],
  title: 'Pages/DecksList',
} satisfies Meta<typeof DecksList>

export default meta
type Story = StoryObj<typeof meta>
export const DecksListExample: Story = {
  args: {
    allItems: ['some', '25', '25.05.2025', 'Some'],

    isLoggedIn: true,
    myItems: ['some', '25', '25.05.2025', 'Some'],
  },
}
export const DecksListWithDropdownExample: Story = {
  args: {
    allItems: ['some', '25', '25.05.2025', 'Some'],

    isLoggedIn: true,
    myItems: ['some', '25', '25.05.2025', 'Some'],
  },
}
