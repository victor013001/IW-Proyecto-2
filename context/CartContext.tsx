import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface cartItemsProps {
  name: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  numberOfItemsInCart: number;
  cartItems: cartItemsProps[];
  openCart: boolean;
  setOpenCart: Dispatch<SetStateAction<boolean>>;
  totalPrice: number;
  deleteAllItemsFromCart: () => void;
  // eslint-disable-next-line no-unused-vars
  addToCart: (newCartItem: cartItemsProps) => void;
  // eslint-disable-next-line no-unused-vars
  deleteItemFromCart: (index: number) => void;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

export const useCartContext = () => useContext(CartContext);

interface CartContextProviderProps {
  children: JSX.Element[];
}

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState<number>(0);
  const [cartItems, setCartItems] = useState<cartItemsProps[]>([]);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addToCart = (newCartItem: cartItemsProps) => {
    const cartItemIndex = cartItems.findIndex(
      (item) =>
        item.name === newCartItem.name && item.price === newCartItem.price
    );

    if (cartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[cartItemIndex].quantity += newCartItem.quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, newCartItem]);
    }
    setNumberOfItemsInCart(numberOfItemsInCart + 1);
    setTotalPrice(totalPrice + newCartItem.price);
  };

  const deleteAllItemsFromCart = () => {
    setCartItems([]);
    setNumberOfItemsInCart(0);
    setTotalPrice(0);
  };

  const deleteItemFromCart = (index: number) => {
    const { name, price, quantity } = cartItems[index];
    setCartItems(
      cartItems.filter((item) => item.name !== name || item.price !== price)
    );
    setNumberOfItemsInCart(numberOfItemsInCart - quantity);
    setTotalPrice(totalPrice - price * quantity);
  };

  return (
    <CartContext.Provider
      value={{
        numberOfItemsInCart,
        cartItems,
        addToCart,
        openCart,
        setOpenCart,
        totalPrice,
        deleteAllItemsFromCart,
        deleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider };
