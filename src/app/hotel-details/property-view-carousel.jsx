import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'

const PropertyViewCarousel = ({images}) => {
  return (
    <section>
       <Carousel 
            className='overflow-hidden rounded-lg' 
            opts={{
                breakpoints:{
                    '(min-width: 1024px)': { slidesToScroll: 2},
                },  
            }}
        >
            <CarouselContent className='-ml-0.5'>
                {
                    images.map((image, index)=>(
                        <CarouselItem key={index} className='lg:basis-1/2 pl-0.5'>
                            <img className='h-96 w-full object-cover' src={image} alt={`Image index : ${index}`}/>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious className='left-1 shodow-lg'/>
            <CarouselNext className='right-1 shodow-lg'/>
       </Carousel>
    </section>
  )
}

export default PropertyViewCarousel