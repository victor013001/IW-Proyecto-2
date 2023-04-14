import MedioPagos from '@components/MedioPagos';
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
    <div className='flex flex-row w-9/12 h-20 items-center gap-24 ml-40 mt-10 mr-40 mb-24'>
        <MedioPagos title='Hasta 48 cuotas' description='ver más' image='/media/credit-card-png'></MedioPagos>
        <MedioPagos title='Transferencia desde tu banco' description='ver más' image='/media/credit-card-png'></MedioPagos>
        <MedioPagos title='Paga en Efectivo' description='ver más' image='/media/credit-card-png'></MedioPagos>
        <MedioPagos title='Más medios de pago' description='ver todos' image='/media/credit-card-png'></MedioPagos>
    </div>
  </>
);

export default Home;
