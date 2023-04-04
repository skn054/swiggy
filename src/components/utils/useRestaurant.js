import { useEffect, useState } from "react";
import { MENU_ITEM_TYPE_KEY } from "../config";

const useRestaurant = (url) =>{

    const [restaurantInfo,setRestaurantInfo] = useState(null);
  const [restaurantMenu,setRestaurantMenu] = useState([]);
    // const [isLoading,setIsLoading]  = useState(true)
   

    async function getRestaurantDetails(url){
        try{
            const res = await fetch(url);
            const data = await res.json();
            setRestaurantInfo(data?.data?.cards[0]?.card?.card?.info)
                const restaurantMenuDetails = data?.data?.cards?.find(item => item.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(x => x.card?.card)?.filter(item => item['@type'] === MENU_ITEM_TYPE_KEY).map(item => item?.itemCards).flat().map(item => item);
            
                // console.log(restaurantMenuDetails);
                const uniqueMenuItems = []
                restaurantMenuDetails.forEach( item => {
                  if(!uniqueMenuItems.find(x=>  x?.card?.info?.id === item?.card?.info?.id)){
                        uniqueMenuItems.push(item);
                  }
                })
                // console.log(uniqueMenuItems)
                setRestaurantMenu(uniqueMenuItems);
                // setRestaurantMenu(data?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
        
        }
        catch(error){
            console.log(error);
        }
            
        }
        
    
    useEffect(()=>{
        getRestaurantDetails(url);
       
    },[url])

    return [restaurantInfo,restaurantMenu]

}


export default useRestaurant