import { Table } from '@/components/ui/table/table'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const TableExample: Story = {
  args: {
    items: ['name 1', 'name 2', 'name 3', 'name 4'],
  },
}
export const TableMyPacks: Story = {
  args: {
    items: [
      'name 1 ',
      'name 2',
      'name 3',
      'name 4',
      'name 5',
      'name 6',
      'name 7',
      'name 8',
      'name 9',
    ],
    myCards: true,
  },
}
