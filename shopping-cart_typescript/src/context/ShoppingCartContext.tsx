import React, { createContext, useContext } from "react"

type ShoppingCartProviderProps = {
  children: React.ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartContextProps = {
  getItemQuantity: (id: number) => number
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([])

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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
