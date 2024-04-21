import { ReactNode } from 'react'

import { TabTrigger } from '@/components/ui/tab-switcher/tab-trigger/tab-trigger'
import * as Tabs from '@radix-ui/react-tabs'

export type TriggerType = {
  title: string
  value: string
}
type TabSwitcherProps = {
  children: ReactNode
  defaultValue: string
  trigger: TriggerType[]
}
export const TabSwitcher = ({ children, defaultValue, trigger }: TabSwitcherProps) => {
  return (
    <Tabs.Root defaultValue={defaultValue}>
      <Tabs.List>
        {trigger.map(el => (
          <TabTrigger key={el.value} title={el.title} value={el.value} />
        ))}
        {children}
      </Tabs.List>
    </Tabs.Root>
  )
}
