import { useCartContext } from '@context/CartContext';
import { Modal } from './Modal';
import { AiFillDelete } from 'react-icons/ai';

const ModalCart = () => {
  const {
    openCart,
    setOpenCart,
    cartItems,
    totalPrice,
    deleteAllItemsFromCart,
    deleteItemFromCart,
  } = useCartContext();

  return (
    <Modal
      open={openCart}
      setOpen={setOpenCart}
      modalTitle='Carrito de compras'
    >
      <div className='flex flex-col h-[50vh] p-3 justify-between'>
        <table className='block overflow-y-auto'>
          <thead>
            <tr>
              <th></th>
              <th>Producto</th>
              <th>Precio Unitario</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={`item_${item.name}_price_${item.price}`}>
                <td>
                  <button
                    type='button'
                    className=' bg-ml-gray-bg hover:bg-ml-gray p-1'
                    onClick={() => deleteItemFromCart(cartItems.indexOf(item))}
                  >
                    <AiFillDelete className=' text-lg text-red-600 hover:text-red-300' />
                  </button>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex gap-2 pr-12 justify-between'>
          <button
            type='button'
            className=' bg-red-300 p-2 rounded-lg font-bold hover:bg-red-500'
            onClick={() => deleteAllItemsFromCart()}
          >
            Vaciar carrito
          </button>
          <button
            type='button'
            className=' bg-ml-gray-bg p-2 rounded-lg font-bold'
            onClick={() => setOpenCart(false)}
          >
            Cerrar
          </button>
          <div className='flex items-center'>
            <span>Total: </span>
            <span>{totalPrice}</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export { ModalCart };
