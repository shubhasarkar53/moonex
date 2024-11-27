import React from 'react'



function NavItem({children}) {
const baseStyles = "text-white font-Raleway font-extrabold text-lg hover:text-gold-500 focus:text-gold-500 cursor-pointer transition-all duration-200 ease-in-out"
  return (
    <div className={`${baseStyles}`}>{children}</div>
  )
}

export default NavItem