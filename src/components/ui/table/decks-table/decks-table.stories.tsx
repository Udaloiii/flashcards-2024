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

export const TableExample: Story = {
  args: {
    items: ['name 1', 'name 2', 'name 3', 'name 4', 'name 5', 'name 6', 'name 7', 'name 8'],
  },
}
