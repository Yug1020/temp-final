import { React, lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/contact";
import Resmenu from "./src/components/Resmenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import ShimmerUI from "./src/components/ShimmerUI";
import MyCart from "./src/components/Mycart";
import UserContext from "./src/components/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/components/Store/appStore";


const Grocery = lazy(() => import("./src/components/Grocery"))


const App = () => {
    const [ liveLocation, setLiveLocation ] = useState(""); 
    
    useEffect(()=>{
        console.log(liveLocation)
    },[])

    return(
        <div>
            <Provider store = {appStore}>
            <UserContext.Provider value={{currentLocation:liveLocation, setLiveLocation, ownerName:"Yugandhar Dhore"}}>
                <Header></Header>
                <Outlet></Outlet>
            </UserContext.Provider>
            </Provider>
        </div>
    )
}

const router = createBrowserRouter([
    {   
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "",
                element: <Body></Body>
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path:"/restaurant_menu/:res_id",
                element:<Resmenu></Resmenu>,
                // element:<RestaurantMenu></RestaurantMenu>,
            },
            {
                path:"/grocery",
                element:<Suspense fallback = {<ShimmerUI></ShimmerUI>} > <Grocery></Grocery> </Suspense> 
            },
            {
                path:"/cart",
                element:<MyCart></MyCart>
            },
            {
                path:"/*",
                element:<Error></Error>
            }
            
        ],
        // errorElement:<Error></Error>,
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router}/>);