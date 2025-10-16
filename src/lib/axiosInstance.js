import axios from "axios"
import { getStorageItem, removeStorageItem, setStorageItem, AUTH_TOKEN_KEY} from "./storageManager";
import API_CONFIG from "@/config/api.config";

const axiosInstance = axios.create({
    baseURL : import.meta.env.VITE_SERVER_BASE_URL,
    withCredentials : true
});

axiosInstance.interceptors.request.use((request)=>{
    const authToken = getStorageItem(AUTH_TOKEN_KEY);
    if(authToken)
        request.headers.Authorization = `Bearer ${authToken}`; 
    return request;
})

axiosInstance.interceptors.response.use(
    (response)=>{   //success handler
        return response.data;
    },  
    async (error)=>{      //error handler
        const requestConfig = error.config;

        if(!requestConfig || !error.response){
            return Promise.reject("Something went wrong!")
        }

        if(error.response.status === 401){
            if(requestConfig.url == API_CONFIG.AUTH.REFRESH || requestConfig.url == API_CONFIG.AUTH.SIGN_IN){
                removeStorageItem(AUTH_TOKEN_KEY);
            }

            else{
                const response = await axiosInstance({
                    method : "post",
                    url : "/auth/refresh"
                })
                setStorageItem(AUTH_TOKEN_KEY, response.data.accessToken);
                return axiosInstance(requestConfig);
            }
        }

        return Promise.reject({
            ...(error?.response?.data?.error || {}),
            message : error?.response?.data?.error?.message || "Something went wrong!"
        });
    } 
)

export default axiosInstance