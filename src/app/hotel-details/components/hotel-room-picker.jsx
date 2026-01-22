import { useEffect } from "react"
import Icon from "@/components/ui/icon.jsx"
import { Button } from "@/components/ui/button"
import { useSearchParams } from 'react-router'
import { SEARCH_PARAMS_KEYS } from '@/config/app.config'

const Room = ({ id, type, amenities, price, isSelected, photos }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const roomSelectHandler = () => {
    searchParams.set(SEARCH_PARAMS_KEYS.SELECTED_ROOM, id);
    setSearchParams(searchParams, { replace: true });
  }

  return (
    <article className='rounded-lg border border-border overflow-hidden'>
      <div className='border-b border-border'>
        {
          isSelected &&
          <div className="flex items-center gap-1 bg-brand px-5 py-1">
            <Icon icon="star" size="12" className="fill-amber-500 stroke-transparent" />
            <p className="text-xs font-bold text-white uppercase">
              Selected Category
            </p>
          </div>
        }
        <div className='flex items-center p-4'>
          <div className='flex-1 space-y-4'>
            <div className='flex items-center gap-2'>
              <h3 className="text-lg font-semibold">{type}</h3>
              {
                isSelected &&
                <Icon icon="circleCheck" size="26" className="fill-green-600 text-white" />
              }
            </div>
            <div>
              <ul className="flex flex-wrap gap-2">
                {amenities.map((amenity, index) => (
                  <li key={index} className='flex gap-2 items-center min-w-[180px]'>
                    <Icon icon="check" size="18" className="text-green-600" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {amenity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[180px] h-[120px]">
            <img src={photos[0]} alt={photos[0]} className='object-cover size-full rounded-lg' />
          </div>
        </div>
      </div>
      <div className='flex p-4'>
        <div className='flex-1 flex gap-2 items-center'>
          <span className='text-lg font-bold'>{`₹${price}`}</span>
          <span className='text-sm text-muted-foreground line-through'>{`₹${price * 1.5}`}</span>
        </div>
        <Button
          onClick={roomSelectHandler}
          size="lg"
          variant="outline"
          className={`h-12 font-semibold gap-1 w-[180px] disabled:opacity-80 uppercase ${!isSelected && 'hover:text-destructive text-destructive'
            }`}
        >
          {
            isSelected &&
            <Icon icon="circleCheck" size="26" className="fill-green-600 text-white" />
          }
          {isSelected ? "Selected" : "Select"}
        </Button>
      </div>
    </article>
  )
}

const HotelRoomPicker = ({ rooms }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedRoomId = Number(searchParams.get(SEARCH_PARAMS_KEYS.SELECTED_ROOM));

  useEffect(() => {
    if (!selectedRoomId) {
      searchParams.set(SEARCH_PARAMS_KEYS.SELECTED_ROOM, rooms[0].id);
      setSearchParams(searchParams, { replace: true });
    }
  }, [])

  return (
    <section className='space-y-4'>
      <h2 className='text-xl font-bold'>Choose Your room</h2>
      <div className='space-y-4'>
        {rooms.map(room => <Room {...room} key={room.id} isSelected={selectedRoomId === room.id} />)}
      </div>
    </section>
  )
}

export default HotelRoomPicker