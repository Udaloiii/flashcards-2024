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
    items: ['name 1', 'name 2', 'name 3', 'name 4', 'name 5', 'name 6', 'name 7', 'name 8'],
    ratingValue: 4,
  },
}
