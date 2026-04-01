import { useState, useEffect } from "react";
import useSwiggyApi from "./useSwiggyApi";

const useFilter = () => {
    const swiggyapi = useSwiggyApi()

    const [ filtered, setFiltered ] = useState([]);

    useEffect(() => {
        setFiltered(func);
    },[swiggyapi])

    const func = swiggyapi.filter((res) => res.info.avgRating >= 4.5);

    return filtered;
}

export default useFilter;