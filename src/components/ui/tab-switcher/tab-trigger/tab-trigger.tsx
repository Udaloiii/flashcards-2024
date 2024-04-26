import { Typography } from '@/components/ui/typography'
import * as Tabs from '@radix-ui/react-tabs'

import s from './tab-trigger.module.scss'

type TabTriggerProps = {
  title: string
  value: string
}
export const TabTrigger = ({ title, value }: TabTriggerProps) => {
  return (
    <Tabs.Trigger className={s.container} tabIndex={0} value={value}>
      <Typography variant={'body1'}>{title}</Typography>
    </Tabs.Trigger>
  )
}
