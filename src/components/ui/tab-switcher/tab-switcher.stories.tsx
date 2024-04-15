import { TabSwitcher } from '@/components/ui/tab-switcher/tab-switcher'
import { DecksTable } from '@/components/ui/table/decks-table/decks-table'
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
        <DecksTable items={['some', '25', '25.05.2025', 'Some']} />
      </>
    ),
    contentRight: (
      <>
        <DecksTable items={['some', '25', '25.05.2025', 'Some']} myCards />
      </>
    ),
  },
}
