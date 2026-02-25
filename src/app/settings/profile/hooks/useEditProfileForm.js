import API_CONFIG from "@/config/api.config";
import useMutation from "@/lib/hooks/useMutation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const useEditProfileForm = (authenticatedUser, setAuthenticatedUser) => {
    const user = authenticatedUser.user;
    const form = useForm({
        defaultValues: {
            name: user.name ?? "",
            email: user.email ?? "",
            dateOfBirth: user.dateOfBirth?.replaceAll('-', '/'),
            gender: user.gender
        }
    });

    const { mutate, isPending } = useMutation({
        url: API_CONFIG.USER.UPDATE_PROFILE.URL,
        method: API_CONFIG.USER.UPDATE_PROFILE.METHOD
    });

    const updateProfileHandler = (userData) => {
        userData.dateOfBirth = userData.dateOfBirth?.replaceAll('/', '-');
        mutate(userData, {
            onSuccess(response) {
                setAuthenticatedUser((prev) => ({
                    ...prev,
                    user: { ...prev.user, ...userData },
                }));
                toast.success("Profile Updated Successfully.")
            },
            onError(error) {
                toast.error("Profile Updation Failed.", {
                    description: error?.message
                })
            }
        });
    };

    return { form, updateProfileHandler, isPending }
}

export default useEditProfileForm;