import React from 'react'
import NavbarMenuProps from '../../interfaces/NavbarMenuProps'

const NavbarMenu : React.FC<NavbarMenuProps> = ({title}) => {
  return (
    <button  className='w-[90px] h-[40px] flex justify-center items-center cursor-pointer rounded-xl transform
    transition duration-600 hover:bg-black   '>
          {title}
    </button>
  )
}

export default NavbarMenu