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
    items: ['name', 'name', 'name', 'name'],
  },
}
export const TableMyPacks: Story = {
  args: {
    items: ['name', 'name', 'name', 'name', 'name', 'name', 'name', 'name', 'name'],
    myCards: true,
  },
}
