import React from 'react'

function FaqIcon({icon}) {
  return (
    <div className='max-w-[40px] max-h-[40px] h-[40px] w-[40px] overflow-hidden ' >
        <div className='w-full h-full object-cover bg-gray-800 rounded-full text-white p-2'>
                {icon}
        </div>
    </div>
  )
}

export default FaqIcon