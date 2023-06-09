import Image from 'next/image';
import { useState } from 'react';

const ShoppingInfo = () => (
  <section className='flex justify-center bg-white mb-0.5'>
    <div className='hidden flex-row lg:flex py-16 justify-between'>
      <InfoCard0 />
      <Separator />
      <InfoCard1 />
      <Separator />
      <InfoCard2 />
    </div>
    <div className='flex py-4 lg:hidden'>
      <Carousel />
    </div>
  </section>
);

interface InfoCardProps {
  children: JSX.Element;
  title: string;
  description: string;
  seeMoreText: string;
}

const InfoCard = ({
  children,
  title,
  description,
  seeMoreText,
}: InfoCardProps) => (
  <div className='w-80 h-[270px] px-8 gap-4 flex flex-col items-center lg:w-[340px] lg:h-[250px]'>
    <div className='h-[56px]'>{children}</div>

    <div className='flex flex-col gap-2.5 items-center justify-center'>
      <span className='text-[19px] font-medium text-ml-mid-black text-center'>
        {title}
      </span>
      <span className='text-center text- text-[15px] text-ml-gray'>
        {description}
      </span>
      <span className='text-ml-blue text-[13px] text-center'>
        {seeMoreText}
      </span>
    </div>
  </div>
);

const Separator = () => (
  <div className='flex h-full  items-center'>
    <Image
      src='/shoppingInfo/separator.svg'
      alt='separator'
      width={1}
      height={65}
    />
  </div>
);

const InfoCard0 = () => (
  <InfoCard
    title='Paga con tarjeta o en efectivo'
    description='Con Mercado Pago, paga en cuotas y aprovecha la comodidad de
        financiación que te da tu banco, o hazlo con efectivo en puntos de pago.
        ¡Y siempre es seguro!'
    seeMoreText='Cómo pagar con Mercado Pago'
  >
    <Image src='/shoppingInfo/card.svg' alt='card' width={56} height={40} />
  </InfoCard>
);

const InfoCard1 = () => (
  <InfoCard
    title='Envío gratis desde $ 90.000'
    description='Con solo estar registrado en Mercado Libre, tienes envíos gratis en
          miles de productos seleccionados.'
    seeMoreText='Conoce más sobre este beneficio'
  >
    <Image src='/shoppingInfo/box.svg' alt='card' width={56} height={40} />
  </InfoCard>
);

const InfoCard2 = () => (
  <InfoCard
    title='Seguridad, de principio a fin'
    description='¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas
          hacer, porque estás siempre protegido.'
    seeMoreText='Cómo te protegemos'
  >
    <Image src='/shoppingInfo/security.svg' alt='card' width={56} height={40} />
  </InfoCard>
);

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const infoCards = () => {
    switch (index) {
      case 0:
        return <InfoCard0 />;
      case 1:
        return <InfoCard1 />;
      case 2:
        return <InfoCard2 />;
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
        </ul>
      </div>
    </div>
  );
};

//

export { ShoppingInfo };
