import React from 'react'
import MedioPagos from './card_medioPagos'

const Seccion_medioPagos = () => {
  return (
    <div className='flex flex-row w-[996px] h-20 items-center gap-24 ml-40 mt-10 mr-40 mb-24 bg-white'>
        <MedioPagos title='Hasta 48 cuotas' description='ver más' image='/media/credit-card-png'></MedioPagos>
        <MedioPagos title='Transferencia desde tu banco' description='ver más' image='/media/credit-card-png'></MedioPagos>
        <MedioPagos title='Paga en Efectivo' description='ver más' image='/media/credit-card-png'></MedioPagos>
        <MedioPagos title='Más medios de pago' description='ver todos' image='/media/credit-card-png'></MedioPagos>
        
    </div>
  )
}

export  {Seccion_medioPagos}
