import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import dayjs from 'dayjs';
import CheckoutGuests from "./checkout-guests";

const BookingDetails = ({ booking }) => {

    const checkInDate = dayjs(booking.checkInDate)
        .format('ddd DD MMM YYYY')
        ?.split?.(' ');
    const checkOutDate = dayjs(booking.checkOutDate)
        .format('ddd DD MMM YYYY')
        ?.split?.(' ');

    return (
        <div className="space-y-4">
            <div className="flex gap-2 px-4">
                <div>
                    <img
                        width={130}
                        height={85}
                        src={booking.hotel.photos[0]}
                        alt={booking.hotel.name}
                        className="rounded-lg"
                    />
                </div>
                <div className="flex-1 space-y-1">
                    <h2 className="text-base font-semibold">{booking.hotel.name}</h2>
                    <p className="text-sm text-muted-foreground">
                        {booking.hotel.contactInfo.address}
                    </p>
                    <div className="flex gap-2 items-center">
                        <div className="inline-flex items-center justify-center gap-1 px-2 py-1 rounded bg-brand">
                            <span className="text-xs font-medium text-white">4.3</span>
                            <Icon
                                icon="star"
                                aria-label="rating"
                                size="10px"
                                className="text-white mb-0.5"
                            />
                        </div>
                        <div className="flex items-center gap-1">
                            <p className="text-xs">{`(631 Ratings)`}</p>
                            <span>·</span>
                            <p className="text-xs">Excellent</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-stretch gap-2 border-dashed border-y border-y-blue-100">
                <div
                    aria-label="check-in and check-out dates"
                    className="flex items-center justify-between flex-1 gap-4 p-4 bg-blue-50/40"
                >
                    <div className="flex flex-col">
                        <span className="text-xs font-medium uppercase text-muted-foreground">
                            Check in
                        </span>
                        <p className="text-sm" role="status" aria-label="Check-in date">
                            {checkInDate[0]}&nbsp;
                            <span className="text-xl font-bold">{`${checkInDate[1]} ${checkInDate[2]}`}</span>&nbsp;
                            {checkInDate[3]}
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-medium uppercase text-muted-foreground">
                            Check out
                        </span>
                        <p className="text-sm" aria-label="Check-in date">
                            {checkOutDate[0]}&nbsp;
                            <span className="text-xl font-bold">{`${checkOutDate[1]} ${checkOutDate[2]}`}</span>
                            &nbsp;
                            {checkOutDate[3]}
                        </p>
                    </div>
                </div>
                <div className="flex items-center flex-1 gap-1 p-4 bg-blue-50/40">
                    <p className="text-sm font-medium">
                        <span className="text-base font-semibold">
                            {booking?.roomsCount}
                        </span>
                        {`${booking?.roomsCount > 1 ? ' Rooms' : ' Room'}`}
                    </p>
                    <span className="text-muted-foreground">|</span>
                    <p className="text-sm font-medium">{booking.room.type}</p>
                </div>
            </div>
            <Separator />
            <CheckoutGuests/>
            <div className="px-4 space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Total Price</span>
                    <p className="text-base font-bold">{`₹${booking.amount.toLocaleString()}`}</p>
                </div>
            </div>
        </div>
    )
}

export default BookingDetails;