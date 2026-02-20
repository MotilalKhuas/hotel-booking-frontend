import { useContext, createContext, useState, useEffect } from "react";
import useQuery from "../hooks/useQuery";
import API_CONFIG from "@/config/api.config";
import { Navigate, Outlet, useLocation } from "react-router";
import { PATHS } from "@/config/path.config";

const AuthContext = createContext({
    authenticatedUser : null,
    setAuthenticatedUser : ()=>{},
    refetchUser : ()=>{}
});

const AuthContextProvider = ({children}) => {
    
    const [authenticatedUser, setAuthenticatedUser] = useState({
        user : null,
        isAuthenticated : false
    });

    const {data, isLoading, error, refetch} = useQuery({
        url:API_CONFIG.USER.PROFILE,
        queryOptions:{
            queryKey : ["user"],
            retry : false,
        }
    })

    useEffect(()=>{

        if (isLoading) return;

        const newAuthState = {
            user: error ? null : data || null,
            isAuthenticated: !error && !!data
        };

        const isUserSame = authenticatedUser.user === newAuthState.user;
        const isAuthSame = authenticatedUser.isAuthenticated === newAuthState.isAuthenticated;

        if (!isUserSame || !isAuthSame) {
            setAuthenticatedUser(newAuthState);
        }
    },[data, error, isLoading])

    return (
        <AuthContext.Provider value={{
            authenticatedUser, 
            setAuthenticatedUser, 
            refetchUser : refetch
        }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuthContext = ()=>{
    return useContext(AuthContext);
}

const WithAuthContext = ()=>{
    const location = useLocation();
    const {authenticatedUser} = useAuthContext();

    if(!authenticatedUser.isAuthenticated){
        const redirectUrl = `${location.pathname}${location.search}`;
        console.log("url : ", redirectUrl);
        console.log("SEARCH PARAMS : ", location.search);
        return(
            <Navigate to={`${PATHS.SIGN_IN}`} state={{from : redirectUrl}} replace/>
        )
    }

    return <Outlet/>
}

export default AuthContextProvider
export {useAuthContext, WithAuthContext}