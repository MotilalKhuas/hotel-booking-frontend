import React from 'react' 
import {Button} from '@/components/ui/button.jsx'
import {SERVICE_LIST} from '@/config/app.config.js'
import Icon from '@/components/ui/icon'
import { Link } from 'react-router'
import { PATHS } from '@/config/path.config'
import { useAuthContext } from '@/lib/providers/authContextProvider'
import AccountMenu from '../account-menu'

const Header = () => {

    const {authenticatedUser} = useAuthContext();

    return (
        <header className="bg-brand py-3">
            <div className='container flex justify-between items-center'>
                <div id="logo-wrapper">
                    <a hrfe="#" aria-label="HotelBooking">
                        <img src="public\assets\booking.com.svg" alt="HotelBooking" width={144} height={24}/>
                    </a>
                </div>
                <div id="auth" className='flex gap-2 justify-center items-center'>
                    {
                        authenticatedUser.isAuthenticated ?
                        <AccountMenu user={authenticatedUser.user}/> :
                        <>
                            <Button 
                                asChild
                                className="bg-white text-primary text-[0.8125rem] font-[650] border-primary rounded-sm hover:bg-white/95 px-3 py-2"
                            >
                                <Link to={PATHS.SIGN_UP}>Register</Link>
                            </Button>
                            <Button
                                asChild 
                                className="bg-white text-primary text-[0.8125rem] font-[650] border-primary rounded-sm hover:bg-white/95 px-3 py-2"
                            >
                                <Link to={PATHS.SIGN_IN}>Sign in</Link>
                            </Button>
                        </>
                    }
                </div>
            </div>
            <div className='container flex gap-1'>
                {
                    SERVICE_LIST.map(item=>{
                        return(
                            <Button key={item.id} className={`flex justify-center items-center gap-2 font-normal bg-transparent hover:bg-white/10 rounded-full shadow-none py-5 ${item.active && 'border-white border-1 bg-white/10'}`}>
                                <Icon icon={item.icon}  style={{ width: '20px', height: '20px'}}/>
                                {item.title}
                            </Button>
                        )
                    })
                }
            </div>
        </header>
    )
}
export default Header