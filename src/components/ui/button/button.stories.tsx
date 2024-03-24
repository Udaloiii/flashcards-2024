import type { Meta, StoryObj } from '@storybook/react'

import LogOut from '@/assets/logo/log-out'

import { Button } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Primary Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const PrimaryWithIcon: Story = {
  args: {
    children: (
      <>
        <LogOut /> some button
      </>
    ),
    disabled: false,
    variant: 'primary',
  },
}

export const SecondaryWithIcon: Story = {
  args: {
    children: (
      <>
        <LogOut /> some button
      </>
    ),
    disabled: false,
    variant: 'secondary',
  },
}
