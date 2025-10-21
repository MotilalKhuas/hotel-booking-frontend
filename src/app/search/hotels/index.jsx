import React from 'react'
import HotelCardSkeliton from './components/hotelCardSkeliton'
import HotelCard from './components/hotelCard'
import { SEARCH_RESULT_PAGE_LIMIT } from '@/config/app.config'

const Hotels = ({error, isLoading, data}) => {

  if(isLoading){
    return(
      <div className='space-y-2'>
        {
          Array(SEARCH_RESULT_PAGE_LIMIT).fill(0).map((_,index)=>(
            <HotelCardSkeliton key={index}/>
          ))
        }
      </div>
    )
  }

  return (
    <div className='space-y-2'>
      {data.map((hotel)=>(
        <HotelCard key={hotel.id} {...hotel}/>
      ))}
    </div>
  )
}

export default Hotels