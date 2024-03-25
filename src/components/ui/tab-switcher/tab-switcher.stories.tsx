import { TabSwitcher } from '@/components/ui/tab-switcher/tab-switcher'
import { Table } from '@/components/ui/table'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const TabSwitcherExample: Story = {
  args: {
    contentLeft: (
      <>
        <Table items={['some', 'some', 'some', 'some']} />
      </>
    ),
    contentRight: (
      <>
        <Table items={['some', 'some', 'some', 'some']} myCards />
      </>
    ),
  },
}
