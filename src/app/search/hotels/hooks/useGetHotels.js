import API_CONFIG from "@/config/api.config";
import { SEARCH_PARAMS_KEYS } from "@/config/app.config";
import useQuery from "@/lib/hooks/useQuery";
import { useSearchParams } from "react-router";

const useGetHotels = () => {

    const [searchParams] = useSearchParams();
    const city = searchParams.get(SEARCH_PARAMS_KEYS.LOCATION);
    const startDate = searchParams.get(SEARCH_PARAMS_KEYS.CHECKIN);
    const endDate = searchParams.get(SEARCH_PARAMS_KEYS.CHECKOUT);
    const roomsCount = searchParams.get(SEARCH_PARAMS_KEYS.ROOMS);

    const {data, isLoading, error} = useQuery({
        url:API_CONFIG.HOTEL.BROWSE_HOTELS,
        axiosOptions : {
            params : {city, startDate, endDate, roomsCount}
        },
        queryOptions : {
            queryKey : [city, startDate, endDate, roomsCount]
        }
    })

    return {data, isLoading, error, city}
}

export default useGetHotels