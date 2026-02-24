import API_CONFIG from "@/config/api.config";
import useMutation from "@/lib/hooks/useMutation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const useAddTraveller = ({ setAllGuests, setOpen }) => {
    const defaultValues = {
        name: "",
        dateOfBirth: "",
        gender: "",
    };

    const form = useForm({
        defaultValues
    })

    const { mutate, isPending } = useMutation({
        url: API_CONFIG.GUESTS.REGISTER_GUEST.URL,
        method: API_CONFIG.GUESTS.REGISTER_GUEST.METHOD,
    });

    const handleSubmit = (formData) => {
        const payload = [{
            ...formData,
            dateOfBirth: formData.dateOfBirth?.replaceAll("/", "-")
        }];

        mutate(payload, {
            onSuccess(response) {
                toast.success("Traveller added successfully.");
                setAllGuests(prev => [...prev, ...response]);
                form.reset(defaultValues);
                setOpen(false);
            },
            onError(error) {
                toast.error("Traveller add failed.", {
                    description: error?.message
                })
            }
        });
    };

    return { form, isPending, handleSubmit };
}

export default useAddTraveller;