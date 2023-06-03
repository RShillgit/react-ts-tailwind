import { useShoppingCart } from "../context/shoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json"

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }:ShoppingCartProps) {

    const { closeCart, cartItems } = useShoppingCart();

    return (
        <>
            {cartItems.length > 0 && (
                <div className={`ease-in-out duration-300 fixed top-14 right-0 bg-slate-100 shadow-md lg:w-1/4 md:w-1/2 w-full h-screen ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="p-5">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl text-center">Cart</h1>
                            <button className="text-3xl text-gray-700 hover:text-gray-900" onClick={closeCart}>x</button>
                        </div>
                        <div className="flex flex-col gap-4">
                            {cartItems.map(item => {
                                return (
                                    <CartItem key={item.id} {...item} />
                                )
                            })}

                            <div className="flex justify-end text-xl font-bold">Total: {formatCurrency(cartItems.reduce((total, cartItem) => {
                                    const item = storeItems.find(i => i.id === cartItem.id)
                                    return total + (item?.price || 0) * cartItem.quantity
                                }, 0)
                            )}</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}