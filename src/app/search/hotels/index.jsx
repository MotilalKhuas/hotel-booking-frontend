import React from 'react'
import HotelCardSkeliton from './components/hotelCardSkeliton'
import HotelCard from './components/hotelCard'

const Hotels = ({error, isLoading, data, pageSize}) => {

  if(isLoading){
    return(
      <div className='space-y-2'>
        {
          Array(pageSize).fill(0).map((_,index)=>(
            <HotelCardSkeliton key={index}/>
          ))
        }
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-y-2'>
      {data.map((hotel)=>(
        <HotelCard key={hotel.id} {...hotel}/>
      ))}
    </div>
  )
}

export default Hotels