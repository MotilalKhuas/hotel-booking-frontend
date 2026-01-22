import React from 'react'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon.jsx'
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { useConfirmCheckOut } from '../hooks/useConfirmCheckOut'
import { Form } from '@/components/ui/form'
import DateSelectInput from '@/features/search/components/datePicker'
import OccupancyInput from '@/features/search/components/occupancy'
import { useGetSelectedRoomDetails } from '../hooks/useSelectedRoomDetails'

const CancellationPolicy = ({ cancellationPolicy }) => {
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger>
        <div className='flex gap-2 text-rose-600 items-center cursor-pointer'>
          <span className='text-sm font-medium'>Cancellation Policy</span>
          <Icon icon="info" size="16" />
        </div>
      </HoverCardTrigger>
      <HoverCardContent side="left" className="w-[350px] space-y-3 border-border">
        <h3 className='text-base font-semibold'>Cancellation Policy</h3>
        <ul className='pl-4 space-y-3 list-disc'>
          {cancellationPolicy.map((policy, index) => (
            <li className='text-sm leading-relaxed font-medium text-accent-foreground'>{policy}</li>
          ))}
        </ul>
      </HoverCardContent>
    </HoverCard>
  )
}

const CheckOutSummery = ({ selectedRoom }) => {

  const { form, handleUpdateDetailsFormSubmit } = useConfirmCheckOut();

  return (
    <div className='space-y-4'>
      <Form {...form}>
        <form
          className="space-y-4"
          onSubmit={form.handleSubmit(handleUpdateDetailsFormSubmit)}
        >
          <DateSelectInput form={form} className='border-border border-2' />
          <OccupancyInput form={form} className='border-border border-2' />
          {form.formState.isDirty && (
            <Button
              type="submit"
              variant="outline"
              size="lg"
              className="w-full"
              aria-label="Apply Changes"
            >
              Apply Changes
            </Button>
          )}
        </form>
      </Form>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm">Your savings</span>
          <span className="text-sm font-bold">
            {`₹${Math.round(selectedRoom.displayPrice - selectedRoom.totalPrice)}`}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">Total Price</span>
          <span className="text-sm font-bold">
            {`₹${selectedRoom.totalPrice}`}
          </span>
        </div>
      </div>
      <Button
        className="w-full h-12 text-base font-semibold"
        aria-label="Continue to Book"
      >
        Continue to Book
      </Button>
    </div>
  )
}

const HotelCheckoutCard = ({ rooms, cancellationPolicy }) => {

  const selectedRoom = useGetSelectedRoomDetails(rooms);

  return (
    <div className="space-y-6">
      <div className='flex-1 flex gap-2 items-center'>
        <span className='text-2xl font-bold'>{`₹${selectedRoom.totalPrice}`}</span>
        <span className='text-base text-muted-foreground line-through'>{`₹${selectedRoom.displayPrice}`}</span>
      </div>

      <CheckOutSummery selectedRoom={selectedRoom} />

      <div className='flex gap-1'>
        <Icon icon="zap" size="16" className="mt-[3px] shrink-0 fill-rose-600 text-rose-600" />
        <p className="text-sm font-medium text-rose-600">
          1k+ people booked this OYO in last 6 months
        </p>
      </div>

      <CancellationPolicy cancellationPolicy={cancellationPolicy} />
    </div>
  )
}

export default HotelCheckoutCard