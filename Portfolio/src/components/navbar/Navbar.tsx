import React from 'react'
import NavbarMenuProps from '../../interfaces/NavbarMenuProps'
import NavbarMenu from './NavbarMenu'
import {CiAlarmOn} from 'react-icons/ci'
import logo from '../../assets/AnilLogo.png'

const dataArray : NavbarMenuProps[] = [
  {title: "Home"},
  {title: "Work"},
  {title: "About us"},
  {title: "Contact Us"},
]

const Navbar = () => {
  return (
    <div className='text-white w-[97vw] h-[70px] flex justify-between items-center px-5 bg-[#303030] drop-shadow-xl rounded-xl mx-3 mt-2'>
      <div className='hover:animate-spin'>
        <img src={logo} className='w-[150px] h-[150px]' alt="" />
        {/* <CiAlarmOn className='text-3xl' /> */}
      </div>
      <div className='flex w-[450px] justify-between'>
          {dataArray.map( (value) => <NavbarMenu title={value.title} /> )}
      </div>
    </div>
  )
}

export default Navbar