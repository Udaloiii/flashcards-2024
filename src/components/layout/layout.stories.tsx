import { Layout } from '@/components/layout/layout'
import { DecksList } from '@/pages/decks-list'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Layout,
  tags: ['autodocs'],
  title: 'Components/Layout',
} satisfies Meta<typeof Layout>

export default meta
type Story = StoryObj<typeof meta>

export const LayoutExample: Story = {
  args: {
    children: (
      <DecksList
        currentPage={1}
        items={['asd', 'asdd', 'aqw']}
        onPageChange={() => {}}
        pageSize={5}
        siblingCount={2}
        totalCount={22}
      />
    ),
  },
}
