import Image from '@/assets/logo/image'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'
import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

import icon from '../../../assets/img/user-avatar.webp'

const meta = {
  argTypes: {},
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const ModalExample: Story = {
  args: {
    children:
      'asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd ',
    showCloseBtn: true,
    title: 'Create new pack',
    titlePrimary: 'Title primary',
    titleSecondary: 'Title secondary',
  },
}

export const ModalCreateNewPack: Story = {
  args: {
    children: (
      <>
        <img alt={'icon'} src={icon} />
        <p>
          asdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd
          asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd
          asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd
          asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd
          asdasdasdasd asd asd asd asd asd asd asd asd asdasdasdasd asd asd asd asd asd asd asd asd
        </p>
        <Button fullWidth variant={'secondary'}>
          <Image />
          <Typography variant={'subtitle2'}>Change cover</Typography>
        </Button>
      </>
    ),
    showCloseBtn: true,
    title: 'Create new pack',
    titlePrimary: 'Title primary',
    titleSecondary: 'Title secondary',
  },
}
