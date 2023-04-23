import Image from 'next/image';

const imagesSupermercado = {
  images: [
    {
      image: '/media/supermercado1.png',
      imageName: 'loción',
    },
    {
      image: '/media/supermercado2.png',
      imageName: 'cicatricure',
    },
    {
      image: '/media/supermercado3.png',
      imageName: 'crema',
    },
    {
      image: '/media/supermercado4.png',
      imageName: 'cicatricure',
    },
    {
      image: '/media/supermercado5.png',
      imageName: 'nissin',
    },
    {
      image: '/media/supermercado6.png',
      imageName: 'la lico',
    },
    {
      image: '/media/supermercado7.png',
      imageName: 'eucerin',
    },
    {
      image: '/media/supermercado8.png',
      imageName: 'tio nacho',
    },
  ],
};

const Supermercado = () => (
  <>
    <section className='w-screen flex justify-center items-center '>
      <div className='flex flex-col w-[320px] gap-6 lg:w-[1024px]'>
        <div className='w-full flex  flex-col lg:flex-row gap-2 '>
          <span className='text-2xl text-ml-gray'>Colecciones:</span>
          <span className='text-2xl text-ml-gray font-bold'>Supermercado</span>
        </div>

        <div className='flex flex-row lg:w-[1024px] w-[320px] gap-4 '>
          <div className='w-[320px] bg-white'>
            <div className='bg-white rounded w-[320px]'>
              <Image
                src='/media/supermercado.png'
                alt='supermercado'
                width={320}
                height={280}
                className='rounded'
              />
            </div>
            <div className='flex flex-col pt-2 h-16 pl-6 gap-1'>
              <span className='text-xs text-ml-black-light'>Descubre</span>
              <span className='text-2xl text-ml-black-light'>SUPERMERCADO</span>
            </div>
          </div>
          <div className='w-[800px] lg:grid grid-cols-4 hidden gap-4 '>
            {imagesSupermercado.images.map((image) => (
              <Image
                className=''
                key={`${image.imageName}_${image.image}`}
                src={image.image}
                alt={image.imageName}
                width={184}
                height={184}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export { Supermercado };
