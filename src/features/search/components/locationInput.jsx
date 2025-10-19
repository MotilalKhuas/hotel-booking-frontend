import React, {useState} from 'react'
import { FormControl, FormField } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import {Input} from "@/components/ui/input"
import Icon from "@/components/ui/icon"
import {Button} from "@/components/ui/button"
import { DESTINATIONS } from '@/config/app.config';
 
const LocationInput = ({form}) => {
  const city = form.watch("city");
  const [isPopOverOpen, setIsPopOverOpen] = useState(false);

  function onSelectCity(e,index){
    const selectedLocation = `${DESTINATIONS[index].city}, ${DESTINATIONS[index].country}`;
    form.setValue("city", selectedLocation);
    setIsPopOverOpen(false);
  }

  return (
    <Popover open={isPopOverOpen} onOpenChange={setIsPopOverOpen}>
      <PopoverTrigger asChild>
        <div className='flex gap-1 items-center bg-background rounded px-4 py-2 h-full w-full'>
          <Icon
            icon="bedSingle"
            size="26"
            className="text-muted-foreground shrink-0"
          />
          <FormField
              control={form.control}
              name="city"
              type="text"
              render={({ field }) => (
                <FormControl>
                  <Input
                    className="font-semibold placeholder:font-semibold placeholder:text-foreground focus:placeholder-muted-foreground !bg-transparent border-0 shadow-none focus-visible:ring-transparent px-2 h-full w-full"
                    placeholder="Where are you going?"
                    autoComplete="off"
                    {...field} />
                </FormControl>
              )}
          />
          <Button
            type="button"
            variant="ghost"
            className={city ? "" : "hidden"}
            onClick = {(e)=>{
              e.preventDefault();
              form.setValue("city","");
            }}
          >
              <Icon
                icon="close"
                className="text-muted-foreground shrink-0"
              />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="overflow-hidden p-0 w-[350px]"
        align="start"
        sideOffset="1"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
          <h3 className='p-3 font-bold'>Trending destinations</h3>
          <div className='max-h-[300px] overflow-y-auto'>
            {DESTINATIONS.map((destination, index)=>(
              <div
                key={index}
                className='flex items-center hover:bg-accent cursor-pointer transition-colors duration-200 border-b-2 border-border gap-3 px-4 py-2'
                onClick={(e)=>onSelectCity(e,index)}
              >
                  <Icon icon="location" className="stroke-1"/>
                  <div>
                    <p className='text-sm font-bold'>{destination.city}</p>
                    <p className='text-xs'>{destination.country}</p>
                  </div>
              </div>
            ))}
          </div>
      </PopoverContent>
    </Popover>
  )
}
 
export default LocationInput