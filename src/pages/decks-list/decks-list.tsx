import Delete from '@/assets/logo/delete'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/ui/header'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher } from '@/components/ui/tab-switcher'
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
            contentLeft={<DecksTable items={allItems} />}
            contentRight={<DecksTable items={myItems} myCards />}
          />
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
