import { useSearchParams } from 'react-router';
import { PATHS } from '@/config/path.config'; 
import { SEARCH_PARAMS_KEYS } from '@/config/app.config';

const useHotelNavigation = (id) => {

    const [searchParams] = useSearchParams();

    const filterCriteria = {
        startDate : searchParams.get(SEARCH_PARAMS_KEYS.CHECKIN),
        endDate : searchParams.get(SEARCH_PARAMS_KEYS.CHECKOUT),
        roomsCount : searchParams.get(SEARCH_PARAMS_KEYS.ROOMS),
    }

    const params = new URLSearchParams(filterCriteria);

    return `${PATHS.HOTEL.replace(":id", id)}${params.toString()}`
}

export default useHotelNavigation