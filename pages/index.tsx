import {DisneySuscribe} from '@components/DisneySuscribe';
import MedioPagoTarjeta from '@components/MedioPagoTarjeta';
import MedioPagos from '@components/MedioPagos';
import { BannerHeader } from '@components/BannerHeader';
import { Categories } from '@components/Categories';
import { ShoppingInfo } from '@components/ShoppingInfo';
import { Stores } from '@components/Stores';
import { ModalCart } from '@components/modals/ModalCart';
import { CartContextProvider } from '@context/CartContext';
import { Layout } from '@layouts/Layout';
import { NextPage } from 'next';
import Head from 'next/head';

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
            <MedioPagoTarjeta title='Hasta 48 cuotas' description='ver más' image='/media/credit-card.png'></MedioPagoTarjeta>
            <MedioPagos title='Transferencia desde tu banco' description='ver más' image='/media/transfer.png'></MedioPagos>
            <MedioPagos title='Paga en Efectivo' description='ver más' image='/media/payment-agreement.png'></MedioPagos>
            <MedioPagos title='Más medios de pago' description='ver todos' image='/media/view-more.png'></MedioPagos>
          </div>
        </div>
        <DisneySuscribe></DisneySuscribe>
        <Stores />
        <Categories />
        <ShoppingInfo />
      </Layout>
      <ModalCart />
    </CartContextProvider>
  </>
);

export default Home;
