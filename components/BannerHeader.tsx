import Image from 'next/image';

const BannerHeader = () => (
  <div className='debug w-screen h-32 flex-col items-center flex lg:h-80'>
    <div className=' mb-[-35px]'>
      <Image
        src='/Novedades-1.png'
        alt='Banner Header'
        width={1600}
        height={320}
        className='w-96 h-32 lg:w-[1600px] lg:h-80'
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
