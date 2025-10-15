import Icon from '@/components/ui/icon'
import React, { useState } from 'react'

const hotelDetails = {
  description:
    'A boutique resort with an Indo-Portuguese architecture, the Ronil Goa offers lively holidays filled with recreational activities.',
  details: {
    type: 'Entire Homestay',
    bedrooms: 1,
    guests: 4,
    policies: ['Free Cancellation', 'Book with ₹0 Payment'],
  },
  rating: {
    score: 4.8,
    text: 'Excellent',
    reviews: 8,
  },
};

const HotelImages = ({photos}) =>{
  
  const [activeImage, setActiveImage] = useState(0);

  const handleMouseHover = (index)=>{
    setActiveImage(index);
  }

  return(
    <div className='space-y-1'> 
      <div className='h-[155px] w-[240px] overflow-hidden rounded-sm'>
        <img 
          className='rounded-sm object-cover object-center h-full w-full'
          src = {photos[activeImage]}
        />
      </div>
      <div className='flex gap-1 w-60'>
        {photos.slice(0,4).map((photo, index)=>(
          <div className='relative flex-1 rounded-sm overflow-hidden' key={index}>
            <img
              className='w-full h-full cursor-pointer'
              src={photo}
              onMouseEnter={()=>handleMouseHover(index)}
            />
            {
              index == 3 && 
              <span className="text-[10px] flex pointer-events-none items-center justify-center font-semibold text-white absolute inset-0 backdrop-blur-sm h-full">
                View All
              </span> 
            }
          </div>
        ))}
      </div>
    </div>
  )
}

const HotelInfo = ({name, city, amenities, hotelDetails}) =>{
  return(
    <div className='flex-1 space-y-3'>
      <div className='space-y-0.5'>
        <h2 className='inline text-xl font-bold'>
          {name} &nbsp;
          {new Array(3).fill(0).map((_, index)=>(
            <Icon
              key={index}
              icon="star"
              size={12}
              className="inline mb-2 fill-black"
            />
          ))}
        </h2>
        <p className="text-sm font-semibold text-primary">{city}</p>
      </div>
      <div className='flex items-center gap-0.5 text-muted-foreground'>
        <p className='text-sm font-semibold'>{hotelDetails.details.type}</p>|
        <p className='text-sm'>{`${hotelDetails.details.bedrooms} Bedroom`}</p>|
        <p className='text-sm'>{`Sleep ${hotelDetails.details.guests} Guests`}</p>
      </div>
      <div>
        <ul className='space-y-1'>
          {
            amenities.slice(0,2).map((amenity, index)=>(
              <li key={index} className='flex items-center gap-1 text-sm text-green-700'>
                <Icon icon="check" size="16" className=""/>
                {amenity}
              </li>
            ))
          }
        </ul>
      </div>
      <div className="flex">
        <p className="text-sm line-clamp-1">{hotelDetails.description}</p>
        <span className="flex items-center shrink-0 text-xs font-medium text-primary cursor-pointer">
          View More
        </span>
      </div>
    </div>
  )
}

const HotelPrice = ({hotelDetails, price}) =>{
  return(
    <>
      <div>
        <div className="flex gap-1.5">
          <p className="text-base font-bold text-brand">
            {hotelDetails.rating.text}
          </p>
          <span className="inline-block text-sm text-white font-bold rounded bg-brand px-1 py-0.5">
            {hotelDetails.rating.score}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          {`(${hotelDetails.rating.reviews} Ratings)`}
        </p>
      </div>
      <div className="flex-1 content-center">
        <p className="text-2xl font-bold">{`₹ ${price.toLocaleString()}`}</p>
        <p className="text-sm text-muted-foreground">{`+ ₹0 taxes & fees`}</p>
        <p className="text-sm text-muted-foreground">Per Night</p>
      </div>
    </>
  )
}

const HotelCard = ({ name, photos, city, id, amenities, price }) => {
  return (
    <article className='flex border border-border rounded-lg w-full transition-colors hover:border-primary'>
    <div className='flex flex-1 gap-4 p-4'>
        <HotelImages photos={photos}/>
        <HotelInfo name={name} city={city} amenities={amenities} hotelDetails={hotelDetails}/>
    </div>
    <div className="flex flex-col items-end text-end shrink-0 border-l border-border w-48 p-4">
        <HotelPrice hotelDetails={hotelDetails} price={price}/>
    </div>
    </article>
  )
}

export default HotelCard