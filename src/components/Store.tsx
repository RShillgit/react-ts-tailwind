import storeItems from "../data/items.json"
import { StoreItem } from "./StoreItem"

export function Store() {
    return (
        <>
            <h1 className="text-3xl font-bold">Store</h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">

                {storeItems.map(item => {
                    return (
                        <div className=""
                        key={item.id}>
                            <StoreItem {...item} />
                        </div>
                    )
                })}

            </div>
        </>
    )
}