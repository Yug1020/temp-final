import { Link } from "react-router-dom";
import { useResMenu } from "./hooks/useResMenu";
import { RestaurantMenu } from "./RestaurantMenu";
import { CLOUD_LINK } from "./utils/constants";
import { useState, useEffect, useContext } from "react";
import UserContext from "./utils/UserContext";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "./Store/cartSlice";
// import  useSwiggyApi from "./hooks/useSwiggApi";

const Resmenu = (props) => {
    const [showMenu, setShowMenu] = useState(false)
    const resInfo = useResMenu()
    // const {liveLocation} = useContext(UserContext)    
    const {currentLocation} = useContext(UserContext)    
    const { resdata } = props;
    const dispatch = useDispatch();

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        console.log(showMenu)
        // console.log(liveLocation)
        console.log(currentLocation)
    },[setShowMenu])

    if(!resInfo){
            return(
            <div className="flex font-semibold text-3xl justify-center">
                <h1 >restaurant is offline</h1>
            </div>
            )
        }
        
    const { name, rating, location, menuItems, deliveryTime, imageId, cuisines} = resInfo
    const initials = (name = "") => {
        if (!name || name.length < 0) return "?"   
        else {return (name[0].toUpperCase())};

        // (!name || name.length < 0) ? " " : return (name[0].toUpperCase())
    }
    
    const handleAdd = (action) => {
        dispatch(addItem(action))
    }

    return(
        <div className="flex flex-col items-center w-full">
            <div className="flex flex-col w-[30%]">
                <div className="flex flex-row border border-zinc-400 rounded-2xl box-border shadow-2xl m-2 p-3 justify-between">
                    <div>
                        <span className="text-3xl font-semibold my-5">{name}</span>
                        <p className="text-gray-400">{cuisines.join(", ")}</p>
                    </div>
                    <img className="w-20 h-20 rounded-lg object-cover" src={ CLOUD_LINK + imageId }></img>
                </div>
                <div className="border border-zinc-400 rounded-2xl box-border shadow-2xl m-2 p-5">
                    <h2 className="text-xl font-semibold ">⭐{rating}</h2>
                    <h2 className="text-xs font-semibold ">{location.locality},{location.locality !== location.areaName && location.areaName}</h2>
                    <h3 className="text-lg">{deliveryTime}</h3>
                </div>
                
                <div onClick={handleMenu} className="flex flex-row justify-between mt-2 border-b-5 border-gray-300 cursor-pointer">
                    <h2 className="text-2xl font-semibold">Menu</h2>
                    <p className="flex items-center">⏬</p>
                </div>

                { showMenu &&
                        menuItems.map((item) =>
                            (   <ul key={item.id} className="flex flex-row justify-between border rounded-b-2xl border-gray-300 bg-gray-50 p-1 my-0.5">
                                    <li className="my-1">{item.name}</li>
                                    <div className="flex flex-row justify-between ">
                                        <li className="my-1 mr-2">{item.price}</li>
                                        <Button onClick = {() => handleAdd(item)} className="bg-red-400 hover:bg-red-600 text-black border border-border cursor-pointer">Add +</Button>
                                    </div>
                                    
                                </ul>
                            )
                        )
                }
                
                {/* <RestaurantMenu></RestaurantMenu> */}
                <div className="flex flex-row justify-between my-5">
                    <Link to="/"> <h3> ⬅  back to the home page </h3> </Link>    
                    {/* <div className="flex flex-row justify-end"> */}
                    <div className="flex flex-row">
                        <p>Current City:- </p>
                        <span className="mx-2 border border-purple-300 bg-purple-300 rounded-full px-0.5">{initials(currentLocation)}</span>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Resmenu;