import { ReactNode } from 'react'

import { TabTrigger } from '@/components/ui/tab-switcher/tab-trigger/tab-trigger'
import * as Tabs from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

type TabSwitcherProps = {
  contentLeft?: ReactNode
  contentRight?: ReactNode
}
export const TabSwitcher = ({ contentLeft, contentRight }: TabSwitcherProps) => (
  <Tabs.Root defaultValue={'tab1'}>
    <Tabs.List aria-label={'Choice cards'} className={s.triggerWrap}>
      <TabTrigger title={'All cards'} value={'tab1'} />
      <TabTrigger title={'My cards'} value={'tab2'} />
    </Tabs.List>
    <Tabs.Content className={'TabsContent'} value={'tab1'}>
      {contentLeft}
    </Tabs.Content>
    <Tabs.Content className={'TabsContent'} value={'tab2'}>
      {contentRight}
    </Tabs.Content>
  </Tabs.Root>
)
