import React from 'react'
import PropertyViewCarousel from './components/property-view-carousel.jsx'
import HotelMetaDetails from './components/hotel-meta-details.jsx'
import HotelRoomPicker from './components/hotel-room-picker.jsx'
import HotelPolicy from './components/hotel-policy.jsx'
import HotelCheckoutCard from './components/hotel-checkout-card.jsx'
import {HOTEL_INFO } from './hotel-details-dummy-data.js'
import useGetHotelData from './hooks/useGetHotelData.js'

const HotelDetails = () => {
    const {hotelData, isLoading, error} = useGetHotelData();
    const hotelInfo = HOTEL_INFO

    if(isLoading) return(<p>Loading.....</p>);

    return (
        <div className='container mt-6 mb-12'>
            <PropertyViewCarousel images={hotelData.hotel.photos}/>
            <div className="flex gap-6 mt-6">
                <div className='flex-1 space-y-8'>
                    <HotelMetaDetails hotel={hotelData.hotel} info={hotelInfo}/>
                    <HotelRoomPicker rooms={hotelData.rooms}/>
                    <HotelPolicy hotelPolicy={hotelInfo.hotelPolicy}/>
                </div>
                <aside className='sticky top-6 shrink-0 border border-border rounded-xl p-4 w-[340px] shadow-md h-fit'>
                    <HotelCheckoutCard rooms={hotelData.rooms} cancellationPolicy={hotelInfo.cancellationPolicy}/>
                </aside>       
            </div>
        </div>
    )
}

export default HotelDetails