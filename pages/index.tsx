import { DisneySuscribe } from '@components/DisneySuscribe';
import MedioPagoTarjeta from '@components/MedioPagoTarjeta';
import MedioPagos from '@components/MedioPagos';
import { BannerHeader } from '@components/BannerHeader';
import { Categories } from '@components/Categories';
import { ShoppingInfo } from '@components/ShoppingInfo';
import { Stores } from '@components/Stores';
import { ModalCart } from '@components/modals/ModalCart';
import { CartContextProvider } from '@context/CartContext';
import { Layout } from '@layouts/Layout';
import { CardBeneficions } from '@components/cardBeneficions';
import { NextPage } from 'next';
import Head from 'next/head';

const cardBeneficiosInfo = {
  cards: [
    {
      backImage: '/../public/media/homero.png',
      backName: 'películas-disney+star+',
      forwardImage: '/../public/media/disney-star.png',
      forwardName: 'disney+',
      text1: '',
      text2: 'Sin cargo con el nivel 6',
      text3: 'Diseny+ y Star+',
    },
    {
      backImage: '/../public/media/hbo.png',
      backName: 'películas-hbo-max',
      forwardImage: '/../public/media/hbo-max.png',
      forwardName: 'hbo-max',
      text1: '7 DÍAS GRATIS',
      text2: 'Hasta 50% OFF',
      text3: 'HBO Max',
    },
    {
      backImage: '/../public/media/tom.png',
      backName: 'películas-paramount+',
      forwardImage: '/../public/media/paramount.png',
      forwardName: 'paramount+',
      text1: '7 DÍAS GRATIS',
      text2: 'Hasta 50% OFF',
      text3: 'Paramount+',
    },
  ],
};

const Home: NextPage = () => (
  <>
    <Head>
      <title>Mercado Libre</title>
      <meta
        name='description'
        content='Proyecto 2 Ingenieria Web UdeA Jovan Alejandro Zambrano Bello - Santiago Bedoya Diaz - Victor Manuel Osorio Garcia'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.svg' />
    </Head>
    <CartContextProvider>
      <Layout>
        <BannerHeader />
        <div className='w-{1184} m-14 p-5'>
          <div className='flex flex-row h-20 justify-between'>
            <MedioPagoTarjeta
              title='Hasta 48 cuotas'
              description='ver más'
              image='/media/credit-card.png'
            ></MedioPagoTarjeta>
            <MedioPagos
              title='Transferencia desde tu banco'
              description='ver más'
              image='/media/transfer.png'
            ></MedioPagos>
            <MedioPagos
              title='Paga en Efectivo'
              description='ver más'
              image='/media/payment-agreement.png'
            ></MedioPagos>
            <MedioPagos
              title='Más medios de pago'
              description='ver todos'
              image='/media/view-more.png'
            ></MedioPagos>
          </div>
        </div>
        <DisneySuscribe></DisneySuscribe>
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
              {cardBeneficiosInfo.cards.map((card, index) => (
                <CardBeneficions
                  key={`${card.forwardName}_${index}`}
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
        <Stores />
        <Categories />
        <ShoppingInfo />
      </Layout>
      <ModalCart />
    </CartContextProvider>
  </>
);

export default Home;
