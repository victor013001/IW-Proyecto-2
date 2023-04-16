interface MedioPagoTarjeta{
    image: string;
    title: string;
    description: string;
}

const MedioPagoTarjeta = ({image, title, description} : MedioPagoTarjeta) => {
    return (
        <div className='flex flex-row gap-4 items-center'>
            <img src={image}/>
            <div className="flex flex-col">
              <span className='font-bold'>{title}</span>
              <span className='text-blue-400'>{description}</span>
            </div>
        </div>
      )
}

export default MedioPagoTarjeta