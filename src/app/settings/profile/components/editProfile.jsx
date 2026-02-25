import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {
    RadioGroup,
    RadioGroupItem
} from "@/components/ui/radio-group"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { useAuthContext } from '@/lib/providers/authContextProvider';
import useEditProfileForm from '../hooks/useEditProfileForm';

const EditProfile = () => {

    const { authenticatedUser, setAuthenticatedUser } = useAuthContext();
    const { form, updateProfileHandler, isPending } = useEditProfileForm(authenticatedUser, setAuthenticatedUser);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(updateProfileHandler)} className='space-y-6'>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name (as per Govt. ID)</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="John Doe"
                                    className="!bg-transparent !shadow-none !border-gray-300 h-10"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="inline-flex items-center gap-2">
                                Email
                                <div className="text-[10px] text-primary bg-blue-100 px-2 py-1 rounded-full">
                                    Not Editable
                                </div>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    disabled
                                    placeholder="johndoe@gmail.com"
                                    className="!bg-transparent !shadow-none !border-gray-400 h-10"
                                />
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
                                    className="!bg-transparent !shadow-none !border-gray-300 h-10 px-3 tracking-[10px]"
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
                                    <div className={`flex items-center px-4 rounded-md border h-10 space-x-1 0 cursor-pointer space-y-0 ${field.value == "MALE" ? "bg-blue-50 !border-primary" : "bg-none !border-gray-300"}`}>
                                        <RadioGroupItem
                                            value="MALE"
                                            id="option-one"
                                            className="text-blue-400 w-auto h-auto border-0 rounded-none"
                                            CustomNode={() => <Icon icon="male" className="bg-transparent" size="20px" />}
                                        />
                                        <Label htmlFor="option-one">Male</Label>
                                    </div>
                                    <div className={`flex items-center px-4 rounded-md border h-10 space-x-1 cursor-pointer space-y-0 ${field.value == "FEMALE" ? "!border-pink-500 bg-pink-50" : "bg-none !border-gray-300"}`}>
                                        <RadioGroupItem
                                            value="FEMALE"
                                            id="option-two"
                                            className="text-pink-400 w-auto h-auto border-0 rounded-none"
                                            CustomNode={() => <Icon icon="female" size="20px" />}
                                        />
                                        <Label htmlFor="option-two">Female</Label>
                                    </div>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    disabled={isPending}
                    size="lg"
                    type="submit"
                >
                    <Icon icon="save" />
                    Save Changes
                </Button>
            </form>
        </Form>
    )
}

export default EditProfile