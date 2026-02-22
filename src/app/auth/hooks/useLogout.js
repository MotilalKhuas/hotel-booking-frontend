import useMutation from '@/lib/hooks/useMutation'
import API_CONFIG from '@/config/api.config'
import { AUTH_TOKEN_KEY, removeStorageItem } from '@/lib/storageManager'
import { useAuthContext } from '@/lib/providers/authContextProvider'
import { toast } from 'sonner'
import { useQueryClient } from '@tanstack/react-query'

const useLogoutHandler = () => {

    const queryClient = useQueryClient();

    const {setAuthenticatedUser, refetchUser} = useAuthContext();
    
    const {mutate, isPending} = useMutation({
        url : API_CONFIG.AUTH.LOGOUT,
        method : "post"
    })

    const logoutHandler = ()=>{
        mutate({},{
            onSuccess : (response)=>{
                removeStorageItem(AUTH_TOKEN_KEY);
                setAuthenticatedUser({
                    user : null,
                    isAuthenticated : false
                })
                queryClient.removeQueries([['user',API_CONFIG.USER.PROFILE]])
                toast.success("Logged Out Successfully.");
            },
            onError : (error)=>{
              toast.error("Logout Failed.",{
                    description : error?.message || "Something Went Wrong."
                });  
            }
        })
    }

    return ({logoutHandler, isPending})
}

export default useLogoutHandler