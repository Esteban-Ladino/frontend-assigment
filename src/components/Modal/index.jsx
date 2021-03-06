import Modal from 'react-modal'
import { ModalStyles, UserSection } from './styles'
import profilePhoto from '@images/profilePhoto.jpg'

import {
  FiSettings,
  FiBell
} from 'react-icons/fi'

export const ModalMenu = ({ openModal, handleOpenModal }) => {
  return (
    <>
      <ModalStyles />
      <Modal
        isOpen={openModal}
        className='ModalMenu'
        onRequestClose={handleOpenModal}
        overlayClassName='OverlayMenu'
        ariaHideApp={false}
        aria={{
          labelledby: 'Heading',
          describedby: 'Main menu of the site'
        }}
        contentLabel='Main menu of the site'
      >
        <UserSection>
          <div>
            <figure>
              <img src={profilePhoto} alt='User Profile Photo' />
            </figure>
            <h3>User Name</h3>
          </div>
          <a>
            <FiBell size='28' />
            <span>1</span>
            <p>Notifications</p>
          </a>
          <a><FiSettings size='28' /> Settings</a>
        </UserSection>
      </Modal>
    </>
  )
}
