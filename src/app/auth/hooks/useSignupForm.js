import API_CONFIG from "@/config/api.config"
import { PATHS } from "@/config/path.config";
import useMutation from "@/lib/hooks/useMutation"
import { signupSchema } from "@/lib/validators/authFormValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";
import { toast } from "sonner";

const useSignupForm = ()=>{
    
    const navigate = useNavigate();

    const form = useForm({
        defaultValues : {
            name : "",
            email : "",
            password : ""
        },
        resolver : zodResolver(signupSchema)
    });

    const {mutate, isPending, error, isSuccess} = useMutation({
        url : API_CONFIG.AUTH.SIGN_UP,
        method : "POST"
    });

    function handleSignupSubmit(data){
        mutate(data,{
            onSuccess : (response)=>{
                toast.success("Account Created Successfully.",{
                    description : "Use your credentials to Sign-in."
                })
                navigate(PATHS.SIGN_IN)
            },
            onError : (error)=>{
                toast.error("Account Creation Failed.",{
                    description : error?.message
                })
            }
        });
    }

    return {form, handleSignupSubmit, isPending, error, isSuccess};
}

export default useSignupForm;