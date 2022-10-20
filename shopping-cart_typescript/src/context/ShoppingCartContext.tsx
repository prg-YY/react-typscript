import React, { createContext, useContext } from "react"
import { ShoppingCart } from "../components/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage"

type ShoppingCartProviderProps = {
  children: React.ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartContextProps = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartItems: CartItem[]
  cartQuantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  )

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }
  // second way to soleving
  const increaseQuantity = (id: number) => {
    setCartItems((prevCartItems) => {
      const item = prevCartItems.find((item) => item.id === id)
      if (item) {
        return prevCartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [...prevCartItems, { id, quantity: 1 }]
      }
    })
  }
  //third way to solving
  // const increaseQuantity = (id: number) => {
  //   setCartItems((currItems) => {
  //     if (currItems.find((item) => item.id === id) == null) {
  //       return [...currItems, { id, quantity: 1 }]
  //     } else {
  //       return currItems.map((item) => {
  //         if (item.id === id) {
  //           return { ...item, quantity: item.quantity + 1 }
  //         } else {
  //           return item
  //         }
  //       })
  //     }
  //   })
  // }
  const decreaseQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return [...currItems.filter((item) => item.id !== id)]
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  const removeFromCart = (id: number) => {
    setCartItems((currItems) => {
      return [...currItems.filter((item) => item.id !== id)]
    })
  }
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}
