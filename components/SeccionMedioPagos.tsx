import React from 'react';
import MedioPagos from '@components/MedioPagos';
import MedioPagoTarjeta from '@components/MedioPagoTarjeta';

const SeccionMedioPagos = () => (
  <section className='flex justify-center'>
    <div className='flex flex-row w-[996px] h-20 items-center justify-between p-5 bg-white'>
      <MedioPagoTarjeta
        title='Hasta 48 cuotas'
        description='ver más'
        image='/media/credit-card.png'
      />
      <MedioPagos
        title='Transferencia desde tu banco'
        description='ver más'
        image='/media/transfer.png'
      />
      <MedioPagos
        title='Paga en Efectivo'
        description='ver más'
        image='/media/payment-agreement.png'
      />
      <MedioPagos
        title='Más medios de pago'
        description='ver todos'
        image='/media/view-more.png'
      />
    </div>
  </section>
);

export { SeccionMedioPagos };
