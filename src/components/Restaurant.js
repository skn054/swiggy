import React from "react";
import { RESTAURANT_IMAGE_URL } from "./config";

export default function Restaurant(props) {
//   console.log(props);
  return (
    <>
        <img
         className="restaurant-image"
          alt="restaurantimage"
          src={RESTAURANT_IMAGE_URL + props.data.cloudinaryImageId}
        ></img>
        <div className="restaurant-desc">
          <div className="desc">{props.data.name}</div>
          <div className="cuisines">{props.data.cuisines.join(", ")}</div>
        </div>

        <div className="rating-list">
          <div className="rating">{props.data.avgRating}</div>
          <div>•</div>
          <div>{props.data.sla.deliveryTime}</div>
          <div>•</div>
          <div>{props.data.costForTwoString}</div>
        </div>
        <div className="offer">
          <span className="offer-desc">
          {
            props.data?.aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}
        </span>
        </div>
    </>
  );
}
