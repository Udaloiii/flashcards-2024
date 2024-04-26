import { TabContent } from '@/components/ui/tab-switcher/tab-content'
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
    children: (
      <>
        <TabContent value={'asd'}>
          <DecksTable items={['some', '25', '25.05.2025', 'Some']} myCards />
        </TabContent>
        <TabContent value={'dsa'}>
          <DecksTable items={['some', '25', '25.05.2025', 'Some']} />
        </TabContent>
        <TabContent value={'aaa'}>
          <DecksTable
            items={[
              'some',
              '25',
              '25.05.2025',
              'Some',
              'some',
              '25',
              '25.05.2025',
              'Some',
              'some',
              '25',
              '25.05.2025',
              'Some',
              'some',
              '25',
              '25.05.2025',
              'Some',
            ]}
          />
        </TabContent>
        <TabContent value={'dda'}>
          <DecksTable
            items={[
              'some',
              '25',
              '25.05.2025',
              'Some',
              'some',
              '25',
              '25.05.2025',
              'Some',
              'some',
              '25',
              '25.05.2025',
              'Some',
              'some',
              '25',
              '25.05.2025',
              'Some',
              'some',
              '25',
              '25.05.2025',
              'Some',
              'some',
              '25',
              '25.05.2025',
              'Some',
              'some',
              '25',
              '25.05.2025',
              'Some',
              'some',
              '25',
              '25.05.2025',
              'Some',
              'some',
              '25',
              '25.05.2025',
              'Some',
              'some',
              '25',
              '25.05.2025',
              'Some',
            ]}
            myCards
          />
        </TabContent>
      </>
    ),
    defaultValue: 'asd',
    trigger: [
      { title: '5', value: 'asd' },
      { title: '10', value: 'dsa' },
      { title: '15', value: 'aaa' },
      { title: '20', value: 'dda' },
    ],
  },
}
