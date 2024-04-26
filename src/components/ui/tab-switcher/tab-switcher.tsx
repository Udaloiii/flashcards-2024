import { ReactNode } from 'react'

import { TabTrigger } from '@/components/ui/tab-switcher/tab-trigger/tab-trigger'
import * as Tabs from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

export type TriggerType = {
  title: string
  value: string
}
type TabSwitcherProps = {
  children?: ReactNode
  defaultValue: string
  onValueChange?: (value: string) => void
  trigger: TriggerType[]
  value?: string
}
export const TabSwitcher = ({
  children,
  defaultValue,
  onValueChange,
  trigger,
  value,
}: TabSwitcherProps) => {
  return (
    <Tabs.Root
      className={s.triggerWrap}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      value={value}
    >
      <Tabs.List>
        {trigger.map(el => (
          <TabTrigger key={el.value} title={el.title} value={el.value} />
        ))}
      </Tabs.List>
      {children}
    </Tabs.Root>
  )
}
