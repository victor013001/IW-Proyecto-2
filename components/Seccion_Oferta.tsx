import { use, useState } from 'react';

const Seccion_Oferta = () => {
    <section className='flex justify-center items-center'>
        <div className='w-[996px] h-[420px] justify-between'>
            <div className='mb-4 mt-6'>
                <span className='font-light text-2xl mr-4 text-ml-gray'>Ofertas</span>
                <span className='text-ml-blue'>Ver todas</span>
            </div>
            <div className='lg:flex flex-row gap-3 justify-center items-center'>
                <CardOferta1 />
                <CardOferta2 />
                <CardOferta3 />
                <CardOferta4 />
                <CardOferta5 />
            </div>
        </div>
        <div className='flex py-4 lg:hidden'>
            <Carousel />
        </div>
    </section>
};

interface OfertaProps {
    imagen: string;
    precio: string;
    descuento: string;
    promo: string;
};

const Oferta = ({imagen, precio, descuento, promo} : OfertaProps) => {
    return (
      <div className='absoluteflex flex-col w-[190px] h-[350px] rounded bg-white'>
        <div className='border w-[190px] h-[224px]'>
          <img src={imagen}/>
        </div>
        <div className='p-5'>
          <span className='mr-3 text-xl font-normal'>${precio}</span>
          <span className='text-sm text-ml-green'>{descuento}</span>
          <div>
            <span className='text-sm font-bold text-ml-green'>{promo}</span>
          </div>
        </div>
        
      </div>
    )
};

const CardOferta1 = () =>(
    <Oferta 
    imagen='./media/silla_oferta.png'
     precio='210.000'
      descuento='32% OFF'
       promo='Envío gratis'></Oferta>
);

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
          return <CardOferta2/>;
        case 2:
          return <CardOferta3/>;
        case 3:
          return <CardOferta4/>;
        case 4:
          return <CardOferta5/>;      
        default:
          return <></>;
      }
    };

    return (
        <div className='flex flex-col items-center justify-between'>
          <div className=''>{infoCards()}</div>
          <div>
            <ul className='flex list-none justify-center gap-2'>
              <li>
                <button
                  type='button'
                  className='button-selection'
                  onClick={() => setIndex(0)}
                />
              </li>
              <li>
                <button
                  type='button'
                  className='button-selection'
                  onClick={() => setIndex(1)}
                />
              </li>
              <li>
                <button
                  type='button'
                  className='button-selection'
                  onClick={() => setIndex(2)}
                />
              </li>
              <li>
                <button
                  type='button'
                  className='button-selection'
                  onClick={() => setIndex(3)}
                />
              </li>
              <li>
                <button
                  type='button'
                  className='button-selection'
                  onClick={() => setIndex(4)}
                />
              </li>
            </ul>
          </div>
        </div>
      );
}


export {Seccion_Oferta}
