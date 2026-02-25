import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import LinkButton from '@/components/ui/linkButton'
import { Separator } from '@/components/ui/separator'
import { PATHS } from '@/config/path.config'
import { useAuthContext } from '@/lib/providers/authContextProvider'
import GuestContextProvider from '@/lib/providers/guestContextProvider'
import { getDefaultProfile } from '@/lib/utils'
import { AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
import { Outlet } from 'react-router'
import useLogoutHandler from '../auth/hooks/useLogout'
import Icon from '@/components/ui/icon'

const SettingsLayout = () => {

    const { authenticatedUser } = useAuthContext();
    const { logoutHandler, isPending } = useLogoutHandler();

    return (
        <div className='container flex gap-6 mt-6 mb-12'>
            <aside className='shrink-0 basis-72 sticky top-6 shadow-md rounded-xl px-4 py-6 h-fit'>
                <div className='flex flex-col items-center gap-2'>
                    <Avatar className='size-20'>
                        <AvatarImage
                            loading='lazy'
                            src={getDefaultProfile(authenticatedUser.user.name)}
                        />
                        <AvatarFallback>{authenticatedUser.user.name}</AvatarFallback>
                    </Avatar>
                    <h3
                        className='text-lg font-bold truncate max-w-64'
                    >
                        {authenticatedUser.user.name}
                    </h3>
                    <Separator className="my-4" />
                    <div className='space-y-1 w-full'>
                        <LinkButton
                            variant="ghost"
                            className="flex justify-start items-center gap-2 w-full"
                            activeClassName="bg-primary/10 text-primary pointer-events-none"
                            icon="user"
                            iconSize={"18px"}
                            to={PATHS.SETTINGS.PROFILE}
                        >
                            My Profile
                        </LinkButton>
                        <LinkButton
                            variant="ghost"
                            className="flex justify-start items-center gap-2 w-full"
                            activeClassName="bg-primary/10 text-primary pointer-events-none"
                            icon="bookingHistory"
                            iconSize={"18px"}
                            to={PATHS.SETTINGS.BOOKING_HISTORY}
                        >
                            Booking History
                        </LinkButton>
                        <LinkButton
                            variant="ghost"
                            className="flex justify-start items-center gap-2 w-full"
                            activeClassName="bg-primary/10 text-primary pointer-events-none"
                            icon="travellers"
                            iconSize={"18px"}
                            to={PATHS.SETTINGS.TRAVELERS}
                        >
                            Co-Travelers
                        </LinkButton>
                        <Button
                            variant="ghost"
                            className="flex items-center justify-start gap-2 w-full"
                            onClick={logoutHandler}
                            disabled={isPending}
                        >
                            <Icon icon="logout" size={"18px"} />
                            Logout
                        </Button>
                    </div>
                </div>

            </aside>
            <div className='flex-1'>
                <GuestContextProvider>
                    <Outlet />
                </GuestContextProvider>
            </div>
        </div>
    )
}

export default SettingsLayout