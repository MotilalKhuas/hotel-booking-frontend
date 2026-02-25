import React from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import useRemoveTraveller from "../hooks/useRemoveTraveller";
import { useGuestContext } from "@/lib/providers/guestContextProvider";

const RemoveTraveller = ({ id, isDialogOpen, setIsDialogOpen }) => {

    const [open, setOpen] = [isDialogOpen, setIsDialogOpen];
    const { setAllGuests } = useGuestContext();

    const { handleRemoveTraveller, isPending } = useRemoveTraveller({ id, setAllGuests, setOpen });

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Remove Traveler</AlertDialogTitle>
                    <AlertDialogDescription>
                        Are you sure you want to remove this traveler? This action cannot be
                        undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel disabled={isPending}>
                        No, Keep it
                    </AlertDialogCancel>

                    <AlertDialogAction
                        disabled={isPending}
                        onClick={(e) => {
                            e.preventDefault();
                            handleRemoveTraveller();
                        }}
                        className="bg-red-400 hover:bg-red-500"
                    >
                        Remove Traveler

                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default RemoveTraveller;
