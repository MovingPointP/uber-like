import React, { useEffect } from 'react';
import { Fragment } from "react"

import { fetchRestaurants } from '../apis/restaurants';

useEffect(() => {
  (async() => { 
  const result = await fetchRestaurants()
  console.log(result)
  })()
},[])

export const Restaurants = () => {
  return (
    <Fragment>
      レストラン一覧
    </Fragment>
  )
}