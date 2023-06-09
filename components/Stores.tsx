import Image from 'next/image';
import React, { useState } from 'react';

const Stores = () => (
  <section className='flex w-screen justify-center items-center'>
    <div className='flex flex-col gap-5'>
      <Title />
      <div className='hidden lg:flex gap-3'>
        <Store0 />
        <Store1 />
        <Store2 />
        <Store3 />
      </div>
      <div className='flex lg:hidden'>
        <CardsCarousel />
      </div>
    </div>
  </section>
);

const Title = () => (
  <div className='flex flex-col gap-1 items-baseline justify-start lg:flex-row lg:gap-5'>
    <span className=' text-base font-semibold lg:text-2xl lg:font-normal text-ml-black-light'>
      Las mejores tiendas te esperan
    </span>
    <a className='text-sm text-ml-blue cursor-pointer hover:text-blue-600'>
      Ver todas
    </a>
  </div>
);

interface ImageProp {
  src: string;
  alt: string;
}

interface StoreProp {
  title: string;
  children: JSX.Element[];
}

const Store = ({ title, children }: StoreProp) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className='flex flex-col w-60 h-80 lg:h-[300px] bg-white gap-5 rounded'>
      <div className=' mb-[-50px]'>{childrenArray[0]}</div>

      <div className='ml-[90px]'>{childrenArray[1]}</div>

      <div className='flex justify-center items-center'>
        <span className=' font-semibold text-2xl text-ml-black'>{title}</span>
      </div>
      <div className='flex gap-1 items-center justify-center'>
        {childrenArray[2]}
        {childrenArray[3]}
        {childrenArray[4]}
      </div>
      <div className='flex justify-center items-center'>
        <a className=' text-base font-semibold text-ml-gray cursor-pointer'>
          Ver tienda
        </a>
      </div>
    </div>
  );
};

const BannerStoreImage = ({ src, alt }: ImageProp) => (
  <Image src={src} alt={alt} width={256} height={95} className=' rounded-t' />
);

const StoreImage = ({ src, alt }: ImageProp) => (
  <Image
    src={src}
    alt={alt}
    width={60}
    height={60}
    className='rounded-lg shadow-md'
  />
);

const ItemStoreImage = ({ src, alt }: ImageProp) => (
  <Image
    src={src}
    alt={alt}
    width={60}
    height={60}
    className='rounded-lg border-solid border-ml-gray-light border-2'
  />
);

const Store0 = () => (
  <Store title='Lego'>
    <BannerStoreImage src='/stores/Tiendas-1.png' alt='Tiendas 1' />
    <StoreImage src='/stores/Tiendas-1-1.png' alt='Tiendas 1' />
    <ItemStoreImage src='/stores/Tiendas-1-item-1.png' alt='Item 1' />
    <ItemStoreImage src='/stores/Tiendas-1-item-2.png' alt='Item 2' />
    <ItemStoreImage src='/stores/Tiendas-1-item-3.png' alt='Item 3' />
  </Store>
);

const Store1 = () => (
  <Store title='Xiaomi'>
    <BannerStoreImage src='/stores/Tiendas-2.png' alt='Tiendas 1' />
    <StoreImage src='/stores/Tiendas-2-2.png' alt='Tiendas 1' />
    <ItemStoreImage src='/stores/Tiendas-2-item-1.png' alt='Item 1' />
    <ItemStoreImage src='/stores/Tiendas-2-item-2.png' alt='Item 2' />
    <ItemStoreImage src='/stores/Tiendas-2-item-3.png' alt='Item 3' />
  </Store>
);

const Store2 = () => (
  <Store title='Oster'>
    <BannerStoreImage src='/stores/Tiendas-3.png' alt='Tiendas 1' />
    <StoreImage src='/stores/Tiendas-3-3.png' alt='Tiendas 1' />
    <ItemStoreImage src='/stores/Tiendas-3-item-1.png' alt='Item 1' />
    <ItemStoreImage src='/stores/Tiendas-3-item-2.png' alt='Item 2' />
    <ItemStoreImage src='/stores/Tiendas-3-item-3.png' alt='Item 3' />
  </Store>
);

const Store3 = () => (
  <Store title='Nikon'>
    <BannerStoreImage src='/stores/Tiendas-4.png' alt='Tiendas 1' />
    <StoreImage src='/stores/Tiendas-4-4.png' alt='Tiendas 1' />
    <ItemStoreImage src='/stores/Tiendas-4-item-1.png' alt='Item 1' />
    <ItemStoreImage src='/stores/Tiendas-4-item-2.png' alt='Item 2' />
    <ItemStoreImage src='/stores/Tiendas-4-item-3.png' alt='Item 3' />
  </Store>
);

const CardsCarousel = () => {
  const [index, setIndex] = useState(0);

  const storeCards = () => {
    switch (index) {
      case 0:
        return <Store0 />;
      case 1:
        return <Store1 />;
      case 2:
        return <Store2 />;
      case 3:
        return <Store3 />;
      default:
        return <></>;
    }
  };

  return (
    <div className='flex flex-col items-center justify-between'>
      <div className=''>{storeCards()}</div>
      <div className='mt-[-28px] bg-gray-100 rounded-lg '>
        <ul className='flex list-none justify-center gap-2'>
          <li>
            <button
              type='button'
              className='button-selection'
              onClick={() => setIndex(0)}
            />
          </li>
          <li>
            <button
              type='button'
              className='button-selection'
              onClick={() => setIndex(1)}
            />
          </li>
          <li>
            <button
              type='button'
              className='button-selection'
              onClick={() => setIndex(2)}
            />
          </li>
          <li>
            <button
              type='button'
              className='button-selection'
              onClick={() => setIndex(3)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Stores };
