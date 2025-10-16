import { useMutation as useRm } from '@tanstack/react-query'
import axiosInstance from '../axiosInstance'

const useMutation = ({url, method, mutationOptions={}}) => {
    const {mutate, isPending, error, isSuccess} = useRm({
        mutationFn : async(data)=>{
            const response = await axiosInstance({
                url,
                method,
                data
            });
            return response.data;
        },
        ...mutationOptions
    })
    return ({mutate, isPending, error, isSuccess});
}

export default useMutation