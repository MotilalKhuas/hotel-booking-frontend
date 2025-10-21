import API_CONFIG from "@/config/api.config";
import { SEARCH_PARAMS_KEYS } from "@/config/app.config";
import useQuery from "@/lib/hooks/useQuery";
import { useParams, useSearchParams } from "react-router"

const useGetHotelData = ()=>{
    
    const [searchParams] = useSearchParams();
    const params = useParams();
    const id = params["id"];
    const startDate = searchParams.get(SEARCH_PARAMS_KEYS.CHECKIN);
    const endDate = searchParams.get(SEARCH_PARAMS_KEYS.CHECKOUT);
    const roomsCount = searchParams.get(SEARCH_PARAMS_KEYS.ROOMS);

    const {data : hotelData, isLoading, error} = useQuery({
        url : API_CONFIG.HOTEL.HOTEL_INFO.URL(id),
        axiosOptions : {
            params : {startDate, endDate, roomsCount}
        },
        queryOptions : {
            queryKey : [id, startDate, endDate, roomsCount]
        }
    });

    return ({hotelData, isLoading, error})
}

export default useGetHotelData