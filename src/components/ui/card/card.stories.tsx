import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card/card'
import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CardWithButton: Story = {
  args: {
    children: (
      <>
        <Button> some button</Button>
      </>
    ),
  },
}

export const CardWithTypography: Story = {
  args: {
    children: (
      <>
        <Typography variant={'h1'}> some text</Typography>
      </>
    ),
  },
}
