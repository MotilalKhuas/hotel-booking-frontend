import API_CONFIG from "@/config/api.config";
import { SEARCH_PARAMS_KEYS, SEARCH_RESULT_PAGE_LIMIT } from "@/config/app.config";
import useQuery from "@/lib/hooks/useQuery";
import { useSearchParams } from "react-router";

const useGetHotels = () => {

    const [searchParams] = useSearchParams();
    const city = searchParams.get(SEARCH_PARAMS_KEYS.LOCATION);
    const startDate = searchParams.get(SEARCH_PARAMS_KEYS.CHECKIN);
    const endDate = searchParams.get(SEARCH_PARAMS_KEYS.CHECKOUT);
    const roomsCount = searchParams.get(SEARCH_PARAMS_KEYS.ROOMS);
    const pageSize = searchParams.get(SEARCH_PARAMS_KEYS.SIZE) || SEARCH_RESULT_PAGE_LIMIT;
    const page = (searchParams.get(SEARCH_PARAMS_KEYS.PAGE) || 1)-1;

    const {data, isLoading, error} = useQuery({
        url:API_CONFIG.HOTEL.BROWSE_HOTELS,
        axiosOptions : {
            params : {city, startDate, endDate, roomsCount, page, size : pageSize}
        },
        queryOptions : {
            queryKey : [city, startDate, endDate, roomsCount, pageSize, page]
        }
    })

    return {data, isLoading, error, city, pageSize}
}

export default useGetHotels