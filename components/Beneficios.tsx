import { CardBeneficions } from '@components/cardBeneficions';

const cardBeneficiosInfo = {
  cards: [
    {
      backImage: '/media/homero.png',
      backName: 'películas-disney+star+',
      forwardImage: '/media/disney-star.png',
      forwardName: 'disney+',
      text1: '',
      text2: 'Sin cargo con el nivel 6',
      text3: 'Diseny+ y Star+',
    },
    {
      backImage: '/media/hbo.png',
      backName: 'películas-hbo-max',
      forwardImage: '/media/hbo-max.png',
      forwardName: 'hbo-max',
      text1: '7 DÍAS GRATIS',
      text2: 'Hasta 50% OFF',
      text3: 'HBO Max',
    },
    {
      backImage: '/media/tom.png',
      backName: 'películas-paramount+',
      forwardImage: '/media/paramount.png',
      forwardName: 'paramount+',
      text1: '7 DÍAS GRATIS',
      text2: 'Hasta 50% OFF',
      text3: 'Paramount+',
    },
  ],
};

const Beneficios = () => (
  <>
    <section className='flex w-screen justify-center items-center'>
      <div className='w-[320px] lg:w-[1024px] flex flex-col gap-[22px]'>
        <div className='flex gap-[25px] pt-10 pl-2'>
          <span className='font-sans text-2xl text-ml-gray'>
            Beneficios de Mercado Puntos
          </span>
          <span className='font-sans text-sm text-ml-blue pt-[10px]'>
            Ver todos los beneficios
          </span>
        </div>
        <div className='flex gap-4 pr-2 pl-2 flex-col lg:flex-row'>
          {cardBeneficiosInfo.cards.map((card) => (
            <CardBeneficions
              key={`card_${card.forwardName}`}
              backImage={card.backImage}
              backName={card.backName}
              forwardImage={card.forwardImage}
              forwardName={card.forwardName}
              text1={card.text1}
              text2={card.text2}
              text3={card.text3}
            />
          ))}
        </div>
      </div>
    </section>
  </>
);

export { Beneficios };
