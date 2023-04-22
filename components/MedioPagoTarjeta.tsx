import Image from 'next/image';

interface MedioPagoTarjeta {
  image: string;
  title: string;
  description: string;
}

const MedioPagoTarjeta = ({ image, title, description }: MedioPagoTarjeta) => (
  <div className='flex flex-row gap-4 items-center'>
    <Image src={image} alt='medioPago' width={48} height={48} />
    <div className='flex flex-col'>
      <span className='font-bold'>{title}</span>
      <span className='text-blue-400'>{description}</span>
    </div>
  </div>
);

export default MedioPagoTarjeta;
