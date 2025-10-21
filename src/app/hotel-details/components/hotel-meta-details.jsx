import Icon from "@/components/ui/icon.jsx"
import React from 'react'

const HotelMetaDetails = ({hotel, info}) => {
  return (
    <section className='space-y-8'>
      <div className="space-y-2">
        <div className="flex">
            <div className='flex-1 space-y-1'>
                <h1 className='text-2xl font-bold'>{hotel.name}</h1>
                <p className='text-muted-foreground'>{`${hotel.contactInfo.address}, ${hotel.city}`}</p>
            </div>
            <div>
                <div className="flex justify-center items-center gap-2 text-white bg-brand rounded-t-sm py-1 px-2">
                    <span className="text-base font-bold">4.8</span>
                    <Icon icon='star' size="14" className="fill-white"/>
                </div>
                <div className="flex justify-center items-center bg-secondary rounded-b-sm py-1 px-2">
                  <span className="text-xs">663 Ratings</span>  
                </div>
            </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 px-1.5 py-1 rounded bg-gray-100 w-fit font-semibold">
            <Icon icon="gem" size="14"/>
            <span className="text-xs">Company-Serviced</span>
          </div>
          <div className="flex items-center gap-2 px-2">
            <Icon icon="curve" className="-mt-4 stroke-gray-400" />
            <p>5.0 · Check-in rating &gt; Delightful experience</p>
          </div>
        </div>
        <div className="flex gap-1 items-center text-orange-500 bg-orange-50 border rounded-sm  p-2 my-6">
          <Icon icon="heart" size="16" />
          <p className="text-sm font-medium">
            Located Less Than 5 Km From Medanta Hospital | Located 3 Kms From Omaxe Celebration Mall
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-bold">
          Amenities
        </h2>
        <ul className="flex flex-wrap gap-2">
          {hotel.amenities.map((amenity, index)=>{
            return(
              <li key={index} className="flex items-center gap-2 min-w-[180px]">
                <Icon icon="check" size="18" className="text-green-600"/>
                <span className="text-sm font-medium text-muted-foreground">
                  {amenity}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="space-y-4 my-8">
        <h2 className="text-xl font-bold">
          About this property
        </h2>
        <p className="text-sm leading-relaxed tracking-wide text-muted-foreground">
          {info.description}
        </p>
      </div>
    </section>
  )
}

export default HotelMetaDetails