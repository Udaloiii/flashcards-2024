import { Pagination } from '@/components/ui/pagination/pagination'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const PaginationExample: Story = {
  args: {
    currentPage: 1,
    pageSize: 3,
    siblingCount: 2,
    totalCount: 50,
  },
}

export const PaginationExample2: Story = {
  args: {
    currentPage: 5,
    pageSize: 10,
    siblingCount: 3,
    totalCount: 150,
  },
}
