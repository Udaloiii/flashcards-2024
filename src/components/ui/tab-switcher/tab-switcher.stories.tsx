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
          <DecksTable
            items={[
              {
                author: {
                  id: 'asda',
                  name: 'Name',
                },
                cardsCount: 5,
                created: 'asd',
                id: 'asd',
                isPrivate: true,
                name: 'asdas',
                updated: 'asd',
                userId: 'asd',
              },
            ]}
          />
        </TabContent>
        <TabContent value={'dsa'}>
          <DecksTable
            items={[
              {
                author: {
                  id: 'asda',
                  name: 'Name',
                },
                cardsCount: 4,
                created: 'asd',
                id: 'asd',
                isPrivate: true,
                name: 'asdas',
                updated: 'asd',
                userId: 'asd',
              },
            ]}
          />
        </TabContent>
        <TabContent value={'aaa'}>
          <DecksTable
            items={[
              {
                author: {
                  id: 'asda',
                  name: 'Name',
                },
                cardsCount: 3,
                created: 'asd',
                id: 'asd',
                isPrivate: true,
                name: 'asdas',
                updated: 'asd',
                userId: 'asd',
              },
            ]}
          />
        </TabContent>
        <TabContent value={'dda'}>
          <DecksTable
            items={[
              {
                author: {
                  id: 'asda',
                  name: 'Name',
                },
                cardsCount: 10,
                created: 'asd',
                id: 'asd',
                isPrivate: true,
                name: 'asdas',
                updated: 'asd',
                userId: 'asd',
              },
            ]}
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
