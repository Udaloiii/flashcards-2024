import { MyDeck } from '@/pages/my-deck/my-deck'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: MyDeck,
  tags: ['autodocs'],
  title: 'Pages/MyDeck',
} satisfies Meta<typeof MyDeck>

export default meta
type Story = StoryObj<typeof meta>

export const MyDeckExample: Story = {
  args: {
    currentPage: 1,
    // items: ['some', '25', '25.05.2025', 'Some'],
    onPageChange: () => {},
    pageSize: 5,

    siblingCount: 2,
    totalCount: 22,
  },
}
