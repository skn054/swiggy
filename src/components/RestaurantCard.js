import React from 'react'


export default function RestaurantCard(props) {
  return (
    <a className='restaurant-card' href=''>
      {props.children}
    </a>
  )
}
