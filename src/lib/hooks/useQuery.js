import { useQuery as useRq } from '@tanstack/react-query'
import axiosInstance from '../axios-instance'

const useQuery = ({url, axiosOptions = {}, queryOptions = {}}) => {

    const {queryKey, queryFn, ...restQueryOptions} = queryOptions;

    const {data, isLoading, error, refetch} = useRq({
        queryKey : [queryKey, url],
        queryFn : async ()=>{
            const response = await axiosInstance.get(
                url,
                axiosOptions
            )
            return response.data
        },
        staleTime : 50000,
        ...restQueryOptions,
    })

    return ({data, isLoading, error, refetch})
}

export default useQuery