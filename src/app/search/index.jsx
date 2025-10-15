import React from 'react'

import Filter from './filter/index'
import SortFilter from './filter/components/sortFilter'
import Hotels from './hotels'
import PaginationFilter from './filter/components/paginationFilter'
import { HOTELS_INFO } from '@/config/app.config'

const SearchPage = () => {

  const hotels = HOTELS_INFO.content;
  const totalEntries = hotels.length || 0

  return (
    <div className='container flex gap-4 mt-4 mb-6'>
      <Filter/>
      <section className='flex-1 space-y-6'>
          <div className='flex items-center justify-between'>
              <h1 className='text-xl font-bold'>Jaipur: 858 properties found</h1>
              <SortFilter/>
          </div>
          <Hotels data={hotels}/>
          {totalEntries > 0 && <PaginationFilter/>} 
      </section>
    </div>
  )
}

export default SearchPage