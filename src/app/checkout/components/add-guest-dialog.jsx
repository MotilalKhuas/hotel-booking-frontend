import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Icon from "@/components/ui/icon";
import AddNewTraveler from "./add-new-traveler";
import { useGuestContext } from "@/lib/providers/guestContextProvider";
import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import EditTravelerDialog from "./edit-traveler-dialog";

const AddGuestDialog = () => {

    const { allGuests, selectedGuests, setSelectedGuests } = useGuestContext();
    const [tempSelectedGuest, setTempSelectedGuest] = useState([]);
    const [open, setOpen] = useState(false);

    const addGuestHandler = () => {
        setSelectedGuests([...tempSelectedGuest]);
        setOpen(false);
    }

    useEffect(() => {
        setTempSelectedGuest([...selectedGuests]);
    }, [open, allGuests])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    size="sm"
                    variant="link"
                    arial-label="Add Guests"
                    className="gap-1 text-xs font-semibold transition-opacity hover:opacity-80 hover:no-underline h-auto !p-0"
                >
                    <Icon icon="plus" />
                    <span>Add Guests</span>
                </Button>
            </DialogTrigger>
            <DialogContent
                showCloseButton={false}
                onInteractOutside={(e) => e.preventDefault()}
            >
                <DialogHeader className="flex flex-row justify-between items-center pb-3">
                    <DialogTitle className="font-bold">Add Guest</DialogTitle>
                    <AddNewTraveler />
                </DialogHeader>
                <div className='flex flex-col gap-3 max-h-52 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-muted/40 [&::-webkit-scrollbar-thumb]:bg-muted-foreground/30 [&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground/50 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full'>
                    {
                        allGuests.map(guest => (
                            <div className='flex flex-row justify-between' key={guest.id}>
                                <div className='flex items-center gap-3'>
                                    <Checkbox
                                        checked={tempSelectedGuest.some(g => g.id === guest.id)}
                                        onCheckedChange={(checked) => {
                                            setTempSelectedGuest(prev => (
                                                checked ? [...prev, guest] : [...prev.filter(g => g.id != guest.id)]
                                            ))
                                        }}
                                        className={`w-5 h-5 !border-muted-foreground data-[state=checked]:!border-primary`}
                                    />
                                    <p className='text-sm font-medium'>{guest.name}</p>
                                </div>
                                <div>
                                    <EditTravelerDialog />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <DialogFooter className="space-x-1">
                    <DialogClose asChild>
                        <Button
                            variant="outline"
                            className="text-sm font-semibold"
                        >
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        variant="default"
                        className="text-sm font-semibold"
                        onClick={addGuestHandler}
                    >
                        Add to Guest List
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddGuestDialog;