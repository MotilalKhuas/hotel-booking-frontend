import { SEARCH_PARAMS_KEYS } from "@/config/app.config";
import { PATHS } from "@/config/path.config";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";

const useSearch = ()=>{

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const checkIn = dayjs(searchParams.get(SEARCH_PARAMS_KEYS.CHECKIN));
    const checkOut = dayjs(searchParams.get(SEARCH_PARAMS_KEYS.CHECKOUT));

    const form = useForm({
        defaultValues : {
            city : searchParams.get(SEARCH_PARAMS_KEYS.LOCATION) || '',
            roomsCount : parseInt(searchParams.get(SEARCH_PARAMS_KEYS.ROOMS)) || 1,
            bookingDates : {
                from : checkIn.isValid() ? checkIn.toDate() : dayjs().toDate(),
                to : checkOut.isValid() ? checkOut.toDate() : dayjs().add(1, 'day').toDate(),
            }
        }
    });

    const searchSubmitHandler = (data)=>{
        const searchData = {
            city : data.city,
            roomsCount : data.roomsCount,
            startDate : dayjs(data.bookingDates.form).format('YYYY-MM-DD'),
            endDate : dayjs(data.bookingDates.to).format('YYYY-MM-DD'),
        };

        const params = new URLSearchParams(searchData);
        navigate(`${PATHS.SEARCH}${params}`);
    };

    return ({form, searchSubmitHandler});
}

export default useSearch;