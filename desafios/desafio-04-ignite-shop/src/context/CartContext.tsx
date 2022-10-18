import { createContext, ReactNode, useCallback, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

interface ICart {
  product: IProduct[];
  total: number;
}

interface ICartContext {
  addProduct: (product: IProduct) => void
}

export const  CartContext = createContext<ICartContext>({} as ICartContext);


interface CartProvider {
  children: ReactNode;
}

export const CartProvider = ({children}: CartProvider) => {
  const [cartProducts, setCartProducts] = useState<ICart>({} as ICart);

  const addProduct = (product: IProduct) => {
    console.log(product)
  }


  return (
    <CartContext.Provider value={{addProduct}}>
      {children}
    </CartContext.Provider>
  )
}
