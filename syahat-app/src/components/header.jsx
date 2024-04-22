import React from 'react'
import logo from './../assets/web logo-02 2.png'
const Header = () => {
  return (
    <div className="w-full h-20 ">
      <div className='bg-gray-100 p-3 '>
      <img src={logo} alt='syahat-logo' width='150px' height='100px' />
      </div>
    </div>
  )
}

export default Header