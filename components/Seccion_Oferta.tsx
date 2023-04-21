import {Oferta} from '@components/oferta'

const Seccion_Oferta = () => {
  return (
    <section className='flex justify-center items-center mb-14'>
        <div className='w-[1180px] h-[420px] justify-between '>
            <div className='mb-4 mt-6'>
                <span className='font-light text-2xl mr-4 text-ml-gray'>Ofertas</span>
                <span className='text-ml-blue'>Ver todas</span>
            </div>
            <div className='flex flex-row gap-3'>
                <Oferta imagen='./media/silla_oferta.png' precio='210.000' descuento='32% OFF' promo='Envío gratis'></Oferta>
                <Oferta imagen='./media/micro_oferta.png'precio='74.990' descuento='25% OFF' promo='Envío gratis Full'></Oferta>
                <Oferta imagen='./media/afeitadora_oferta.png' precio='134.950' descuento='50% OFF' promo='Envío gratis'></Oferta>
                <Oferta imagen='./media/armario_oferta.png' precio='149.900' descuento='30% OFF' promo='Envío gratis'></Oferta>
                <Oferta imagen='./media/cortina_oferta.png' precio='69.990' descuento='17% OFF' promo='Full'></Oferta>
            </div>
        </div>
    </section>
  )
}

export {Seccion_Oferta}
