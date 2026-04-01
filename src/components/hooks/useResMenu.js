import { res_menu } from "../utils/mock_data_res_menu";
import { useState, useEffect } from 'react'
import { useParams } from "react-router";

export const useResMenu = () => {
    
    const [ resInfo, setResInfo ] = useState(null)
    const { res_id } = useParams()
    

    useEffect( () => {
        fetched_data()
    }, [])

    const fetched_data = () => {
        const resInfo = res_menu[ res_id ]

        setResInfo(resInfo)
    }

    return resInfo;
}