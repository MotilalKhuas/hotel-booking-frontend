import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import {SEARCH_FILTERS } from '@/config/app.config';
import React from 'react'

const SortFilter = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="rounded-full border border-border">
          <SelectValue placeholder="Select sort filter"/>
        </SelectTrigger>
        <SelectContent>
          {SEARCH_FILTERS.map((filter, index)=>(
            <SelectItem value={filter.value} key={index}>
              {filter.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default SortFilter