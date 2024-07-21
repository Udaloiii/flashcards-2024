import Delete from '@/assets/logo/delete'
import Edit from '@/assets/logo/edit'
import LogOut from '@/assets/logo/log-out'
import Person from '@/assets/logo/person'
import PlayCircle from '@/assets/logo/play-circle'
import VerticalDots from '@/assets/logo/vertical-dots'
import { Card } from '@/components/ui/card'
import { Dropdown, DropdownItem, DropdownSeparator } from '@/components/ui/dropdown/dropdown'
import { Modal } from '@/components/ui/modal'
import { Meta, StoryObj } from '@storybook/react'

import userIcon from '../../../assets/img/user-avatar.webp'

const meta = {
  argTypes: {},
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const DropdownWithUserImg: Story = {
  args: {
    children: (
      <>
        <DropdownItem>
          <div style={{ alignItems: 'flex-end', display: 'flex', gap: '20px', padding: '10px' }}>
            <Person />
            <div style={{ whiteSpace: 'nowrap' }}>My Profile</div>
          </div>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem>
          <div style={{ alignItems: 'flex-end', display: 'flex', gap: '20px', padding: '10px' }}>
            <LogOut />
            <div style={{ whiteSpace: 'nowrap' }}>Sign out</div>
          </div>
        </DropdownItem>
      </>
    ),
    trigger: (
      <img
        alt={'icon'}
        src={userIcon}
        style={{
          borderRadius: '50%',
          height: '50px',
          left: '50%',
          position: 'relative',
          transform: 'translateX(-50%)',
          width: '50px',
        }}
      />
    ),
  },
}

export const DropdownWithDots: Story = {
  args: {
    children: (
      <>
        <DropdownItem>
          <div style={{ alignItems: 'flex-end', display: 'flex', gap: '20px', padding: '10px' }}>
            <PlayCircle />
            <div>Learn</div>
          </div>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem>
          <div style={{ alignItems: 'flex-end', display: 'flex', gap: '20px', padding: '10px' }}>
            <Edit />
            <div>Edit</div>
          </div>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem>
          <div style={{ alignItems: 'flex-end', display: 'flex', gap: '20px', padding: '10px' }}>
            <Delete />
            <div>Delete</div>
          </div>
        </DropdownItem>
      </>
    ),
    trigger: (
      <div style={{ left: '50%', position: 'absolute', transform: 'translateX(-50%)' }}>
        <VerticalDots />
      </div>
    ),
  },
}

export const DropdownWithDotsModals: Story = {
  args: {
    children: (
      <>
        <DropdownItem>
          <Modal
            trigger={
              <div
                style={{ alignItems: 'flex-end', display: 'flex', gap: '20px', padding: '10px' }}
              >
                <PlayCircle />
                <div>Learn</div>
              </div>
            }
          >
            <Card
              style={{
                display: 'flex',
                height: '300px',
                justifyContent: 'center',
                padding: '10px',
              }}
            >
              Learn deck
            </Card>
          </Modal>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem>
          <Modal
            trigger={
              <div
                style={{ alignItems: 'flex-end', display: 'flex', gap: '20px', padding: '10px' }}
              >
                <Edit />
                <div>Edit</div>
              </div>
            }
          >
            <Card
              style={{
                display: 'flex',
                height: '300px',
                justifyContent: 'center',
                padding: '10px',
              }}
            >
              Change deck
            </Card>
          </Modal>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem>
          <Modal
            trigger={
              <div
                style={{ alignItems: 'flex-end', display: 'flex', gap: '20px', padding: '10px' }}
              >
                <Delete />
                <div>Delete</div>
              </div>
            }
          >
            <Card
              style={{
                display: 'flex',
                height: '300px',
                justifyContent: 'center',
                padding: '10px',
              }}
            >
              Delete deck
            </Card>
          </Modal>
        </DropdownItem>
      </>
    ),
    trigger: (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <VerticalDots />
      </div>
    ),
  },
}
