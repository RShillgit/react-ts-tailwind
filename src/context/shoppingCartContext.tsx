import { createContext, ReactNode, useState } from "react";
import { useContext } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number,
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

const shoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(shoppingCartContext)
}


export function ShoppingCartProvider( { children }: ShoppingCartProviderProps ) {

    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0; // If cart item exists get the quantity else zero
    }

    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
            // If we dont have this item, create it
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, {id, quantity: 1}]
            } 
            // Else incriment quantity
            else {
                return currItems.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else return item;
                })
            }
        })
    }

    function decreaseCartQuantity(id: number) {

        setCartItems(currItems => {
            // Removing item
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id);
            } 
            // Decriment quantity
            else {
                return currItems.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else return item;
                })
            }
        })

    }

    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id);
        })
    }

    return <shoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
        {children}
    </shoppingCartContext.Provider>
}