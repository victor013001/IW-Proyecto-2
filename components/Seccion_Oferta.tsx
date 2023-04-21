import React from 'react'
import { Carousel } from 'react-elastic-carousel'
import { Oferta } from './oferta'

const SeccionOferta = () => {
  return (
    <section className='flex justify-center items-center'>
        <div className='w-[996px] h-[420px] justify-between mb-8'>
            <div className='mb-4 mt-6'>
                <span className='font-light text-2xl mr-4 text-ml-gray'>Ofertas</span>
                <span className='text-ml-blue'>Ver todas</span>
            </div>
            <div className='lg:flex flex-row gap-3 justify-center items-center'>
                <Carousel>
                    
                </Carousel>
            </div>
        </div>
    </section>
  )
}

export {SeccionOferta}





