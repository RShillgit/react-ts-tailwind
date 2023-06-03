import storeItems from "../data/items.json"

export function Store() {
    return (
        <>
            <h1 className="text-3xl font-bold">Store</h1>

            <div className="flex flex-col">

                {storeItems.map(item => {
                    return (
                        <div key={item.id}>{JSON.stringify(item)}</div>
                    )
                })}

            </div>
        </>
    )
}