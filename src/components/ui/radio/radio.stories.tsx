import { Radio, RadioItem } from '@/components/ui/radio/radio'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Radio,
  tags: ['autodocs'],
  title: 'Components/Radio',
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const RadioExample: Story = {
  args: {
    children: (
      <>
        <RadioItem label={'Hello'} value={'hello'} />
        <RadioItem label={'goodbye'} value={'goodbye'} />
        <RadioItem label={'zdarova'} value={'zdarova'} />
      </>
    ),
  },
}

export const RadioDisable: Story = {
  args: {
    children: (
      <>
        <RadioItem disabled label={'Hello'} value={'hello'} />
        <RadioItem disabled label={'goodbye'} value={'goodbye'} />
        <RadioItem disabled label={'zdarova'} value={'zdarova'} />
      </>
    ),
    disabled: true,
  },
}
