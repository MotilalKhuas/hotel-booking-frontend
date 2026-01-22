import dayjs from "dayjs";
import { useSearchParams } from "react-router";
import { SEARCH_PARAMS_KEYS } from "@/config/app.config";

function useGetSelectedRoomDetails(rooms=[]){
    
    const [searchParams, setSearchParams] = useSearchParams();

    const details = {
        totalPrice : 0,
        displayPrice : 0,
        discountPercentage : 0,
        selectedRoom : {},
    };

    if(!rooms || rooms.length === 0){
        return details;
    }
    else{
        const checkInDate = dayjs(searchParams.get(SEARCH_PARAMS_KEYS.CHECKIN));
        const checkOutDate = dayjs(searchParams.get(SEARCH_PARAMS_KEYS.CHECKOUT));
        const daysCount = checkOutDate.diff(checkInDate, 'day');
        const roomsCount = Number(searchParams.get(SEARCH_PARAMS_KEYS.ROOMS)) || 1;
        const selectedRoomId = Number(searchParams.get(SEARCH_PARAMS_KEYS.SELECTED_ROOM));

        const room = rooms.find(item=>item.id === selectedRoomId) ?? rooms[0];

        details.selectedRoom = room;
        details.totalPrice = room.price * roomsCount * daysCount;
        details.discountPercentage = 50;
        details.displayPrice = details.totalPrice * (1 + details.discountPercentage / 100);
    }
    
    return details;
}

export {useGetSelectedRoomDetails};