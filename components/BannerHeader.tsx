import Image from 'next/image';

const BannerHeader = () => (
  <div className='hidden w-screen h-80 flex-col items-center lg:flex'>
    <div className=' mb-[-35px]'>
      <Image
        src='/Novedades-1.png'
        alt='Banner Header'
        width={1600}
        height={320}
        className=' max-w-[1600px] max-h-80'
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
