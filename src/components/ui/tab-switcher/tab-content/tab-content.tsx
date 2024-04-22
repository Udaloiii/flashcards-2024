import { ReactNode } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

type TabContentProps = {
  children: ReactNode
  value: string
}
export const TabContent = ({ children, value }: TabContentProps) => {
  return <Tabs.Content value={value}>{children}</Tabs.Content>
}
