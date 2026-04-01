import { useEffect, useState, useContext } from "react";
import { CND_LOGO } from "./utils/constants.js";
import { Link } from "react-router-dom";
import useNetStatus from "./hooks/useNetStatus.js";
import UserContext from "./utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () =>{

    const [loginBtn, setloginBtn] = useState("Login")

    useEffect(() => {
        // console.log("useEffect called")
    },[loginBtn])

    const { userName, ownerName } = useContext(UserContext)

    const online_status = useNetStatus()

    const initials = (name = "") => {
        // if (!name) return "df";
        const parts = name.trim().split(" ")

        const FirstName = parts[0]?.[0]
        const SecondName = parts[1]?.[0]
        const result = (FirstName + SecondName)

        return (result.toUpperCase())
    }

    // const dispatch = useSelector()

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)

    return(
        <div className="sticky top-0 flex flex-row justify-between items-center my-2 bg-white border border-black rounded-xl z-50">
            <Link to="/">
                <div className="mx-6.25 list-none">            
                    <li><img alt="burger-logo" width="50px" src={CND_LOGO} /></li>
                </div>            
            </Link>

            <div>
                <ul className="flex flex-row justify-between w-200 mx-5 items-center">
                    <li>
                        Online Status = {online_status ? "Online ✅" : "Offline ❌"}
                    </li>
                    <li>
                        <Link to="/">Home</Link> 
                    </li>

                    <li>
                        <Link to="/about">About us</Link> 
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart = {cartItems.length} items</Link>
                    </li>    
                                     
                    <button className="border border-black bg-gray-300 rounded-xl px-1 items-center" onClick={()=>{loginBtn === "Login" ? setloginBtn("Logout"): setloginBtn("Login")}}>{loginBtn}</button>
                    
                    <li className="border border-black bg-gray-100 rounded-full px-1 py-0.5 items-center">{initials(ownerName)}</li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Header;