import { useState, useEffect } from "react";

const useSwiggyApi = () => {
    const [apidata, setApiData]  = useState([])

    useEffect(() => {
        FetchData()
    },[])
    const FetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9581934&lng=72.8320729&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()

        const restaurants = json?.data?.cards?.find(
            (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            
        setApiData(restaurants)
    }
    return(apidata)
}

export default useSwiggyApi;