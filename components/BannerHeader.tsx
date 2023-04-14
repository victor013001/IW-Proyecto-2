import Image from 'next/image';

const BannerHeader = () => (
  <div className='hidden w-screen h-80 flex-col lg:flex'>
    <div className=' mb-[-35px]'>
      <Image
        src='/Novedades-1.png'
        alt='Banner Header'
        width={1024}
        height={320}
        className='w-screen h-80'
      />
    </div>
    <div>
      <ul className='flex list-none gap-1 h-2 justify-center'>
        <li>
          <button type='button' className='button-selection'></button>
        </li>
        <li>
          <button type='button' className='button-selection'></button>
        </li>
        <li>
          <button type='button' className='button-selection'></button>
        </li>
        <li>
          <button type='button' className='button-selection'></button>
        </li>
        <li>
          <button type='button' className='button-selection'></button>
        </li>
        <li>
          <button type='button' className='button-selection'></button>
        </li>
      </ul>
    </div>
  </div>
);

export { BannerHeader };
