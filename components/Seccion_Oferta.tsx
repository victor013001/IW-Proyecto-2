import React from 'react'
import { MyCarousel } from './MyCarousel'


const SeccionOferta = () => {
  
 
  return (
    <section className='flex justify-center items-center'>
        <div className='w-[996px] h-[420px] justify-between mb-8'>
            <div className='mb-4 mt-6'>
                <span className='font-light text-2xl mr-4 text-ml-gray'>Ofertas</span>
                <span className='text-ml-blue'>Ver todas</span>
            </div>
            <MyCarousel></MyCarousel>
        </div>
    </section>
  )
}

export {SeccionOferta}





