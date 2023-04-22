import { Button } from '@mui/material';
import Image from 'next/image';

const DisneySuscribe = () => (
  <section className='flex justify-center items-center '>
    <div className='items-center w-[320px] lg:w-[996px] h-[340px] bg-white rounded-md'>
      <div className=' flex flex-row justify-between items-center h-[87px] header-sub-color'>
        <div className='text-white text-lg'>
          <span className='font-bold lg:m-6'>Suscríbete al nivel 6 </span>
        </div>
        <div className='flex flex-col text-white'>
          <span className='text-sm line-through'>$56.690</span>
          <div>
            <span className='text-lg font-bold '>$17.000</span>
            <span className='text-sm mr-6'>/mes</span>
          </div>
        </div>
      </div>
      <div className=' flex flex-col gap-8 p-4'>
        <div className='items-center '>
          <span>Consigue los mejores beneficios de Mercado Libre</span>
        </div>
        <div className='flex flex-row justify-between items-center gap-48'>
          <div className='w-[377px] gap-4 flex flex-row justify-center items-center'>
            <Image src='/disney+.png' alt='Disney +' width={75} height={75} />
            <span>Disney+ sin cargo</span>
          </div>
          <div className='hidden w-[377px] gap-4 lg:flex flex-row justify-center items-center'>
            <Image src='/star.png' alt='star' width={75} height={75} />
            <span>Star+ sin cargo</span>
          </div>
          <div className='hidden lg:flex flex-row gap-5'>
            <Image src='/camion.png' alt='camion' width={75} height={75} />
            <div>
              <span>
                Envíos gratis y rápidos desde $ 90.000 y 40% OFF en envíos de
                menos de $ 90.000
              </span>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-end items-center'>
          <Button variant='contained'>Suscribete</Button>
        </div>
      </div>
    </div>
  </section>
);

export { DisneySuscribe };
