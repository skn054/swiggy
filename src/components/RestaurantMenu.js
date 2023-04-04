import React from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_IMAGE_URL } from './config'
import RestaurantItem from "./RestaurantItem";
import { MenuShimmer } from "./Shimmer";
// import { MENU_ITEM_TYPE_KEY } from "./config";
import useRestaurant from "./utils/useRestaurant";


export default function RestaurantMenu() {
  // const [restaurantInfo,setRestaurantInfo] = useState(null);
  // const [restaurantMenu,setRestaurantMenu] = useState([]);
  const params = useParams();
  const url =  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.511614&lng=78.512193&restaurantId=${params?.id}`;
  /**
   * commented below code to use custom hook to fetch data.
   */
  // async function getRestaurantMenu() {
  //   try{
  //     const res = await fetch(
  //       `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.511614&lng=78.512193&restaurantId=${params?.id}`
  //     );
  //     const data = await res.json();
  //     setRestaurantInfo(data?.data?.cards[0]?.card?.card?.info)
  //     const restaurantMenuDetails = data?.data?.cards?.find(item => item.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(x => x.card?.card)?.filter(item => item['@type'] === MENU_ITEM_TYPE_KEY).map(item => item?.itemCards).flat().map(item => item);
  
  //     console.log(restaurantMenuDetails);
  //     const uniqueMenuItems = []
  //     restaurantMenuDetails.forEach( item => {
  //       if(!uniqueMenuItems.find(x=>  x?.card?.info?.id === item?.card?.info?.id)){
  //             uniqueMenuItems.push(item);
  //       }
  //     })
  //     console.log(uniqueMenuItems)
  //     setRestaurantMenu(uniqueMenuItems);
  //     // setRestaurantMenu(data?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
  //   }
  //   catch(error){
  //     console.log(error);
  //     setRestaurantInfo(null);
  //   }
    
  // }
  // useEffect(() => {
  //   getRestaurantMenu();
  // }, []);

  // if(null)
  //   return;

  const [restaurantInfo,restaurantMenu]  = useRestaurant(url);
  return !restaurantInfo?<MenuShimmer/> : (
    <div>
      <div className="menu-header">
        <div className="menu-image">
          {/* {restaurantInfo} */}
          <img src={RESTAURANT_IMAGE_URL + restaurantInfo?.cloudinaryImageId } alt ="restaurant Image"/>
        </div>
        <div className="menu-desc">
          <div className="menu-desc-summary">
            <h2 className="restaurant-title">{restaurantInfo?.name}</h2>
            <h4 className="restaurant-cuisines">{restaurantInfo?.cuisines.join(", ")}</h4>
            <p className="restaurant-location">{restaurantInfo?.locality}, {restaurantInfo?.sla?.lastMileTravel} kms</p>
          </div>
          <div className="menu-add-info">
            <p className="rating" style={Number(restaurantInfo?.avgRating) >= 4 ? {backgroundColor:"#48c479"}:{backgroundColor:"#db7c38"}}>{(restaurantInfo?.avgRating?.toFixed(1))}</p>
            <div className="restaurant-rating-slash">|</div>
            <span>{restaurantInfo?.sla?.deliveryTime} mins</span>
            <div className="restaurant-rating-slash">|</div>
            <p>{restaurantInfo?.costForTwoMessage}</p>
          </div>
        </div>
      </div>
      <h4 className="menu-item-title">{restaurantMenu?.title}</h4>
    
      {restaurantMenu.flat().map(item => {
        return <RestaurantItem key={item?.card?.info?.id} restaurantMenu={item.card}/>
      })}
    </div>
  );
}
