import { useGuestContext } from "@/lib/providers/guestContextProvider";
import AddGuestDialog from "./add-guest-dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CheckoutGuests = () => {

    const { selectedGuests, setSelectedGuests } = useGuestContext();

    return (
        <div className='px-4 space-y-4'>
            <h3 className="text-base font-semibold">Guest Details</h3>
            {
                selectedGuests.length > 0 && (
                    <ul className="grid grid-cols-2 gap-6">
                        {selectedGuests.map(guest => (
                            <li
                                key={guest.id}
                                className='flex items-center justify-between pb-2 border-b'
                            >
                                <div className='flex items-center gap-2'>
                                    <div className='flex items-center justify-center rounded-full w-7 h-7 bg-secondary'>
                                        <span className='font-sm font-medium leading-4 uppercase'>
                                            {guest.name.charAt(0)}
                                        </span>
                                    </div>
                                    <p className='font-sm font-medium'>
                                        {guest.name}
                                    </p>
                                </div>
                                <Button
                                    size="icon"
                                    className="w-6 h-6"
                                    variant="ghost"
                                    aria-label="Remove guest"
                                    onClick={() => {
                                        setSelectedGuests(prev => [...prev.filter(g => g.id != guest.id)])
                                    }}
                                >
                                    <Icon icon="close" />
                                </Button>
                            </li>
                        ))}
                    </ul>
                )
            }
            <AddGuestDialog />
        </div>
    )
}

export default CheckoutGuests;