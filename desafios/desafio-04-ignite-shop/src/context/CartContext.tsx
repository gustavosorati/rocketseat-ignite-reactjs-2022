import { createContext, ReactNode, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  defaultPriceId: string;
}

interface CartProps extends IProduct {
  quantity: number;
}

interface ICartContext {
  productsList: CartProps[];
  bagIsOpen: boolean;
  addProduct: (product: IProduct) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  changeStatusBag: () => Promise<void>;
}

export const  CartContext = createContext<ICartContext>({} as ICartContext);

interface CartProvider {
  children: ReactNode;
}

export const CartProvider = ({children}: CartProvider) => {
  const [bagIsOpen, setBagIsOpen] = useState(false);
  const [productsList, setProductsList] = useState<CartProps[]>([]);

  async function changeStatusBag() {
    setBagIsOpen(!bagIsOpen);
  }

  const addProduct = async (data: IProduct) => {
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

  const deleteProduct = async (id: string) => {
    const remainingProducts = productsList.filter(product => product.id !== id);

    setProductsList(remainingProducts);
  }

  return (
    <CartContext.Provider value={{
      productsList,
      bagIsOpen,
      addProduct,
      deleteProduct,
      changeStatusBag
    }}>
      {children}
    </CartContext.Provider>
  )
}
