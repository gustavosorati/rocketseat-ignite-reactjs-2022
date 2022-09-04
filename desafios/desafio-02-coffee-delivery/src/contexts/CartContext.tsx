import { createContext, ReactNode, useState } from 'react'

interface ICoffee {
  id: number
  tags: string[]
  title: string
  description: string
  image: string
  price: number
}

interface ICart {
  id: number
  tags: string[]
  title: string
  description: string
  image: string
  quantity: number
  price: number
}

interface ICartContext {
  cart: ICart[]
  addProduct: (coffee: ICoffee, quantity: number) => void
  deleteProduct: (id: number) => void
  updateQuantity: (id: number, amount: number) => void
}

export const CartContext = createContext<ICartContext>({} as ICartContext)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ICart[]>([])

  function addProduct(coffee: ICoffee, quantity: number) {
    const coffeeAlreadyExists = cart.find((c) => c.id === coffee.id)

    if (coffeeAlreadyExists) {
      const newCoffeeProducts = cart.map((c) => {
        if (c.id === coffee.id) {
          console.log('encontrou')
          c.quantity = quantity + c.quantity
        }

        return c
      })

      setCart(newCoffeeProducts)
    } else {
      setCart((state) => [...state, { ...coffee, quantity }])
    }
  }

  function deleteProduct(id: number) {
    const coffeeAlreadyExists = cart.find((c) => c.id === id)

    if (coffeeAlreadyExists) {
      const updatedCoffees = cart.filter((coffee) => coffee.id !== id)

      setCart(updatedCoffees)
    }
  }

  function updateQuantity(id: number, amount: number) {
    const coffeeExists = cart.find((coffee) => coffee.id === id)

    if (coffeeExists?.quantity === 1) {
      deleteProduct(id)
    } else {
      const updatedCoffeeList = cart.map((coffee) => {
        if (coffee.id === id) {
          if (coffee.quantity === 1) {
            deleteProduct(id)
          } else {
            coffee.quantity = coffee.quantity + amount
          }
        }

        return coffee
      })

      setCart(updatedCoffeeList)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        deleteProduct,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
