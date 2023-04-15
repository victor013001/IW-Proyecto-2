import { BannerHeader } from '@components/BannerHeader';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { ShoppingInfo } from '@components/ShoppingInfo';
import { ModalCart } from '@components/modals/ModalCart';
import { CartContextProvider } from '@context/CartContext';
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
    <div className='text-3xl font-bold underline'>Proyecto 2</div>
    <CartContextProvider>
      <Header />
      <BannerHeader />
      <ShoppingInfo />
      <Footer />
      <ModalCart />
    </CartContextProvider>
  </>
);

export default Home;
