import React from 'react'
import RestaurantCard from './RestaurantCard'
import {restaurantList} from './config'
import Restaurant from './Restaurant'

export default function Body() {
  return (
    <div className='restaurant-list'>
        
        {restaurantList.cards?.map(item =>{
          return( <RestaurantCard key={item.data.id}>

              <Restaurant key={item.data.id} data={item.data}/>
          </RestaurantCard>
          )
        })}
        
      
    </div>
  )
}
