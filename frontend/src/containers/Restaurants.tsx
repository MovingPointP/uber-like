import React, { useEffect } from 'react';
import { Fragment } from "react"

import { fetchRestaurants } from '../apis/restaurants_api';


export const Restaurants = () => {
  useEffect(() => {
  const data = async() => { 
  const result = await fetchRestaurants()
  console.log(result)
  }
  data()
},[])

  return (
    <Fragment>
      レストラン一覧
    </Fragment>
  )
}