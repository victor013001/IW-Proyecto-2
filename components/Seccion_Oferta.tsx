import {Oferta} from '@components/oferta'

const Seccion_Oferta = () => {
  return (
    <div className='flex justify-center items-center'>
        <section>
            <div className='mb-4 mt-6'>
                <span className='font-light text-ml-gray'>Ofertas</span>
                <span>Ver todas</span>
            </div>
            <div className='flex flex-row gap-3'>
                <Oferta imagen='hola' precio='210.000' descuento='32% OFF' promo='Envío gratis'></Oferta>
                <Oferta imagen='hola' precio='74.990' descuento='25% OFF' promo='Envío gratis Full'></Oferta>
                <Oferta imagen='hola' precio='134.950' descuento='50% OFF' promo='Envío gratis'></Oferta>
                <Oferta imagen='hola' precio='149.900' descuento='30% OFF' promo='Envío gratis'></Oferta>
                <Oferta imagen='hola' precio='69.990' descuento='17% OFF' promo='Full'></Oferta>
            </div>
        </section>
    </div>
  )
}

export {Seccion_Oferta}
