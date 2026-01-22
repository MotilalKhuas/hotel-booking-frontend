import { useForm } from "react-hook-form"
import {useSearchParams} from "react-router"

import { SEARCH_PARAMS_KEYS } from "@/config/app.config";
import dayjs from "dayjs";

const useConfirmCheckOut = ()=>{

    const [searchParams, setSearchParams] = useSearchParams();

    const roomsCount = Number(searchParams.get(SEARCH_PARAMS_KEYS.ROOMS)) ?? 1;
    const checkIn = dayjs(searchParams.get(SEARCH_PARAMS_KEYS.CHECKIN));
    const checkOut = dayjs(searchParams.get(SEARCH_PARAMS_KEYS.CHECKOUT));

    const form = useForm({
        defaultValues : {
            roomsCount,
            bookingDates : {
                from : checkIn.isValid() ? checkIn.toDate() : dayjs().toDate(),
                to : checkOut.isValid() ? checkOut.toDate() : dayjs().add(1, "day").toDate(),
            }
        }
    })

    const handleUpdateDetailsFormSubmit = (data)=>{
        searchParams.set(
            SEARCH_PARAMS_KEYS.CHECKIN,
            dayjs(data.bookingDates.form).format('YYYY-MM-DD')
        );
        searchParams.set(
            SEARCH_PARAMS_KEYS.CHECKOUT,
            dayjs(data.bookingDates.to).format('YYYY-MM-DD')
        );
        searchParams.set(
            SEARCH_PARAMS_KEYS.ROOMS,
            data.roomsCount
        )
        setSearchParams(searchParams),
        form.reset(data);
    }

    return {form, handleUpdateDetailsFormSubmit}
}

export {useConfirmCheckOut}