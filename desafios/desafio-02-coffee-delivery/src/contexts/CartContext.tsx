import { createContext, ReactNode, useContext, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffesList/CoffeeCard'

interface ICartItems extends Coffee {
  quantity: number
}

interface ICartContext {
  cartItems: ICartItems[]
  cartQuantity: number
  addCoffee: (coffee: Coffee, quantity: number) => void
  deleteProduct: (id: number) => void
  updateQuantity: (id: number, amount: number) => void
  cleanCart: () => void
}

export const CartContext = createContext<ICartContext>({} as ICartContext)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<ICartItems[]>([])
  const cartQuantity = cartItems.length

  function addCoffee(coffee: Coffee, quantity: number) {
    const coffeeAlreadyExists = cartItems.find((c) => c.id === coffee.id)

    if (coffeeAlreadyExists) {
      const newCoffeeProducts = cartItems.map((cartItem) => {
        if (cartItem.id === coffee.id) {
          console.log('encontrou')
          cartItem.quantity = quantity + cartItem.quantity
        }

        return cartItem
      })

      setCartItems(newCoffeeProducts)
    } else {
      setCartItems((state) => [...state, { ...coffee, quantity }])
    }
  }

  function deleteProduct(id: number) {
    const coffeeAlreadyExists = cartItems.find((cartItem) => cartItem.id === id)

    if (coffeeAlreadyExists) {
      const updatedCoffees = cartItems.filter((coffee) => coffee.id !== id)

      setCartItems(updatedCoffees)
    }
  }

  function updateQuantity(id: number, amount: number) {
    const coffeeExists = cartItems.find((cartItem) => cartItem.id === id)

    if (coffeeExists?.quantity === 1 && amount === -1) {
      deleteProduct(id)
    } else {
      const updatedCoffeeList = cartItems.map((cartItem) => {
        if (cartItem.id === id) {
          cartItem.quantity = cartItem.quantity + amount
        }

        return cartItem
      })

      setCartItems(updatedCoffeeList)
    }
  }

  function cleanCart() {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffee,
        deleteProduct,
        updateQuantity,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  return context
}
