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
      <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
        <Button> some button</Button>
      </div>
    ),
  },
}

export const CardWithTypography: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
        <Typography variant={'h1'}> some text</Typography>
      </div>
    ),
  },
}
