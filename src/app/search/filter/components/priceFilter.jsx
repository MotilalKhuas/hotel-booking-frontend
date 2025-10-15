import React from 'react'
import { FormField, FormItem, FormLabel, FormControl} from '@/components/ui/form'
import { Checkbox } from '@/components/ui/checkbox'
import {PRICE_FILTERS} from '@/config/app.config'

const PriceFilter = ({form}) => {
  return (
    <div className="border-t border-border p-3">
      <h4 className="text-sm font-semibold mb-3">Price per night</h4>
      <div className='space-y-2'>
        {PRICE_FILTERS.map(price=>(
          <FormField
            key = {price.id}
            name = "priceRange"
            control = {form.control}
            render = {({field})=>(
              <FormItem className="flex items-center gap-2">
                <FormControl>
                  <Checkbox
                    className="w-5 h-5"
                    checked = {(field.value).includes(price.value)}
                    onCheckedChange = {(checked)=>{
                      const newPriceRanges = checked 
                        ? [...(field.value), price.value]
                        : field.value.filter(val=>val!=price.value)
                      field.onChange(newPriceRanges);
                    }}
                  />
                </FormControl>
                <FormLabel className="text-sm font-normal text-foreground">
                  {price.label}
                </FormLabel>
              </FormItem>
            )}
          />
        ))}
      </div>
    </div>
  )
}

export default PriceFilter