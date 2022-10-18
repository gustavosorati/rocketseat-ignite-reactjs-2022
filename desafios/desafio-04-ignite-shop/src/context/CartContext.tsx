import { createContext, ReactNode, useCallback, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

interface ICart {
  id: string;
  name: string;
  imageUrl: string;
  quantity: number;
  price: string;
}

interface ICartContext {
  productsList: ICart[];
  addProduct: (product: IProduct) => void;
  bagIsOpen: boolean;
  changeStatusBag: () => Promise<void>;
}

export const  CartContext = createContext<ICartContext>({} as ICartContext);


interface CartProvider {
  children: ReactNode;
}

export const CartProvider = ({children}: CartProvider) => {
  const [bagIsOpen, setBagIsOpen] = useState(false);
  const [productsList, setProductsList] = useState<ICart[]>([]);

  async function changeStatusBag() {
    console.log('bag')
    setBagIsOpen(!bagIsOpen);
  }


  const addProduct = (data: IProduct) => {
    const productsExist = productsList.find(prod => prod.id === data.id);

    if(productsExist) {
      const incrementQuantityProduct = productsList.map(prod => {
        if(prod.id === productsExist.id) prod.quantity += 1;

        return prod;
      })

      setProductsList(incrementQuantityProduct);
    } else {
      setProductsList((products) => [...products, {...data, quantity: 1}]);
    }
  }

  console.log(bagIsOpen)
  return (
    <CartContext.Provider value={{
      productsList,
      addProduct,
      bagIsOpen,
      changeStatusBag
    }}>
      {children}
    </CartContext.Provider>
  )
}
