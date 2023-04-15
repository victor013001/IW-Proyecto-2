import Image from 'next/image';

const Categories = () => {
  {
  }
  return (
    <section className='debug flex w-screen justify-center items-center'>
      <Categorie description='Carros, motos y otros'>
        <Image
          src='/Categorie-Cars.svg'
          alt='Carros'
          width={45}
          height={40}
          className=''
        />
      </Categorie>
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
