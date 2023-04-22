import { useCartContext } from '@context/CartContext';
import { Button } from '@mui/material';

interface OfertaProps {
  nombre: string;
  imagen: string;
  precio: string;
  descuento: string;
  promo: string;
}



const Oferta = ({nombre,imagen, precio, descuento, promo} : OfertaProps) => {
  
  const { setOpenCart, numberOfItemsInCart, addToCart } = useCartContext();

  const precioEnNumber = Number(precio)

  function addToCartTest() {
    addToCart({
      name: nombre,
      price: precioEnNumber,
      quantity: 1,
    });
    setOpenCart(true);
  }

  return (
    <div className='absoluteflex flex-col w-[190px] h-[350px] rounded bg-white'>
      <div className='border w-[190px] h-[224px]'>
        <img src={imagen} width={224} height={224}/>
      </div>
      <div className='p-5'>
        <span className='mr-3 text-xl font-normal'>${precio}</span>
        <span className='text-sm text-ml-green'>{descuento}% OFF</span>
        <div>
          <span className='text-sm font-bold text-ml-green'>{promo}</span>
        </div>
      </div>
      <div className='flex justify-end'>
        <Button variant='text' onClick={addToCartTest}>+</Button>
      </div>
    </div>
  )
}

export {Oferta}
