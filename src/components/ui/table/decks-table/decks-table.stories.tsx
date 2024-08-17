import { DecksTable } from '@/components/ui/table/decks-table/decks-table'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: DecksTable,
  tags: ['autodocs'],
  title: 'Components/DecksTable',
} satisfies Meta<typeof DecksTable>

export default meta
type Story = StoryObj<typeof meta>

export const DecksTableExample: Story = {
  args: {
    items: [
      {
        author: {
          id: 'asda',
          name: 'Name',
        },
        cardsCount: 5,
        created: 'asd',
        id: 'asd',
        isPrivate: true,
        name: 'asdas',
        updated: 'asd',
        userId: 'asd',
      },
    ],
  },
}
