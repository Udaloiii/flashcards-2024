import { Typography } from '@/components/ui/typography/typography'
import { Meta, type StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'body1',
        'body2',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'link1',
        'link2',
        'overline',
        'subtitle1',
        'subtitle2',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    children: 'Some text for example',
    variant: 'h1',
  },
}

export const H4: Story = {
  args: {
    children: 'Some text for example',
    variant: 'h4',
  },
}

export const Caption: Story = {
  args: {
    children: 'Some text for example',
    variant: 'caption',
  },
}
