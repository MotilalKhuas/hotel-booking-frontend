import API_CONFIG from "@/config/api.config";
import { BOOKING_STATUS } from "@/config/payment.config";
import useQuery from "@/lib/hooks/useQuery";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const usePollPaymentStatus = () => {
    const { bookingId } = useParams();
    const MAX_RETRIES = 5;
    const POLLING_DELAY = 2000;

    const [maxRetries, setMaxRetries] = useState(MAX_RETRIES);
    const [paymentStatus, setPaymentStatus] = useState(BOOKING_STATUS.PROCESSING);

    const { data } = useQuery({
        url: API_CONFIG.BOOKINGS.STATUS_BOOKING.URL(bookingId),
        queryOptions: {
            queryKey: `payment-status-${bookingId}`,//
            refetchInterval: maxRetries > 0 ? POLLING_DELAY : false,
            refetchIntervalInBackground: true
        }
    });

    useEffect(() => {
        if (!data || maxRetries < 0) return;

        const status = data.bookingStatus;

        if ([BOOKING_STATUS.CONFIRMED,
        BOOKING_STATUS.EXPIRED,
        BOOKING_STATUS.CANCELLED
        ].includes(status)) {
            setPaymentStatus(status);
            setMaxRetries(0);
            return;
        }

        if (maxRetries == 1) {
            setPaymentStatus(BOOKING_STATUS.ERROR);
            setMaxRetries(0);
            return;
        }

        setMaxRetries(prev => prev - 1);

    }, [data, maxRetries])

    return ({ paymentStatus });

}

export default usePollPaymentStatus;