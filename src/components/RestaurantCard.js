import React from "react";
import { Link } from "react-router-dom";
export default function RestaurantCard(props) {
  return (
    <div className="restaurant-card" >
      <Link to={"/restaurant/" + props.id} className="restaurant-card-link">
        {props.children}
        </Link>
    </div>
  );
}
