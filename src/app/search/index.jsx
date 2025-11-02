import React from 'react'
import Filter from './filter/index'
import SortFilter from './filter/components/sortFilter'
import Hotels from './hotels'
import PaginationFilter from './filter/components/paginationFilter'
import useGetHotels from './hotels/hooks/useGetHotels'

const SearchPage = () => {

  const {data, isLoading, error, city, pageSize} = useGetHotels();
  const hotels = data?.content || [];
  const totalEntries = data?.totalElements || 0;

  return (
    <div className='container flex gap-4 mt-4 mb-6'>
      <Filter/>
      <section className='flex-1 space-y-6'>
          <div className='flex items-center justify-between'>
              <h1 className='text-xl font-bold'>{`${city} : ${totalEntries} properties found`}</h1>
              <SortFilter/>
          </div>
          <Hotels error={error} isLoading={isLoading} data={hotels} pageSize={pageSize}/>
          {totalEntries > 0 && <PaginationFilter totalData={totalEntries}/>} 
      </section>
    </div>
  )
}

export default SearchPage