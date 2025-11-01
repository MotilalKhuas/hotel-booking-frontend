import React from 'react'
import StarFilter from './components/starFilter'
import PriceFilter from './components/priceFilter'
import { Button } from '@/components/ui/button'
import {Form} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import useFilterForm from './hooks/useFilterForm'

const Filter = () => {

  const {form, clearFilters, filterChangeHandler} = useFilterForm();

  return (
    <aside className='border border-border rounded-md w-[260px] h-fit'>
        <div className='flex items-center justify-between p-2'>
          <h3 className = "text-base font-bold">Filter By : </h3>
          <Button 
            className = "h-auto p-0 text-xs underline-offset-1"
            size = "sm"
            variant = "link"
            onClick = {clearFilters}
          >
            Clear All
          </Button>
        </div>
        <Form {...form}>
          <form>
            <StarFilter form={form} filterChangeHandler={filterChangeHandler}/>
            <PriceFilter form={form} filterChangeHandler={filterChangeHandler}/>
          </form>
        </Form>
    </aside>
  )
}

export default Filter