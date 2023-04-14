import { useCartContext } from '@context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
  const {
    setOpenCart,
    cartItems,
    setCartItems,
    numberOfItemsInCart,
    setNumberOfItemsInCart,
  } = useCartContext();

  function addToCartTest() {
    setCartItems([...cartItems, { name: 'Item', price: 1, quantity: 1 }]);
    setNumberOfItemsInCart(numberOfItemsInCart + 1);
    setOpenCart(true);
  }
  return (
    <button type='button' onClick={() => addToCartTest()}>
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
