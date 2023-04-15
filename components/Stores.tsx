import Image from 'next/image';
import React from 'react';

const Stores = () => (
  <div className='flex w-screen justify-center items-center gap-4 '>
    <Store0 />
    <Store1 />
    <Store2 />
    <Store3 />
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
    <div className='flex flex-col w-72 h-[340px] bg-white gap-5 rounded'>
      <div className=' mb-[-70px]'>{childrenArray[0]}</div>

      <div className='ml-24'>{childrenArray[1]}</div>

      <div className='flex justify-center items-center'>
        <span className=' font-semibold text-2xl text-ml-black'>{title}</span>
      </div>
      <div className='flex gap-1 items-center justify-center'>
        {childrenArray[2]}
        {childrenArray[3]}
        {childrenArray[4]}
      </div>
      <div className='flex justify-center items-center'>
        <span className=' text-base font-semibold text-ml-gray'>
          Ver tienda
        </span>
      </div>
    </div>
  );
};

const BannerStoreImage = ({ src, alt }: ImageProp) => (
  <Image src={src} alt={alt} width={288} height={95} className=' rounded-t' />
);

const StoreImage = ({ src, alt }: ImageProp) => (
  <Image
    src={src}
    alt={alt}
    width={80}
    height={80}
    className='rounded-lg shadow-md'
  />
);

const ItemStoreImage = ({ src, alt }: ImageProp) => (
  <Image
    src={src}
    alt={alt}
    width={80}
    height={80}
    className='rounded-lg border-solid border-ml-gray-light border-2'
  />
);

const Store0 = () => (
  <Store title='Lego'>
    <BannerStoreImage src='/Tiendas-1.png' alt='Tiendas 1' />
    <StoreImage src='/Tiendas-1-1.png' alt='Tiendas 1' />
    <ItemStoreImage src='/Tiendas-1-item-1.png' alt='Item 1' />
    <ItemStoreImage src='/Tiendas-1-item-2.png' alt='Item 2' />
    <ItemStoreImage src='/Tiendas-1-item-3.png' alt='Item 3' />
  </Store>
);

const Store1 = () => (
  <Store title='Xiaomi'>
    <BannerStoreImage src='/Tiendas-2.png' alt='Tiendas 1' />
    <StoreImage src='/Tiendas-2-2.png' alt='Tiendas 1' />
    <ItemStoreImage src='/Tiendas-2-item-1.png' alt='Item 1' />
    <ItemStoreImage src='/Tiendas-2-item-2.png' alt='Item 2' />
    <ItemStoreImage src='/Tiendas-2-item-3.png' alt='Item 3' />
  </Store>
);

const Store2 = () => (
  <Store title='Oster'>
    <BannerStoreImage src='/Tiendas-3.png' alt='Tiendas 1' />
    <StoreImage src='/Tiendas-3-3.png' alt='Tiendas 1' />
    <ItemStoreImage src='/Tiendas-3-item-1.png' alt='Item 1' />
    <ItemStoreImage src='/Tiendas-3-item-2.png' alt='Item 2' />
    <ItemStoreImage src='/Tiendas-3-item-3.png' alt='Item 3' />
  </Store>
);

const Store3 = () => (
  <Store title='Nikon'>
    <BannerStoreImage src='/Tiendas-4.png' alt='Tiendas 1' />
    <StoreImage src='/Tiendas-4-4.png' alt='Tiendas 1' />
    <ItemStoreImage src='/Tiendas-4-item-1.png' alt='Item 1' />
    <ItemStoreImage src='/Tiendas-4-item-2.png' alt='Item 2' />
    <ItemStoreImage src='/Tiendas-4-item-3.png' alt='Item 3' />
  </Store>
);

export { Stores };
