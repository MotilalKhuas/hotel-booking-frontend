import React from 'react'
import { FormControl, FormField } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import Icon from "@/components/ui/icon"
import {Button} from "@/components/ui/button"

const OccupancyInput = ({form}) => {
    const rooms = form.watch("roomsCount")
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className='flex gap-1 items-center bg-background rounded px-4 py-2 h-full w-full'>
                    <Icon
                        icon="user"
                        size="26"
                        className="text-muted-foreground shrink-0"
                    />
                    <FormField
                        control={form.control}
                        name="roomsCount"
                        render={({field})=>(
                            <FormControl>
                                <div className='flex-1 flex items-center text-sm font-semibold px-2 h-full'>
                                    <p className='flex-1'>
                                        {rooms} rooms
                                    </p>
                                    <Icon
                                        icon="dropdown"
                                        size="26"
                                        className="text-muted-foreground shrink-0"
                                    />
                                </div>
                            </FormControl>
                        )}
                    />
                </div>
            </PopoverTrigger>
            <PopoverContent
                className="overflow-hidden p-0 w-[300px]"
                align="start"
                sideOffset="1"
                onOpenAutoFocus={(e) => e.preventDefault()}
            >
                <div className='flex items-center justify-between px-5 py-7 '>
                        <p>Rooms</p>
                        <div className='flex items-center gap-4 border !border-black/40 rounded overflow-hidden'>
                            <Button 
                                className="text-primary hover:text-primary bg-white hover:bg-brand/5 rounded-none size-11"
                                onClick={()=>form.setValue("roomsCount", rooms-1)}
                                disabled={rooms===1}
                            >
                                <Icon
                                    icon="minus"
                                    size="26"
                                    className="text-muted-foreground shrink-0"
                                />
                            </Button>
                            <span className='font-semibold'>
                                {rooms}
                            </span>
                            <Button 
                                className="text-primary hover:text-primary bg-white hover:bg-brand/5 rounded-none size-11"
                                onClick={()=>form.setValue("roomsCount", rooms+1)}
                                disabled={rooms===10}
                            >
                                <Icon
                                    icon="plus"
                                    size="26"
                                    className="text-muted-foreground shrink-0"
                                />
                            </Button>
                        </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default OccupancyInput