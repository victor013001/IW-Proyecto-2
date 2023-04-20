import Image from 'next/image';

const Footer = () => (
  <footer className='flex justify-center px-6 py-3 bg-white'>
    <div className='flex flex-col gap-[1px] bg-ml-gray-light'>
      <div className='flex flex-col gap-3 bg-white items-center lg:items-start'>
        <div className='grid grid-cols-2 items-center  gap-6 pt-[15px] lg:flex lg:flex-row'>
          <span className='span-footer'>Trabaja con nosotros</span>
          <span className='span-footer'>Términos y condiciones</span>
          <span className='span-footer'>Cómo cuidamos tu privacidad</span>
          <span className='span-footer'>Accesibilidad</span>
          <span className='span-footer'>Ayuda / PQR</span>
          <span className='span-footer'>www.sic.gov.co</span>
        </div>
        <div className='flex flex-col gap-1 pb-4'>
          <span className='span-footer-secondary'>
            Copyright © 1999-2023 MercadoLibre Colombia LTDA.
          </span>
          <span className='span-footer-secondary'>
            Carrera 17 Numero 93-09 Piso 3, Bogota D.C, Colombia
          </span>
        </div>
      </div>
      <div className='flex flex-col items-center gap-4 bg-white align-middle pt-4 pb-4 lg:items-start lg:flex-row'>
        <Image src='/sic.png' alt='sic' width={140} height={30} />
        <Image src='/pum.png' alt='pum' width={200} height={34} />
      </div>
    </div>
  </footer>
);

export { Footer };
