import { createContext, useContext, useEffect, useState } from "react"
import useQuery from "../hooks/useQuery";
import API_CONFIG from "@/config/api.config";

const GuestContext = createContext();

const GuestContextProvider = ({ children }) => {

    const [allGuests, setAllGuests] = useState([]);
    const [selectedGuests, setSelectedGuests] = useState([]);

    const { data } = useQuery({
        url: API_CONFIG.GUESTS.ALL_GUESTS.URL,
        queryOptions: {
            queryKey: "all-guests"
        }
    })

    useEffect(() => {
        console.log(data);
        if (data) setAllGuests([...data])
    }, [data])

    return (
        <GuestContext.Provider value={{
            allGuests, setAllGuests, selectedGuests, setSelectedGuests
        }}>
            {children}
        </GuestContext.Provider>
    )
}

const useGuestContext = () => {
    return useContext(GuestContext);
}

export { useGuestContext }
export default GuestContextProvider;