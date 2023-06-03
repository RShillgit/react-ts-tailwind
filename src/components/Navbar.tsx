import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/shoppingCartContext"

export function Navbar() {

    const { openCart, cartQuantity } = useShoppingCart();

    // Active navbar syles
    const activeClass = ("text-blue-600")

    return (
        <div className="flex justify-between text-lg bg-slate-200 shadow-md p-2">

            <div className="flex gap-4">
                <NavLink to="/" end className={({ isActive, isPending }) => 
                        isPending ? "pending" : isActive ? activeClass : "" 
                    }>
                    Home
                </NavLink>

                <NavLink to="/store" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeClass : ""
                    }>
                    Store
                </NavLink>

                <NavLink to="/about" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? activeClass : ""
                    }>
                    About
                </NavLink>
            </div>

            {cartQuantity > 0 && (
                <button className="relative flex items-center justify-center w-10 h-10 border-cyan-400 border-2 rounded-3xl" onClick={openCart}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s
                        1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 
                        1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 
                        7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/>
                    </svg>
                    <div className="text-sm absolute bottom-0 right-0 translate-y-1/3 translate-x-1/3 flex items-center justify-center rounded-full text-white w-5 h-5 bg-red-500">{cartQuantity}</div>
                </button>
            )}

        </div>
    )
}