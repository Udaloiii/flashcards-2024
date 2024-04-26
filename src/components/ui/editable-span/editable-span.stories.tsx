import Edit from '@/assets/logo/edit'
import { EditableSpan } from '@/components/ui/editable-span/editable-span'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: EditableSpan,
  tags: ['autodocs'],
  title: 'Components/EditableSpan',
} satisfies Meta<typeof EditableSpan>

export default meta
type Story = StoryObj<typeof meta>

export const EditableSpanExample: Story = {
  args: {
    title: 'Eugene',
    trigger: <Edit />,
  },
}
