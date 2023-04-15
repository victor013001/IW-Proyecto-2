import Image from 'next/image';

const categoriesInfo = [
  {
    image: '/categories/Carros.svg',
    alt: 'Carros',
    description: 'Carros, Motos y Otros',
  },
  {
    image: '/categories/Computacion.svg',
    alt: 'Computación',
    description: 'Computación',
  },
  {
    image: '/categories/Ropa.svg',
    alt: 'Ropa',
    description: 'Ropa y Accesorios',
  },
  {
    image: '/categories/Hogar.svg',
    alt: 'Hogar',
    description: 'Hogar y Muebles',
  },
  {
    image: '/categories/Accesorios.svg',
    alt: 'Accesorios',
    description: 'Accesorios para Vehículos',
  },
  {
    image: '/categories/Electrodomesticos.svg',
    alt: 'Electrodomésticos',
    description: 'Electrodomésticos',
  },
  {
    image: '/categories/Camaras.svg',
    alt: 'Cámaras',
    description: 'Cámaras y Accesorios',
  },
  {
    image: '/categories/Celulares.svg',
    alt: 'Celulares',
    description: 'Celulares y Teléfonos',
  },
  {
    image: '/categories/Belleza.svg',
    alt: 'Belleza',
    description: 'Belleza y Cuidado Personal',
  },
  {
    image: '/categories/Deportes.svg',
    alt: 'Deportes',
    description: 'Deportes y Fitness',
  },
  {
    image: '/categories/Electronica.svg',
    alt: 'Electrónica',
    description: 'Electrónica, Audio y Video',
  },
  {
    image: '/categories/Consolas.svg',
    alt: 'Consolas',
    description: 'Consolas y Videojuegos',
  },
  {
    image: '/categories/Juegos.svg',
    alt: 'Juegos',
    description: 'Juegos y Juguetes',
  },
  {
    image: '/categories/Herramientas.svg',
    alt: 'Herramientas',
    description: 'Herramientas',
  },
];

const Categories = () => {
  {
  }
  return (
    <section className='debug flex w-screen justify-center items-center'>
      <div className='grid grid-cols-2 gap-0.5 lg:grid-cols-7'>
        {categoriesInfo.map((category) => (
          <Categorie
            key={`category_${category.alt}`}
            description={category.description}
          >
            <Image
              src={category.image}
              alt={category.alt}
              width={45}
              height={40}
            />
          </Categorie>
        ))}
      </div>
    </section>
  );
};

interface CategorieProps {
  description: string;
  children: JSX.Element;
}

const Categorie = ({ children, description }: CategorieProps) => (
  <a className='flex flex-col h-[150px] w-[150px] bg-white items-center justify-center gap-3.5 hover:bg-blue-200 cursor-pointer '>
    {children}
    <span className='text-sm text-black text-center'>{description}</span>
  </a>
);

export { Categories };
