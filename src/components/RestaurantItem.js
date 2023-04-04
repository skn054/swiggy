import React from 'react'
import plasticFork from '../images/plastic-spoon-fork.jpg'

export default function RestaurantItem({restaurantMenu}) {
  return (
    <>
      
      <div className="details-menu-item"> 
          <div className="veg-nonveg">
            {/* <i className="styles_iconVeg__shLxJ"></i> */}
            <span style={restaurantMenu?.info?.isVeg? {color:"green",padding:"0.3rem"} : {color:"red",padding:"0.3rem"}}  >&#9679;&#8414;</span>
            <p className="menu-item-name">{restaurantMenu?.info?.name}</p>
            <p className="menu-item-name"> &#x20b9; {restaurantMenu?.info?.price ?  (restaurantMenu?.info?.price / 100) : (restaurantMenu?.info?.defaultPrice / 100)}</p>
            <p className="menu-item-desc">{restaurantMenu?.info?.description}</p>
          </div>
          <div className="details-item-btn-img">
            <button>
            {/* {restaurantMenu. imageId ? <img  className="details-item-image"    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${restaurantMenu?.info?.imageId}`}/> : ''} */}
            <img  alt = "photo" className="details-item-image"    src={ restaurantMenu?.info?.imageId ? `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${restaurantMenu?.info?.imageId}` : plasticFork}/>
            <div className="details-item-btn-img-desc">Add</div></button>
             
          </div>
      </div>
    </>
  )
}
