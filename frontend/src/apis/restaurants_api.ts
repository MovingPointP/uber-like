import axios from 'axios';
import { restaurantsIndex } from '../urls/index'

export const fetchRestaurants = async () => {
  try {
    const result = await axios.get(restaurantsIndex)
    return result.data as restaurants
  } catch (error){
    console.error(error)
  }
}

type restaurants  = {
  restaurans: {
    id: number,
    name: string,
    fee: number,
    time_required: number,
    created_at: string,
    updated_at: string
  }[]
}