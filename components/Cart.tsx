import { FaShoppingCart } from 'react-icons/fa';

interface CartProps {
  numberOfItems?: number;
}

const Cart = ({ numberOfItems = 10 }: CartProps) => (
  <button type='button'>
    <div className='flex flex-col'>
      <FaShoppingCart className='text-2xl' />
      <span className='text-white text-[10px] mt-[-21px] ms-1'>
        {numberOfItems}
      </span>
    </div>
  </button>
);

export { Cart };
