import { useCartContext } from '@context/CartContext';
import { Modal } from './Modal';
import { MdDelete } from 'react-icons/md';

const ModalCart = () => {
  const { openCart, setOpenCart, cartItems } = useCartContext();

  return (
    <Modal
      open={openCart}
      setOpen={setOpenCart}
      modalTitle='Carrito de compras'
    >
      <div className='flex flex-col h-[50vh] p-3 gap-2'>
        <table className='block overflow-y-auto'>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio Unitario</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={`item_${item.name}`}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
                <td>
                  <button type='button' className=' bg-red-600'>
                    <MdDelete className='text-white' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex gap-2'>
          <span>Total: </span>
          <span>No se como :,v</span>
        </div>
      </div>
    </Modal>
  );
};

export { ModalCart };
