import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import AddOrEditTravellerDialog from '@/features/travellers/components/addOrEditTravellerDialog';
import { useState } from 'react';

const EditTravellerDialog = ({ guestData }) => {
    const [open, setOpen] = useState(false);
    return (
        <AddOrEditTravellerDialog
            mode="edit"
            guestData={guestData}
            titleText="Edit Traveller"
            submitButtonText="Update Traveler"
            trigger={(
                <Button
                    size="sm"
                    variant="link"
                    aria-label="Edit Guests"
                    className="gap-1 text-xs font-semibold transition-opacity hover:opacity-80 hover:no-underline h-auto !p-0"
                >
                    <Icon icon="edit" />
                </Button>
            )}
            isDialogOpen={open}
            setIsDialogOpen={setOpen}
        />
    )
}

export default EditTravellerDialog