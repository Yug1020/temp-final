const ShimmerUI = ()=>{
    
    const Shimmecard = []
    
    for ( let i=0; i<12; i++){
        Shimmecard.push(<div key={i} className="bg-gray-200 h-87 w-61"></div>)
    }
    return (
        <div> 
            <div className="flex flex-row">
                <button className="mr-0.5 my-0.5 h-7 px-1 rounded-md w-[94.5%]  bg-gray-200"></button>
                <button className="bg-gray-200 rounded-2xl px-1.5 text-gray-200">Search </button>
            </div>
            <button className="my-2  h-7 bg-gray-200 text-gray-200 rounded-md px-1">Top Rated Restaurants</button>
            <div className="grid grid-row-2 grid-cols-6 gap-2">
                {Shimmecard}
            </div>
        </div>           
    )

}

export default ShimmerUI;