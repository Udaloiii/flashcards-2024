import Delete from '@/assets/logo/delete'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { AddNewCard } from '@/components/ui/modal/add-new-card/add-new-card'
import { AddNewPack } from '@/components/ui/modal/add-new-pack/add-new-pack'
import { DeleteCard } from '@/components/ui/modal/delete-card/delete-card'
import { LearnCard } from '@/components/ui/modal/learn-card/learn-card'
import { Modal } from '@/components/ui/modal/modal'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const CreateNewCard: Story = {
  args: {
    content: <AddNewCard />,
    trigger: <Button>Add New Card</Button>,
  },
}

export const CreateNewPack: Story = {
  args: {
    content: <AddNewPack />,
    trigger: <Button>Add New Pack</Button>,
  },
}

export const ModalDeleteCard: Story = {
  args: {
    content: <DeleteCard cardTitle={'Card Title For Delete'} />,
    trigger: (
      <div
        style={{
          alignItems: 'center',
          cursor: 'pointer',
          display: 'flex',
          gap: '10px',
          margin: '25px',
        }}
      >
        Delete Card
        <Delete />
      </div>
    ),
  },
}
export const LearnDeckNameCard: Story = {
  args: {
    content: (
      <Card style={{ padding: '24px' }}>
        <h3 style={{ textAlign: 'center' }}>Learn “Deck Name”</h3>
        <p>Question: {'from server'}</p>
        <p>Count of attempts: 10</p>
        <Button fullWidth>Show Answer</Button>
      </Card>
    ),
    trigger: <Button>Learn “Deck Name”</Button>,
  },
}

export const LearnDeckNameAnswerCard: Story = {
  args: {
    content: <LearnCard answer={'OFIGENNO!'} attempts={10} question={'Kak delishki'} />,
    trigger: <Button>Learn “Deck Name”</Button>,
  },
}
