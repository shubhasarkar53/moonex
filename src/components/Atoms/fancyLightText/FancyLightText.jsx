import React from 'react'

function FancyLightText({children,size="md"}) {

    const baseStyles = "text-fancy-gray font-Neue font-regular"

    const sizeStyles = {
        sm:"text-xl",
        md:"text-2xl",
        lg:"text-3xl"
    }

  return (
    <div className={`${sizeStyles[size]} ${baseStyles}`}>{children}</div>
  )
}

export default FancyLightText