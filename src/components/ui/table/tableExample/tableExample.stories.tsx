import { TableExample } from '@/components/ui/table/tableExample/tableExample'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: TableExample,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof TableExample>

export default meta
type Story = StoryObj<typeof meta>

export const TableExam: Story = {
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
