import { createContext } from "react";

const UserContext = createContext({
    userName : "Default User",
    ownerName : "Yugandhar Dhore",
    currentLocation : "India"
})

export default UserContext;