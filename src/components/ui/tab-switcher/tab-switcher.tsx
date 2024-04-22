import { ReactNode } from 'react'

import { TabTrigger } from '@/components/ui/tab-switcher/tab-trigger/tab-trigger'
import * as Tabs from '@radix-ui/react-tabs'

export type TriggerType = {
  title: string
  value: string
}
type TabSwitcherProps = {
  children?: ReactNode
  defaultValue: string
  trigger: TriggerType[]
  value?: string
}
export const TabSwitcher = ({ children, defaultValue, trigger, value }: TabSwitcherProps) => {
  return (
    <Tabs.Root defaultValue={defaultValue} value={value}>
      <Tabs.List>
        {trigger.map(el => (
          <TabTrigger key={el.value} title={el.title} value={el.value} />
        ))}
        {children}
      </Tabs.List>
    </Tabs.Root>
  )
}
