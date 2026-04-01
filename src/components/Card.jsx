import { CLOUD_LINK } from "./utils/constants";

const Card = ({resData}) => {
   const { name, avgRating, slaString, cuisines, areaName, cloudinaryImageId } = resData;
    return(
        <div className="border bg-gray-300 m-px p-1 rounded-2xl">
            <img className="w-100% h-50% rounded-t-2xl"
            src={
                CLOUD_LINK
                + resData.cloudinaryImageId
                }/>
            <div>
                <h2 className="  block w-56 whitespace-nowrap overflow-hidden text-ellipsis">{name}</h2>  
                <h2 className="">{avgRating} {slaString}</h2>
                <p className="  block w-56 whitespace-nowrap overflow-hidden text-ellipsis">{cuisines.join(", ")}</p> 
                <p className="">{areaName}</p>
                </div>  
        </div>
    )
}
// my code
export const CardWrapped = (Card) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white p-1">Recommended</label>
                <Card {...props}></Card>
            </div>
        )
    }
}

export default Card;