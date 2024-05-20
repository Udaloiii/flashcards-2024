import Image from '@/assets/logo/image'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ModalBody } from '@/components/ui/modal/modal-body/modal-body'
import { ModalFooter } from '@/components/ui/modal/modal-footer/modal-footer'
import { ModalHeader } from '@/components/ui/modal/modal-header/modal-header'
import { Textfield } from '@/components/ui/textfield'

export const AddNewPack = () => {
  return (
    <div>
      <ModalHeader showCloseBtn title={'Add New Deck'} />
      <form>
        <ModalBody>
          <Textfield label={'Name Pack'} />
          <Button fullWidth type={'button'} variant={'secondary'}>
            <Image />
            Upload Image
          </Button>
          <Checkbox label={'Private Pack'} />
        </ModalBody>
      </form>
      <ModalFooter titlePrimary={'Add New Deck'} titleSecondary={'Cancel'} />
    </div>
  )
}
