import Image from 'next/image';
import { Cart } from '@components/Cart';

const Header = () => (
  <header className='flex bg-yellow-300 px-6 py-3 justify-center'>
    <div className='flex flex-col gap-3 '>
      <div className='flex gap-7'>
        <Image
          src='/MLLogo.svg'
          alt='MercadoLibre Logo'
          width={134}
          height={34}
        />
        <input
          type='text'
          placeholder='Buscar productos, marcas y más...'
          className='text-base px-3 py-2 w-[550px] rounded-sm border-none shadow-md'
        />
      </div>
      <div className='flex justify-center'>
        <div className='flex gap-7 items-center'>
          <div className='w-[134px] pl-2'>
            <span className='text-sm'>Ingresa tu domicilio</span>
          </div>
          <nav>
            <ul className='flex gap-4 w-[550px] text-sm'>
              <li>
                <div className='flex items-center gap-1'>
                  <span>Categorías</span>
                  <button type='button'>
                    <svg
                      width='9'
                      height='10'
                      viewBox='0 0 9 10'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <mask id='path-1-inside-1_1_16' fill='white'>
                        <path d='M4.54688 0.757355L8.78952 5L4.54688 9.24265L0.304229 5L4.54688 0.757355Z' />
                      </mask>
                      <path
                        d='M4.54688 9.24265L3.48621 10.3033L4.54688 11.364L5.60754 10.3033L4.54688 9.24265ZM7.72886 3.93934L3.48621 8.18199L5.60754 10.3033L9.85018 6.06066L7.72886 3.93934ZM5.60754 8.18199L1.36489 3.93934L-0.756431 6.06066L3.48621 10.3033L5.60754 8.18199Z'
                        fill='black'
                        fill-opacity='0.3'
                        mask='url(#path-1-inside-1_1_16)'
                      />
                    </svg>
                  </button>
                </div>
              </li>
              <li>Ofertas</li>
              <li>Historial</li>
              <li>Supermercado</li>
              <li>Moda</li>
              <li>Vender</li>
              <li>Ayuda / PQR</li>
            </ul>
          </nav>
        </div>
        <div className='flex gap-2 items-center'>
          <nav>
            <ul className='flex gap-1.5 text-sm'>
              <li>Crea tu cuenta</li>
              <li>Ingresa</li>
              <li>Mis compras</li>
            </ul>
          </nav>
          <Cart />
        </div>
      </div>
    </div>
  </header>
);

export { Header };
