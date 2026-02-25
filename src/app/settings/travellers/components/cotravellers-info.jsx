import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Icon from '@/components/ui/icon';
import AddOrEditTravellerDialog from '@/features/travellers/components/addOrEditTravellerDialog';
import RemoveTraveller from '@/features/travellers/components/removeTraveller';
import { getDefaultProfile } from '@/lib/utils';
import dayjs from 'dayjs'
import { useState } from 'react'

const CoTravellersInfo = ({ name, dateOfBirth, gender, id }) => {

    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
    const age = dayjs().diff(dateOfBirth, 'year');

    return (
        <div className='flex items-center justify-between gap px-2 py-3 [&:not(:last-child)]:border-b'>
            <div className='flex items-center gap-2'>
                <Avatar>
                    <AvatarImage
                        loading="lazy"
                        src={getDefaultProfile(name)}
                        width={36}
                        height={36}
                    />
                    <AvatarFallback>{name && name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <h3 className='text-base font-semibold'>{name}</h3>
                    <p className='text-sm font-medium capitalize text-muted-foreground'>
                        {`${gender}, ${age}Y, ${dateOfBirth}`}
                    </p>
                </div>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="w-8 h-8"
                        aria-label="Manage Co-traveller"
                    >
                        <Icon icon="more" size="16px" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() => setIsEditDialogOpen(true)}
                    >
                        Edit Traveller Info
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="text-destructive focus:text-destructive focus:bg-destructive/20"
                        onClick={() => setIsRemoveDialogOpen(true)}
                    >
                        Remove Traveller
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <AddOrEditTravellerDialog
                mode="edit"
                guestData={{ name, dateOfBirth, gender, id }}
                titleText="Edit Traveller"
                submitButtonText="Update Traveler"
                isDialogOpen={isEditDialogOpen}
                setIsDialogOpen={setIsEditDialogOpen}
            />
            <RemoveTraveller
                id={id}
                isDialogOpen={isRemoveDialogOpen}
                setIsDialogOpen={setIsRemoveDialogOpen}
            />
        </div>
    )
}

export default CoTravellersInfo