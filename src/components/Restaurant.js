import React from "react";
import { RESTAURANT_IMAGE_URL } from "./config";

export default function Restaurant({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  sla,
  costForTwoString,
  aggregatedDiscountInfo,
}) {
  // console.log(props);
  return (
    <>
      <img
        className="restaurant-image"
        alt="restaurantimage"
        src={RESTAURANT_IMAGE_URL + cloudinaryImageId}
      ></img>
      <div className="restaurant-desc">
        <div className="desc">{name}</div>
        <div className="cuisines">{cuisines.join(", ")}</div>
      </div>

      <div className="rating-list">
        <div><span className="rating" style={Number(avgRating) >= 4 ? {backgroundColor:"#48c479"}:{backgroundColor:"#db7c38"}}>{avgRating}</span></div>
        <div>•</div>
        <div>{sla?.deliveryTime}</div>
        <div>•</div>
        <div>{costForTwoString}</div>
      </div>
      <div className="offer">
        <span className="offer-desc">
          {aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}
        </span>
      </div>
    </>
  );
}
