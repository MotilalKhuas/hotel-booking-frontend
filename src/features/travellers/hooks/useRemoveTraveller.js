import API_CONFIG from "@/config/api.config";
import useMutation from "@/lib/hooks/useMutation";
import { toast } from "sonner";

const useRemoveTraveller = ({ id, setAllGuests, setOpen }) => {
    const { mutate, isPending } = useMutation({
        url: API_CONFIG.GUESTS.REMOVE_GUEST.URL(id),
        method: API_CONFIG.GUESTS.REMOVE_GUEST.METHOD,
    });

    const handleRemoveTraveller = () => {
        mutate(null, {
            onSuccess() {
                setAllGuests(prev => prev.filter(g => g.id !== id));
                toast.success("Traveller deleted successfully.");
            },
            onError(error) {
                toast.error("Failed to delete traveller.", {
                    description: error.message,
                });
            },
            onSettled() {
                setOpen(false);
            },
        });
    };

    return { handleRemoveTraveller, isPending };
};

export default useRemoveTraveller;
