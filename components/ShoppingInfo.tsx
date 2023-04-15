import Image from 'next/image';

const ShoppingInfo = () => (
  <section className='flex justify-center bg-white mb-0.5'>
    <div className='flex flex-col lg:flex-row py-16 justify-between'>
      <InfoCard
        title='Paga con tarjeta o en efectivo'
        description='Con Mercado Pago, paga en cuotas y aprovecha la comodidad de
        financiación que te da tu banco, o hazlo con efectivo en puntos de pago.
        ¡Y siempre es seguro!'
        seeMoreText='Cómo pagar con Mercado Pago'
      >
        <Image src='/box.svg' alt='card' width={56} height={40} />
      </InfoCard>
      <Separator />
      <InfoCard
        title='Envío gratis desde $ 90.000'
        description='Con solo estar registrado en Mercado Libre, tienes envíos gratis en
          miles de productos seleccionados.'
        seeMoreText='Conoce más sobre este beneficio'
      >
        <Image src='/card.svg' alt='card' width={56} height={40} />
      </InfoCard>
      <Separator />
      <InfoCard
        title='Seguridad, de principio a fin'
        description='¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas
          hacer, porque estás siempre protegido.'
        seeMoreText='Cómo te protegemos'
      >
        <Image src='/security.svg' alt='card' width={56} height={40} />
      </InfoCard>
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
  <div className='w-[400px] h-[250px] px-12 gap-6 flex flex-col items-center'>
    <div className='h-[56px]'>{children}</div>

    <div className='flex flex-col gap-3 items-center justify-center'>
      <span className=' text-xl font-medium text-ml-mid-black text-center'>
        {title}
      </span>
      <span className='text-center text-base text-ml-gray'>{description}</span>
      <span className='text-ml-blue text-sm text-center'>{seeMoreText}</span>
    </div>
  </div>
);

const Separator = () => (
  <div className='flex h-full  items-center'>
    <Image src='/separator.svg' alt='separator' width={1} height={65} />
  </div>
);

//

export { ShoppingInfo };
