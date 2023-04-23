import { DisneySuscribe } from '@components/DisneySuscribe';
import { BannerHeader } from '@components/BannerHeader';
import { Categories } from '@components/Categories';
import { ShoppingInfo } from '@components/ShoppingInfo';
import { Stores } from '@components/Stores';
import { ModalCart } from '@components/modals/ModalCart';
import { CartContextProvider } from '@context/CartContext';
import { Layout } from '@layouts/Layout';
import { Beneficios } from '@components/Beneficios';
import { Descubre } from '@components/Descubre';
import { Supermercado } from '@components/Supermercado';
import { NextPage } from 'next';
import Head from 'next/head';
import { SeccionOferta } from '@components/Seccion_Oferta';
import { SeccionMedioPagos } from '@components/SeccionMedioPagos';

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
        <SeccionMedioPagos />
        <SeccionOferta />
        <DisneySuscribe></DisneySuscribe>
        <Beneficios />
        <Descubre />
        <Stores />
        <Supermercado />
        <Categories />
        <ShoppingInfo />
      </Layout>
      <ModalCart />
    </CartContextProvider>
  </>
);

export default Home;
