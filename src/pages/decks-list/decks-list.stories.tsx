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
    currentPage: 1,

    items: [
      'some',
      '25',
      '25.05.2025',
      'Some',
      'some',
      '25',
      '25.05.2025',
      'Some',
      'some',
      '25',
      '25.05.2025',
      'Some',
      'some',
      '25',
      '25.05.2025',
      'Some',
    ],
    onPageChange: () => {},
    pageSize: 5,

    siblingCount: 2,
    totalCount: 22,
  },
}
export const DecksListWithDropdownExample: Story = {
  args: {
    currentPage: 1,
    items: ['some', '25', '25.05.2025', 'Some'],
    onPageChange: () => {},
    pageSize: 5,

    siblingCount: 2,
    totalCount: 22,
  },
}
