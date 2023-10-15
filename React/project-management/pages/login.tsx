import React from 'react'
import {Button} from 'antd'
import SignupLoginButton from '@/components/Buttons/SignupLoginButton'

const login = () => {
  return (
    <div className='h-[100vh] flex flex-col items-center space-y-10 bg-red-500 px-5 pt-3'>
        <div className='text-white items-center bg-teal-500 px-5 flex justify-between  h-[70px] w-[95vw] rounded-xl '>
            <p>LOGO</p>
           <SignupLoginButton titile='SignUp' variant='primary' />
        </div>
        <div className='bg-black w-[400px] h-[500px] rounded-xl'>
            MAIN LOGIN CARD
        </div>
    </div>
  )
}

export default login