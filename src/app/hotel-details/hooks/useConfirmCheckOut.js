import { useForm } from "react-hook-form"
import {useLocation, useNavigate, useParams, useSearchParams} from "react-router"
import { SEARCH_PARAMS_KEYS } from "@/config/app.config";
import dayjs from "dayjs";
import { PATHS } from "@/config/path.config";

const useConfirmCheckOut = ()=>{

    const [searchParams, setSearchParams] = useSearchParams();
    const {id} = useParams();
    const navigate = useNavigate();
    const location = useLocation();

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
    });

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
    };

    const handleCheckoutConfirm = ()=>{
        const queries = {
            city: searchParams.get(SEARCH_PARAMS_KEYS.LOCATION),
            startDate: searchParams.get(SEARCH_PARAMS_KEYS.CHECKIN),
            endDate: searchParams.get(SEARCH_PARAMS_KEYS.CHECKOUT),
            roomsCount: searchParams.get(SEARCH_PARAMS_KEYS.ROOMS),
            selected_rcid: searchParams.get(SEARCH_PARAMS_KEYS.SELECTED_ROOM),
        };

        const params = new URLSearchParams(queries);
        const url = `${PATHS.CHECKOUT.replace(":id", id)}${params.toString()}`;
        navigate(url, {state : {from : `${location.pathname}${location.search}`}});
    };

    return {form, handleUpdateDetailsFormSubmit, handleCheckoutConfirm};
};

export default useConfirmCheckOut;