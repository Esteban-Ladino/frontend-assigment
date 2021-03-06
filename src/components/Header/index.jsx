import Logo from '@images/Logo.png'
import profilePhoto from '@images/profilePhoto.jpg'
import { Input, Menu, StyledHeader, UserSection, BurguerMenu } from './styles'

import {
  FiSettings,
  FiChevronDown,
  FiHome,
  FiBell,
  FiSearch,
  FiMenu
} from 'react-icons/fi'
import { ModalMenu } from '../ModalMenu'
import { useState } from 'react'

export const Header = () => {
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(!openModal)

  return (
    <StyledHeader>
      <figure>
        <img src={Logo} alt='DocRed Logo' />
      </figure>
      <Input>
        <button type='button'><FiSearch size='28' /></button>
        <input type='text' placeholder='¿Qué estás buscando?' />
      </Input>
      <Menu>
        <FiHome size='25' />
        <p>Inicio</p>
        <FiChevronDown size='20' />
      </Menu>
      <BurguerMenu onClick={handleOpenModal}>
        <FiMenu size='28' />
      </BurguerMenu>
      <ModalMenu openModal={openModal} handleOpenModal={handleOpenModal} />
      <UserSection>
        <a>
          <FiBell size='28' />
          <span>1</span>
        </a>
        <a>
          <img src={profilePhoto} alt='User Profile Photo' />
          <FiChevronDown size='20' />
        </a>
        <a><FiSettings size='28' /></a>
      </UserSection>
    </StyledHeader>
  )
}
