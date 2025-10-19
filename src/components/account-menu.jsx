import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import LinkButton from './ui/linkButton'
import { PATHS } from '@/config/path.config';
import { Button } from './ui/button';
import Icon from './ui/icon';
import useLogoutHandler from '@/app/auth/hooks/useLogout';

const AccountMenu = ({user}) => {

    const {logoutHandler, isPending} = useLogoutHandler();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
                <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/9.x/dylan/svg?seed=${user.name}`}/>
                    <AvatarFallback>${user.name}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-border w-[230px] py-3 px-2">
                <DropdownMenuLabel>
                    <div className='flex gap-2 items-center'>
                        <Avatar>
                            <AvatarImage 
                                src={`https://api.dicebear.com/9.x/dylan/svg?seed=${user.name}`}
                                alt={`Profile image for ${user.name}`}
                            />
                            <AvatarFallback>{user.name}</AvatarFallback>
                        </Avatar>
                        <div className='flex-1 space-y-0.5'>
                            <h4 className='text-sm font-medium max-w-[150px] truncate'>
                                {user.name}
                            </h4>
                            <p className='text-xs text-muted-foreground max-w-[150px] truncate'>
                                {user.email}
                            </p>
                        </div>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator className="my-3"/>

                <DropdownMenuItem>
                    <LinkButton 
                        variant="ghost" 
                        className="flex justify-start w-full"
                        icon="user"
                        iconSize={25}
                        to={PATHS.PROFILE}
                    >
                        My Profile
                    </LinkButton>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LinkButton 
                        variant="ghost" 
                        className="flex justify-start w-full"
                        icon="bookingHistory"
                        iconSize={25}
                        to={PATHS.BOOKING_HISTORY}
                    >
                        My Bookings
                    </LinkButton>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Button
                        variant="ghost"
                        className="flex items-center justify-start gap-2 w-full"
                        onClick = {logoutHandler}
                        disabled = {isPending}
                    >
                        <Icon icon="logout" size={25}/>
                        Logout
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default AccountMenu