import React from 'react'

interface MedioPagosProps{
  title: string;
  description:string;
  image: string;
}

const MedioPagos = ({title, description, image}: MedioPagosProps) => {
  return (
    <div className='flex flex-row gap-4 items-center'>
        <span>{image}</span>
        <div>
          <span className='flex flex-row items-center bg-gray'>{title}</span>
          <span className='text-blue-400'>{description}</span>
        </div>
    </div>
  )
}

export default MedioPagos
