import API_CONFIG from "@/config/api.config";
import { SEARCH_PARAMS_KEYS } from "@/config/app.config";
import useMutation from "@/lib/hooks/useMutation";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router";
import { toast } from "sonner";

const useInitCheckout = () => {

    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();

    const payload = {
        hotelId: id,
        roomId: searchParams.get(SEARCH_PARAMS_KEYS.SELECTED_ROOM),
        checkInDate: searchParams.get(SEARCH_PARAMS_KEYS.CHECKIN),
        checkOutDate: searchParams.get(SEARCH_PARAMS_KEYS.CHECKOUT),
        roomsCount: searchParams.get(SEARCH_PARAMS_KEYS.ROOMS)
    };

    const { mutate, data, isPending, isSuccess, error } = useMutation({
        url: API_CONFIG.BOOKINGS.INIT_BOOKING.URL,
        method: API_CONFIG.BOOKINGS.INIT_BOOKING.METHOD
    });

    useEffect(() => {
        mutate(payload, {
            onError(error) {
                navigate(location.state?.from, { replace: true });
                toast.error("Initiate Booking Failed.", {
                    description: error?.message
                })
            }
        })
    }, []);

    return ({ data, isPending, isSuccess, error });
}

export default useInitCheckout;