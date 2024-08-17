import { CardsTable } from '@/components/ui/table/cards-table/cards-table'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: CardsTable,
  tags: ['autodocs'],
  title: 'Components/CardsTable',
} satisfies Meta<typeof CardsTable>

export default meta
type Story = StoryObj<typeof meta>

export const CardsTableExample: Story = {
  args: {
    items: [
      {
        answer: 'sdf',
        answerImg: 'sdfsdf',
        answerVideo: 'sdfsdf',
        created: 'sdfsdf',
        deckId: 'sdfsdf',
        grade: 5,
        id: 'sdfsdf',
        question: 'sdfsdfsd',
        questionImg: 'sdfsdf',
        questionVideo: 'sdf',
        shots: 5,
        updated: 'sdf',
        userId: 'sdf',
      },
    ],
  },
}
