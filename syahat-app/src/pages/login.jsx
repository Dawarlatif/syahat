import React from 'react'

import Header from '../components/header'
// import PasswordReset from '../components/Login/password-reset'
// import Form from '../components/Login/form'
import Verification from '../components/Login/verification'
// import { PasswordReset2, PasswordReset3 } from '../components/Login/password-reset'
const Login = () => {
  return (
         <div className='w-full h-auto md:h-screen flex flex-wrap justify-center items-start signupImage  ' >
         <Header />
     {/* <Form/> */}
     <Verification/>
     {/* <PasswordReset/> */}
     {/* <PasswordReset2/> */}
{/* <PasswordReset3/> */}
    </div>
  )
}

export default Login