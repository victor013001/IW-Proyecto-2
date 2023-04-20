import Image from 'next/image';

interface CardBeneficionsProps{
  backImage: string; 
  backName: string;
  forwardImage: string;
  forwardName: string;
  text1?: string;
  text2: string;
  text3: string;
}
const CardBeneficions = ({backImage, backName, forwardName, forwardImage, text1, text2, text3}: CardBeneficionsProps) => {
  return (
    <>
      <div className='relative h-[206px] w-[315px]'>
        <Image
          className='rounded-md'
          src={backImage}
          alt={backName}
          width={315}
          height={250}
        />
        <div className='debug flex -mt-20 pl-4 gap-4 h-[60px]'>
          <Image src={forwardImage} alt={forwardName} width={60} height={60} />
          <div className='flex flex-col gap-[5px] pt-[5px] pb-[15px]'>
            <span className='font-sans text-white text-xs'>{text1}</span>
            <span className='font-sans text-white text-xs'>{text2}</span>
            <span className='font-sans text-white text-xs'>{text3}</span>
          </div>
        </div>
      </div>
    </>
  );
};



export {CardBeneficions};