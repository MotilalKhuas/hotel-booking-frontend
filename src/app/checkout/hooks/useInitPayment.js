import API_CONFIG from "@/config/api.config";
import useMutation from "@/lib/hooks/useMutation";
import { toast } from "sonner";

const useInitPayment = (id) => {
    const { mutateAsync: mutatePayment } = useMutation({
        url: API_CONFIG.BOOKINGS.PAYMENT_BOOKING.URL(id),
        method: API_CONFIG.BOOKINGS.PAYMENT_BOOKING.METHOD
    })

    const { mutateAsync: mutateAddGuest } = useMutation({
        url: API_CONFIG.BOOKINGS.ADD_GUEST.URL(id),
        method: API_CONFIG.BOOKINGS.ADD_GUEST.METHOD
    })

    const initiatePayment = async (guestId) => {

        try{
            await mutateAddGuest(guestId);
        }catch(error){
            toast.error("Add Guests Failed.", {
                description: error.message
            });
            return;
        }

        try{
            const response = await mutatePayment(null);
            window.location.replace(response?.sessionUrl);
        }catch(error){
            console.log(error);
            toast.error("Initiate Payment Failed.", {
                description: error.message
            });
        }
    }

    return { initiatePayment };
}

export default useInitPayment;