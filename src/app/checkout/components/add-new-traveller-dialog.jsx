import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import AddOrEditTravellerDialog from "@/features/travellers/components/addOrEditTravellerDialog";
import { useState } from "react";

const AddNewTravellerDialog = () => {

    const [open, setOpen] = useState(false);

    return (
        <AddOrEditTravellerDialog
            mode="add"
            titleText="Add New Traveller"
            submitButtonText="Add To Travellers List"
            trigger={
                <Button
                    size="sm"
                    variant="link"
                    aria-label="Add Guests"
                    className="gap-1 text-xs font-semibold transition-opacity hover:opacity-80 hover:no-underline h-auto !p-0"
                >
                    <Icon icon="plus" />
                    <span>Add New Guest</span>
                </Button>
            }
            isDialogOpen = {open}
            setIsDialogOpen = {setOpen}
        />
    )
}

export default AddNewTravellerDialog;