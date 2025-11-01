import React from 'react'
import { FormField, FormItem, FormLabel, FormControl} from '@/components/ui/form'
import { Checkbox } from '@/components/ui/checkbox'
import {STAR_FILTERS} from '@/config/app.config'

const StarFilter = ({form, filterChangeHandler}) => {
  return (
    <div className="border-t border-border p-3">
      <h4 className="text-sm font-semibold mb-3">Star Category</h4>
      <div className='space-y-2'>
        {STAR_FILTERS.map((star)=>(
          <FormField
            key={star.id}
            control={form.control}
            name="starCategory"
            render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                    <FormControl>
                        <Checkbox
                          className="w-5 h-5"
                          checked = {(field.value).includes(star.value)}
                          onCheckedChange = {(checked)=>{                   
                            const newStars = checked 
                              ? [...(field.value), star.value]
                              : field.value.filter(val=>val!=star.value);
                            field.onChange(newStars);
                            filterChangeHandler();
                          }}
                        />
                    </FormControl>
                    <FormLabel className="text-sm font-normal text-foreground">
                      {star.label}
                    </FormLabel>
                </FormItem>
            )}
          />
        ))}
      </div>
    </div>
  )
}

export default StarFilter