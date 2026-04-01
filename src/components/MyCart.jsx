import { useSelector, useDispatch } from "react-redux";
import Resmenu from "./Resmenu";
import { Button } from "./ui/button";
import { addItem, removeItem, clearItems } from "./Store/cartSlice";


const MyCart = () => {
    const itemList = useSelector((store) => store.cart.items);
    const clearcart = useDispatch()
    const handleclear = () => {
        clearcart(clearItems())
    }
    
    return(
<div className="flex justify-center w-screen"> 
    <div className="flex flex-col items-center justify-center w-6/12">
        <header className="text-xl font-bold my-4">My Cart</header>
        <div className="w-full">
            {itemList.map((item) => (
                <ul key={item.id} className="flex flex-row justify-between border rounded-b-2xl border-gray-300 bg-gray-50 p-2 my-1">
                    <li className="font-medium">{item.name}</li>
                    <li className="mr-2">{item.price}</li>
                </ul>
            ))}
        </div>
        <Button onClick={() => { handleclear() }}>
            Clear
        </Button>
    </div>
</div>
    )
}

export default MyCart;