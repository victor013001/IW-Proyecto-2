import {Oferta} from '@components/oferta'
import { Button } from '@mui/material';
import { useState } from 'react';

const CardOferta1 = () =>(
    <Oferta 
    imagen='./media/silla_oferta.png'
     precio='210.000'
      descuento='32% OFF'
       promo='Envío gratis'></Oferta>
)

const CardOferta2 = () => (
    <Oferta 
    imagen='./media/micro_oferta.png'
    precio='74.990'
    descuento='25% OFF'
    promo='Envío gratis Full'></Oferta>
);

const CardOferta3 = () => (
    <Oferta 
    imagen='./media/afeitadora_oferta.png' 
    precio='134.950'
    descuento='50% OFF'
    promo='Envío gratis'></Oferta>
);

const CardOferta4 = () => (
    <Oferta imagen='./media/armario_oferta.png' precio='149.900' descuento='30% OFF' promo='Envío gratis'></Oferta>
)

const CardOferta5 = () => (
    <Oferta imagen='./media/cortina_oferta.png' 
    precio='69.990' 
    descuento='17% OFF'
    promo='Full'></Oferta>
)


const Carousel = () => {
    const [index, setIndex] = useState(0);
  
    const infoCards = () => {
      switch (index) {
        case 0:
          return <CardOferta1 />;
        case 1:
          return <CardOferta2 />;
        case 2:
          return <CardOferta3 />;
        case 4:
          return <CardOferta4 />;
        case 5:
          return <CardOferta5 />;   
        default:
          return <></>;
      }
    };
};


const Seccion_Oferta = () => {

    const toRight = '>'
    const toLeft = '<'
return (
    <section className='flex justify-center items-center mb-14'>
        <div className='w-[996px] h-[420px] justify-between '>
            <div className='mb-4 mt-6'>
                <span className='font-light text-2xl mr-4 text-ml-gray'>Ofertas</span>
                <span className='text-ml-blue'>Ver todas</span>
            </div>
            <div className='lg:flex flex-row gap-3 sm: justify-center, items-center'>
                <Button className='-m-10 rounded-full bg-white lg:hidden' variant="outlined">{toLeft}</Button>
                <Oferta imagen='./media/silla_oferta.png' precio='210.000' descuento='32% OFF' promo='Envío gratis'></Oferta>
                <div className='lg:flex flex-row gap-3 items-center sm:hidden'>
                    <Oferta imagen='./media/micro_oferta.png'precio='74.990' descuento='25% OFF' promo='Envío gratis Full'></Oferta>
                    <Oferta imagen='./media/afeitadora_oferta.png' precio='134.950' descuento='50% OFF' promo='Envío gratis'></Oferta>
                    <Oferta imagen='./media/armario_oferta.png' precio='149.900' descuento='30% OFF' promo='Envío gratis'></Oferta>
                    <Oferta imagen='./media/cortina_oferta.png' precio='69.990' descuento='17% OFF' promo='Full'></Oferta>
                </div>
                <Button className='-m-10 rounded-full bg-white size lg:hidden' variant="outlined">{toRight}</Button>    
            </div>
            
        </div>
    </section>
  )
}

export {Seccion_Oferta}
