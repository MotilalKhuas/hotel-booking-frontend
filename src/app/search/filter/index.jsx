import React from 'react'
import StarFilter from './components/starFilter'
import PriceFilter from './components/priceFilter'
import { Button } from '@/components/ui/button'
import {Form} from '@/components/ui/form'
import { useForm } from 'react-hook-form'

const Filter = () => {

  const form = useForm({
    defaultValues: {
      starCategory: [1],
      priceRange: '500-1000'
    }
  });

  return (
    <aside className='border border-border rounded-md w-[260px] h-fit'>
        <div className='flex items-center justify-between p-2'>
          <h3 className = "text-base font-bold">Filter By : </h3>
          <Button 
            className = "h-auto p-0 text-xs underline-offset-1"
            size = "sm"
            variant = "link"
          >
            Clear All
          </Button>
        </div>
        <Form {...form}>
          <form>
            <StarFilter form={form}/>
            <PriceFilter form={form}/>
          </form>
        </Form>
    </aside>
  )
}

export default Filter