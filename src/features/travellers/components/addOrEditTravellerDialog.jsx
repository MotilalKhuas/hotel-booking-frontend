import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useGuestContext } from '@/lib/providers/guestContextProvider';
import useAddTraveller from '../hooks/useAddTraveller';
import useEditTraveller from '../hooks/useEditTraveller';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const AddOrEditTravellerDialog = ({
    mode = "add",
    guestData = null,
    titleText = "",
    submitButtonText = "",
    trigger = null,
    isDialogOpen,
    setIsDialogOpen
}) => {

    const { setAllGuests } = useGuestContext();
    const [open, setOpen] = [isDialogOpen, setIsDialogOpen];

    const { form, handleSubmit, isPending } =
        (mode === 'add') ?
            useAddTraveller({ setAllGuests, setOpen }) :
            useEditTraveller({ guestData, setAllGuests, setOpen })

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
                <DialogHeader className="pb-3">
                    <DialogTitle className="font-bold">{titleText}</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-4'>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name (as per Govt. ID)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} className="!bg-transparent !shadow-none h-10" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="dateOfBirth"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Date of birth</FormLabel>
                                    <FormControl>
                                        <Input
                                            inputMode="numeric"
                                            placeholder="YYYY/MM/DD"
                                            className="!bg-transparent !shadow-none h-10 px-3 tracking-[10px]"
                                            value={field.value || ""}
                                            onChange={(e) => {
                                                const digits = e.target.value.replace(/\D/g, "").slice(0, 8);
                                                const parts = [
                                                    digits.slice(0, 4),
                                                    digits.slice(4, 6),
                                                    digits.slice(6, 8),
                                                ].filter(Boolean);
                                                field.onChange(parts.join("/"));
                                            }}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Gender</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex gap-3"
                                        >
                                            <div className={`flex items-center px-4 rounded-md border h-10 space-x-1 cursor-pointer space-y-0 ${field.value == "MALE" ? "bg-blue-50 !border-primary" : "!bg-none !border-border"}`}>
                                                <RadioGroupItem
                                                    value="MALE"
                                                    id="option-one"
                                                    className="text-blue-400 w-auto h-auto border-0 rounded-none"
                                                    CustomNode={() => <Icon icon="male" className="!bg-transparent" size="20px" />}
                                                />
                                                <Label htmlFor="option-one">Male</Label>
                                            </div>
                                            <div className={`flex items-center px-4 rounded-md border h-10 space-x-1 cursor-pointer space-y-0 ${field.value == "FEMALE" ? "!border-pink-500 bg-pink-50" : "!bg-none !border-border"}`}>
                                                <RadioGroupItem
                                                    value="FEMALE"
                                                    id="option-two"
                                                    className="text-pink-400 w-auto h-auto border-0 rounded-none"
                                                    CustomNode={() => <Icon icon="female" className="!bg-transparent" size="20px" />}
                                                />
                                                <Label htmlFor="option-two">Female</Label>
                                            </div>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter className="space-x-1">
                            <DialogClose asChild>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    className="text-sm font-semibold border"
                                >
                                    Discard
                                </Button>
                            </DialogClose>
                            <Button
                                disabled={isPending}
                                type="submit"
                                variant="default"
                                className="text-sm font-semibold"
                            >
                                {submitButtonText}
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default AddOrEditTravellerDialog