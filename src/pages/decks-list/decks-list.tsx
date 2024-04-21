import Delete from '@/assets/logo/delete'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/ui/header'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher } from '@/components/ui/tab-switcher'
import { TabContent } from '@/components/ui/tab-switcher/tab-content/tab-content'
import { DecksTable } from '@/components/ui/table/decks-table/decks-table'
import { Textfield } from '@/components/ui/textfield'
import { Typography } from '@/components/ui/typography'

import s from './decks-list.module.scss'

type DecksListProps = {
  allItems: string[]
  isLoggedIn?: boolean
  myItems: string[]
}
export const DecksList = ({ allItems, isLoggedIn, myItems }: DecksListProps) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <div className={s.container}>
        <div className={s.titleBlock}>
          <Typography as={'h1'} variant={'h1'}>
            Decks list
          </Typography>
          <Button>
            <Typography variant={'subtitle2'}>Add New Deck</Typography>
          </Button>
        </div>
        <div className={s.changeCardBlock}>
          <Textfield className={s.textfield} variant={'search'} />
          <TabSwitcher
            defaultValue={'all card'}
            trigger={[
              { title: 'All Card', value: 'all card' },
              { title: 'My Card', value: 'my card' },
            ]}
          >
            <TabContent value={'all card'}>
              <DecksTable className={s.tabContent} items={allItems} />
            </TabContent>
            <TabContent value={'my card'}>
              <DecksTable className={s.tabContent} items={myItems} myCards />
            </TabContent>
          </TabSwitcher>
          <Slider value={[0, 20]} />
          <Button className={s.clearButton} variant={'secondary'}>
            <Delete />
            <Typography variant={'subtitle2'}>Clear Filter</Typography>
          </Button>
        </div>
      </div>
    </div>
  )
}
