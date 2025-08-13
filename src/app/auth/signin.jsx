import React, {useState} from 'react'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from '@/components/ui/form.jsx'
import {Input} from "@/components/ui/input.jsx"
import {Button} from "@/components/ui/button.jsx"
import {useForm} from 'react-hook-form'
import Icon from "@/components/ui/icon"

const SignIn = () => {
   const form = useForm({
        defaultValues : {
            email : "",
            password : ""
        }
    });

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        console.log('Got the data...', data);
    };

    return (
        <div className='w-full'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-7 space-y-5">
                    <FormField
                        control={form.control}
                        name="email"
                        type="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input {...field} 
                                        className="h-10 rounded" 
                                        autoComplete="off"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <div className='relative'>
                                        <Input {...field} 
                                            className="h-10 pr-10 rounded" 
                                            autoComplete="off" 
                                            type={showPassword ? "text" : "password"}
                                        />
                                        <Button 
                                            type="button"
                                            variant="ghost" 
                                            className="absolute top-0 right-0 text-primary hover:text-primary h-10 cursor-pointer"
                                            onClick = {()=>setShowPassword(prev=>!prev)}
                                        >
                                            <Icon 
                                                icon={showPassword ? "eye" : "eyeOff"} 
                                                style={{height : 20, width : 20}}
                                            />
                                        </Button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full h-10 cursor-pointer" aria-label="Create a new Account">Create New Account</Button>
                </form>
            </Form>
            <div className='flex items-center justify-center mt-6 gap-2'>
                <span className='text-sm'>Don't have an account?</span>
                <a href="#" className="text-primary hover:underline">Create Account</a>
            </div>
        </div>
    )
}

export default SignIn