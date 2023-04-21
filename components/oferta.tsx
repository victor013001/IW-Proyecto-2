
interface OfertaProps {
  imagen: string;
  precio: string;
  descuento: string;
  promo: string;
}


const Oferta = ({imagen, precio, descuento, promo} : OfertaProps) => {
  return (
    <div className='flex flex-col w-[224px] h-[350px] rounded bg-white'>
      <div className='border w-[224px] h-[224px]'>
        <span>{imagen}</span>
      </div>
      <div className='p-5'>
        <span className='mr-3 text-2xl font-normal'>${precio}</span>
        <span className='text-sm text-ml-green'>{descuento}</span>
        <div>
          <span className='text-sm font-bold text-ml-green'>{promo}</span>
        </div>
      </div>
      
    </div>
  )
}

export {Oferta}