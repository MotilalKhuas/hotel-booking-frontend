import useMutation from "@/lib/hooks/useMutation";
import { useForm } from 'react-hook-form';
import API_CONFIG from '@/config/api.config';
import { toast } from 'sonner';

const useEditTraveller = ({ guestData, setAllGuests, setOpen }) => {

    const form = useForm({
        defaultValues: {
            name: guestData?.name ?? '',
            dateOfBirth: guestData?.dateOfBirth?.replaceAll('-', '/') ?? '',
            gender: guestData?.gender ?? '',
        }
    })

    const { mutate, isPending } = useMutation({
        url: API_CONFIG.GUESTS.UPDATE_GUEST.URL(guestData.id),
        method: API_CONFIG.GUESTS.UPDATE_GUEST.METHOD
    });

    const handleSubmit = (formData) => {
        const payload = {
            ...formData,
            dateOfBirth: formData.dateOfBirth?.replaceAll("/", "-")
        }

        mutate(payload, {
            onSuccess(response) {
                toast.success("Traveler updated successfully.");
                setAllGuests(prev => prev.map(guest =>
                    guest.id === guestData.id
                        ? { ...guest, ...payload }
                        : guest
                ));
                setOpen(false);
            },
            onError(error) {
                toast.error("Traveler update failed.", {
                    description: error?.message
                })
                console.log(error);
            },
        })
    }

    return { form, handleSubmit, isPending }
}

export default useEditTraveller