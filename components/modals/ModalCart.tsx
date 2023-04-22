import { useCartContext } from '@context/CartContext';
import { Modal } from '@modals/Modal';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';

const ModalCart = () => {
  const {
    openCart,
    setOpenCart,
    cartItems,
    totalPrice,
    deleteAllItemsFromCart,
    deleteItemFromCart,
  } = useCartContext();

  const deleteItem = (index: number) => {
    deleteItemFromCart(index);
    toast.success('Producto eliminado del carrito', {
      position: 'bottom-center',
      autoClose: 2500,
      theme: 'dark',
    });
  };

  const deleteAllItems = () => {
    deleteAllItemsFromCart();
    toast.success('Todos los productos eliminados del carrito', {
      position: 'bottom-center',
      autoClose: 2500,
      theme: 'dark',
    });
  };

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
                    onClick={() => deleteItem(cartItems.indexOf(item))}
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
            onClick={() => deleteAllItems()}
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
