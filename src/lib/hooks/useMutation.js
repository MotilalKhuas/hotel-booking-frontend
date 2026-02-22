import { useMutation as useRm } from '@tanstack/react-query'
import axiosInstance from '../axiosInstance'

const useMutation = ({url, method, mutationOptions={}}) => {
    const {mutate, data, isPending, error, isSuccess} = useRm({
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
    return ({mutate, data, isPending, error, isSuccess});
}

export default useMutation