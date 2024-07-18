import { Deck } from '@/pages/deck/deck'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Deck,
  tags: ['autodocs'],
  title: 'Pages/Deck',
} satisfies Meta<typeof Deck>

export default meta
type Story = StoryObj<typeof meta>

export const DeckExample: Story = {
  args: {
    // currentPage: 1,
    // deckTitle: 'Title',
    // onPageChange: () => {},
    //
    // pageSize: 5,
    // siblingCount: 2,
    // totalCount: 22,
  },
}
