import API_CONFIG from "@/config/api.config"
import { PATHS } from "@/config/path.config";
import useMutation from "@/lib/hooks/useMutation"
import { AUTH_TOKEN_KEY, setStorageItem } from "@/lib/storageManager";
import { signinSchema } from "@/lib/validators/authFormValidator";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";
import {zodResolver} from "@hookform/resolvers/zod"
import { toast } from "sonner";
import { useAuthContext } from "@/lib/providers/authContextProvider";

const useSignInForm = ()=>{

    const navigate = useNavigate();
    const {refetchUser} = useAuthContext(); 

    const form = useForm({
        defaultValues : {
            email : "",
            password : ""
        },
        resolver : zodResolver(signinSchema)
    });

    const {mutate, isPending, error, isSuccess} = useMutation({
        url : API_CONFIG.AUTH.SIGN_IN,
        method : "POST"
    });

    function handleSigninSubmit(data){
        mutate(data,{
            onSuccess : (response)=>{
                setStorageItem(AUTH_TOKEN_KEY, response.accessToken);
                toast.success("Logged In Successfully.");
                refetchUser();
                navigate(PATHS.HOME)
            },
            onError : (error)=>{
                console.log(error);
                toast.error("Login Failed.",{
                    description : error?.message
                });
            }
        });
    }

    return({form, handleSigninSubmit, isPending, error, isSuccess});

}

export default useSignInForm;