import Image from 'next/image';

const BannerHeader = () => (
  <div className='w-screen h-32 flex-col items-center flex lg:h-80'>
    <div className=' mb-[-25px]'>
      <Image
        src='/Novedades-1.png'
        alt='Banner Header'
        width={1600}
        height={320}
        className='w-96 h-32 lg:w-[1600px] lg:h-80'
      />
    </div>
    <div>
      <ul className='flex list-none gap-2 h-2 justify-center w-screen'>
        <li>
          <button type='button' className='button-selection' />
        </li>
        <li>
          <button type='button' className='button-selection' />
        </li>
        <li>
          <button type='button' className='button-selection' />
        </li>
        <li>
          <button type='button' className='button-selection' />
        </li>
        <li>
          <button type='button' className='button-selection' />
        </li>
        <li>
          <button type='button' className='button-selection' />
        </li>
      </ul>
    </div>
  </div>
);

export { BannerHeader };
