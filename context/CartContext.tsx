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
  setNumberOfItemsInCart: Dispatch<SetStateAction<number>>;
  cartItems: cartItemsProps[];
  setCartItems: Dispatch<SetStateAction<cartItemsProps[]>>;
  openCart: boolean;
  setOpenCart: Dispatch<SetStateAction<boolean>>;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

export const useCartContext = () => useContext(CartContext);

interface CartContextProviderProps {
  children: JSX.Element;
}

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState<number>(0);
  const [cartItems, setCartItems] = useState<cartItemsProps[]>([]);
  const [openCart, setOpenCart] = useState<boolean>(false);

  return (
    <CartContext.Provider
      value={{
        numberOfItemsInCart,
        setNumberOfItemsInCart,
        cartItems,
        setCartItems,
        openCart,
        setOpenCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider };
