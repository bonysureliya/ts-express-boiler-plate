import React from 'react'
import { Button } from 'antd'

interface ButtonPropsForLogin {
    titile : string,
    variant?: "primary" | "dashed" | "link" | "text" 
}

const SignupLoginButton : React.FC<ButtonPropsForLogin> = ({titile, variant}) => {
  return (
    <Button type={variant  && variant} >{titile}</Button>
  )
}

export default SignupLoginButton