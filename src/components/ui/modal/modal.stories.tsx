import Delete from '@/assets/logo/delete'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { AddNewCard } from '@/components/ui/modal/add-new-card/add-new-card'
import { AddNewDeck } from '@/components/ui/modal/add-new-deck/add-new-deck'
import { DeleteCard } from '@/components/ui/modal/delete-card/delete-card'
import { Modal } from '@/components/ui/modal/modal'
import { LearnCard } from '@/pages/learn-page/learn-card/learn-card'
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
    children: <AddNewCard />,
    trigger: <Button>Add New Card</Button>,
  },
}

export const CreateNewPack: Story = {
  args: {
    children: <AddNewDeck />,
    trigger: <Button>Add New Pack</Button>,
  },
}

export const ModalDeleteCard: Story = {
  args: {
    children: <DeleteCard />,
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
    children: (
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
    children: <LearnCard />,
    trigger: <Button>Learn “Deck Name”</Button>,
  },
}
