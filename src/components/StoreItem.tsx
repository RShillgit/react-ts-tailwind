import { useShoppingCart } from "../context/shoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = { // Type to define props object structure
    id: number,
    name: string,
    price: number,
}

export function StoreItem({ id, name, price }:StoreItemProps ) {

    // Cart Context Functions
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

    const quantity:number = getItemQuantity(id);

    return (
        <div className="flex flex-col justify-center items-center">

            <div className="bg-red-400 w-48 h-48"></div>

            <div className="flex justify-between w-1/2">
                <p className="text-lg">{name}</p>
                <p className="text-gray-700">{formatCurrency(price)}</p>
            </div>

            <div>
                {(quantity === 0) 
                ? 
                    <button className="border bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md" onClick={() => increaseCartQuantity(id)}>
                        + Add To Cart
                    </button>
                : 
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex items-center gap-1 justify-center">
                            <button className="border bg-blue-600 hover:bg-blue-700 text-white pl-3 pr-3 pt-1 pb-1 rounded-md" onClick={() => decreaseCartQuantity(id)}>-</button>
                            <p>{quantity} in cart</p>
                            <button className="border bg-blue-600 hover:bg-blue-700 text-white pl-3 pr-3 pt-1 pb-1 rounded-md" onClick={() => increaseCartQuantity(id)}>+</button>
                        </div>
                        <button className="border bg-red-600 hover:bg-red-700 text-white p-1 rounded-md" onClick={() => removeFromCart(id)}>Remove</button>
                    </div>
                }
            </div>
        </div>
    )
}