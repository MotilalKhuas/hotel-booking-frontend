import { Separator } from "@/components/ui/separator";
import useInitCheckout from "./hooks/useInitCheckout";
import BookingDetails from "./components/booking-details";
import InitiatePaymentsButton from "./components/initiate-payment-button";

const CheckoutPage = () => {

    const { data, isPending, isSuccess, error } = useInitCheckout();

    if (isPending || !isSuccess) {
        return <p>Loading...</p>;
    }

    console.log(data);

    return (
        <div className="container flex justify-center my-20">
            <div className="flex-1 max-w-2xl border border-border shadow-lg rounded-xl bg-background py-4">
                <div className="px-4">
                    <h1 className="text-xl font-bold">Booking Checkout</h1>
                </div>
                <Separator className="my-4" />
                <BookingDetails booking={data || {}} />
                <div className="px-4 mt-6">
                    <InitiatePaymentsButton />
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage;