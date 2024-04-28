import Edit from '@/assets/logo/edit'
import { EditableText } from '@/components/ui/editable-span/editable-text'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: EditableText,
  tags: ['autodocs'],
  title: 'Components/EditableText',
} satisfies Meta<typeof EditableText>

export default meta
type Story = StoryObj<typeof meta>

export const EditableSpanExample: Story = {
  args: {
    changeOn: false,
    label: 'Nickname',
    setChangeOn: () => {},
    title: 'Eugene',
    toggleMode: () => {},
    trigger: <Edit />,
  },
}
