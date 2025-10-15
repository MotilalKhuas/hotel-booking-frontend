import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const HotelCardSkeliton = () => {
  return (
    <div className='flex border border-border rounded-lg w-full'>
        <div className='flex flex-1 gap-4 p-4'>
          <div className='space-y-1 w-60'>
            <div className="h-[138px] w-full">
              <Skeleton className="rounded-sm h-full w-full"/>
            </div>
            <div className='flex gap-1 h-[50px] w-full'>
              {new Array(4).fill(0).map((_,index)=>(
                  <Skeleton key={index} className="flex-1 rounded-sm h-full"/>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-3">
            <div className='flex gap-2'>
              <Skeleton className="rounded-sm max-w-24 w-full h-8"/>
              <Skeleton className="rounded-sm max-w-24 w-full h-8"/>
            </div>
            <div className='space-y-2'>
              <Skeleton className="rounded-sm w-full h-6"/>
              <Skeleton className="rounded-sm w-full h-3"/>
              <Skeleton className="rounded-sm w-full h-3"/>
            </div>
             <div className='flex gap-2'>
              <Skeleton className="rounded-sm max-w-24 w-full h-8"/>
              <Skeleton className="rounded-sm max-w-24 w-full h-8"/>
            </div>
            <Skeleton className="rounded-sm w-full h-3"/>
            <Skeleton className="rounded-sm w-full max-w-32 h-3"/>
          </div>
        </div>
        <div className='flex flex-col justify-between items-center shrink-0 bg-zinc-50 border-l border-border w-48 p-4'>
          {new Array(8).fill(0).map((_,index)=>(
              <Skeleton key={index} className="w-full h-4 rounded-sm"/>
          ))}
        </div>
    </div>
  )
}

export default HotelCardSkeliton