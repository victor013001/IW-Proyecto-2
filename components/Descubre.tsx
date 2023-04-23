import { CardDescubre } from './CardDescubre';

const cardDescubreInfo = {
  cards: [
    {
      text1: 'RENUEVA TUS ESPACIOS',
      text2: 'HOGAR Y MUEBLES',
      text3: 'HASTA 50% OFF',
      image: '/../public/media/descubre1.png',
      imageName: 'hogar y muebles',
      buttonName: 'Ver más',
    },
    {
      text1: 'SUSCRÍBETE AL NIVEL 6',
      text2: 'POR SOLO',
      text3: '$17.899 CADA MES',
      image: '/../public/media/descubre2.png',
      imageName: 'plan nivel 6',
      buttonName: 'Suscribirme',
    },
  ],
};

const Descubre = () => (
  <section className='flex justify-center w-screen'>
    <div className='flex flex-col gap-5 items-center '>
      <div className='flex flex-row w-[320px] lg:w-[1024px] pt-[37px] pl-2'>
        <span className='text-base font-semibold lg:text-2xl lg:font-normal text-ml-black-light'>
          Descubre
        </span>
      </div>

      <div className='flex flex-col w-[320px] gap-[15px] lg:flex-row lg:w-[1024px] '>
        {cardDescubreInfo.cards.map((card) => (
          <CardDescubre
            key={`${card.imageName}`}
            text1={card.text1}
            text2={card.text2}
            text3={card.text3}
            image={card.image}
            imageName={card.imageName}
            buttonName={card.buttonName}
          />
        ))}
      </div>
    </div>
  </section>
);

export { Descubre };
