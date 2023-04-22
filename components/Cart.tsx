import { useCartContext } from '@context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
  const { setOpenCart, numberOfItemsInCart } = useCartContext();

  return (
    <button type='button' onClick={() => setOpenCart(true)}>
      <div className='flex flex-col'>
        <FaShoppingCart className='text-2xl' />
        <span className='text-white text-[10px] mt-[-21px] ms-1'>
          {numberOfItemsInCart}
        </span>
      </div>
    </button>
  );
};

export { Cart };
