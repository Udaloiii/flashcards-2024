import { LearnPage } from '@/pages/learn-page/learn-page'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: LearnPage,
  tags: ['autodocs'],
  title: 'Pages/Learn Page',
} satisfies Meta<typeof LearnPage>

export default meta
type Story = StoryObj<typeof meta>

export const Learn: Story = {
  args: {},
}
