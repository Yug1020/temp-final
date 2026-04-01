import { useState, useEffect, useContext } from "react";
import UserContext from "./UserContext";

const liveLocation = () => {
    const [ liveLocation, setLiveLocation ] = useState();

    useEffect(()=>{
        setlocation(handler)
    },[])

    const handler = () => {
        value = {location}
        onchange = (e) => {e.target.value}
    }

    return (
        <form className="flex flex-row items-center">
          <p>Your current location:-</p>
          <input className="h-5 p-1 border border-black mx-1">
          </input>
        </form>
    )
}

export default liveLocation;