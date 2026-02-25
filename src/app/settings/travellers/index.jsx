import { Separator } from '@/components/ui/separator'
import { useGuestContext } from '@/lib/providers/guestContextProvider'
import { useState } from 'react'
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import CoTravellersInfo from './components/cotravellers-info';
import AddOrEditTravellerDialog from '@/features/travellers/components/addOrEditTravellerDialog';

const Travellers = () => {
    const { allGuests } = useGuestContext();
    const [open, setOpen] = useState(false);
    return (
        <section>
            <div className='flex justify-between'>
                <div className='space-y-0.5'>
                    <h1 className='text-xl font-bold'>Co-Travellers</h1>
                    <p className='text-muted-foreground'>
                        Add, Remove or Update your travellers list
                    </p>
                </div>
                <AddOrEditTravellerDialog
                    mode="add"
                    titleText="Add New Traveller"
                    submitButtonText="Add To Travelers List"
                    trigger={(
                        <Button
                            size={'sm'}
                            variant={'link'}
                            className="h-auto gap-1 p-0 text-sm font-semibold transition-opacity hover:opacity-80 hover:no-underline"
                        >
                            <Icon icon={'plus'} size={16} />
                            Add New Traveler
                        </Button>
                    )}
                    isDialogOpen={open}
                    setIsDialogOpen={setOpen}
                />
            </div>
            <Separator className="mt-4 mb-6" />
            <div className='border rounded-lg'>
                {
                    allGuests.map(guest => (
                        <CoTravellersInfo {...guest} key={guest.id} />
                    ))
                }
            </div>
        </section>
    )
}

export default Travellers