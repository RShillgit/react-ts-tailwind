import { useShoppingCart } from "../context/shoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }:CartItemProps) {
    const { removeFromCart } = useShoppingCart(); 
    const item = storeItems.find(i => i.id === id);
    if(item == null) return null;  

    return (
        <div className="flex flex-row gap-2 items-center justify-between">

            <div className="flex flex-row gap-2">
                <div className="bg-red-400 w-24 h-24"></div>
                <div className="flex flex-col justify-center">
                    <div className="flex gap-2 items-center">
                        <span className="text-lg">{item.name}</span>
                        <span className="text-gray-600">x{quantity}</span>
                    </div>
                    <span className="text-gray-600">{formatCurrency(item.price)}</span>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <span>{formatCurrency(item.price * quantity)}</span>
                <button className="border-slate-600 hover:bg-slate-200 border rounded-sm w-8 h-8" onClick={() => removeFromCart(item.id)}>x</button>
            </div>
        </div>
    )
}