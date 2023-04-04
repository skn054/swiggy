import React, { useState,useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import Restaurant from "./Restaurant";
import { ShimmerPostList} from "react-shimmer-effects";


function filteresValues(value, items) {
  const filteredValues = items.data.cuisines.filter((item) => {
    return item.toLowerCase().includes(value.toLowerCase());
  });
  return filteredValues.length > 0;
}

export default function Body() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const searchList =
    // searchValue.length > 0
    searchText.length > 0
      ? restaurantList.filter(filteresValues.bind(null, searchText))
      : restaurantList;

  function changeTextListener(e) {
    console.log(e.target.value)
    setSearchText(e.target.value);
    
  }
  useEffect(() => {
    fetchAllRestaurants();
  }, []);

  async function fetchAllRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.511614&lng=78.512193&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    setRestaurantList(result?.data?.cards[2]?.data?.data?.cards);
    setIsLoading(false);
  }

  
  // const [res,isLoading] = useRestaurant(RESTAURANT_LIST,"body");
  // // if(!res) return;

  // // setRestaurantList(res?.data?.cards[2]?.data?.data?.cards);
  // // setIsLoading(false);
  // const inputRef = useRef("");
  // console.log(inputRef)
  // const searchText = inputRef.current?.value;
  // const searchList =
  //   searchText?.length > 0 
  //   ? res.filter(filteresValues.bind(null, searchText))
  //   : res;

  //     // ? restaurantList.filter(filteresValues.bind(null, searchText))
  //     // : restaurantList;

  let result;

  if (isLoading) {
    result = <ShimmerPostList postStyle="STYLE_SIX"  col={4} gap={30} row={2} />;
  } else if (searchList.length === 0 && searchText.length > 0) {
    result = <p>No match found for "{searchText}"</p>;
  } else {
    result = searchList.map((item) => {
      return (
        <RestaurantCard key={item.data.id} id={item.data.id}>
          <Restaurant key={item.data.id} {...item.data} />
        </RestaurantCard>
      );
    });
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // ref={inputRef}
          // update the state variable searchText when we typing in input box
          onChange={changeTextListener}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // user click on button searchData function is called
            // searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">{result}</div>
    </>
  );
}
