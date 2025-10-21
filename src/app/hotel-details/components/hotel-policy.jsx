import React from 'react'

const HotelPolicy = ({hotelPolicy}) => {
  return (
    <section className='space-y-4'>
        <h2 className="text-xl font-bold">Hotel Policy</h2>
        <div className='space-y-4'>
          <div className='flex gap-4 mx-5'>
            <div className='border-r border-border pr-4'>
              <span className="text-sm">Check-in</span>
              <div className='relative border border-border mt-3 px-4 py-1 before:absolute before:-top-2 before:left-2 before:bg-background before:size-4 before:rotate-[45deg] before:border-t before:border-l before:border-border'>
                <p className='text-lg font-semibold'>{hotelPolicy.checkIn}</p>
              </div>
            </div>
            <div>
              <span className="text-sm">Check-out</span>
              <div className='relative border border-border mt-3 px-4 py-1 before:absolute before:-top-2 before:left-2 before:bg-background before:size-4 before:rotate-[45deg] before:border-t before:border-l before:border-border'>
                <p className='text-lg font-semibold'>{hotelPolicy.checkOut}</p>
              </div>
            </div>
          </div>
          <ul className='list-disc list-inside space-y-1'>
            {
              hotelPolicy.rules.map((rule, index)=>(
                <li className='text-sm text-muted-foreground' key={index}>{rule}</li>
              ))
            }
          </ul>
        </div>
    </section>
  );
};

export default HotelPolicy