import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Calendar } from '@/components/ui/calendar';
import { FormControl, FormField} from '@/components/ui/form';
import Icon from '@/components/ui/icon';

import dayjs from 'dayjs';

const DateSelectInput = ({ form, className = "" }) => {
    const value = form.watch("bookingDates");

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div 
                    className={`flex gap-1 items-center bg-background rounded px-4 py-2 h-full w-full ${className}`}
                >
                    <Icon
                        icon="calandar"
                        size="26"
                        className="text-muted-foreground shrink-0"
                    />
                    <FormField
                        control={form.control}
                        name="bookingDates"
                        render={({ field }) => (
                            <FormControl>
                                <div className='flex-1 flex items-center gap-2 text-sm font-semibold px-2 h-full'>
                                    <p>
                                        {field?.value?.from
                                            ? dayjs(field.value.from).format('ddd D MMM')
                                            : "Check-in date"}
                                    </p>
                                    <span aria-hidden>-</span>
                                    <p>
                                        {field?.value?.to
                                            ? dayjs(field.value.to).format('ddd D MMM')
                                            : "Check-out date"}
                                    </p>
                                </div>
                            </FormControl>
                        )}
                    />
                </div>
            </PopoverTrigger>
            <PopoverContent
                align="start"
                sideOffset="1"
                onOpenAutoFocus={(e) => e.preventDefault()}
            >
                <Calendar
                    required
                    mode="range"
                    min={2}
                    numberOfMonths={2}
                    fromMonth={new Date()}
                    selected={value}
                    onSelect={(val) => {
                        form.setValue("bookingDates", val, { shouldDirty: true })
                    }}
                    disabled={(date) => dayjs().isAfter(dayjs(date), 'date')}
                    className="rounded-lg border shadow-sm"
                />
            </PopoverContent>
        </Popover>
    )
}

export default DateSelectInput