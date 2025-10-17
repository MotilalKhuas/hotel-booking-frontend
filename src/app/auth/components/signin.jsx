import React, {useState} from 'react'
import { Link } from 'react-router'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from '@/components/ui/form.jsx'
import {Input} from "@/components/ui/input.jsx"
import {Button} from "@/components/ui/button.jsx"
import Icon from "@/components/ui/icon"
import useSignInForm from '../hooks/useSigninForm'
import { PATHS } from '@/config/path.config'

const SignIn = () => {

    const [showPassword, setShowPassword] = useState(false);

    const {form, handleSigninSubmit, isPending, isSuccess} = useSignInForm();

    return (
        <div className='w-full'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSigninSubmit)} className="w-full mt-7 space-y-5">
                    <FormField
                        control={form.control}
                        name="email"
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
                                <div className='relative'>
                                    <FormControl>
                                        <Input {...field} 
                                            className="h-10 pr-10 rounded" 
                                            autoComplete="off" 
                                            type={showPassword ? "text" : "password"}
                                        />
                                    </FormControl>
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
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button 
                        disabled = {isPending || isSuccess}
                        type="submit" 
                        className="w-full h-10 cursor-pointer" 
                        aria-label="Create a new Account"
                    >
                        Sign in
                    </Button>
                </form>
            </Form>
            <div className='flex items-center justify-center mt-6 gap-2'>
                <span className='text-sm'>Don't have an account?</span>
                <Link to={PATHS.SIGN_UP} className="text-primary hover:underline">Create Account</Link>
            </div>
        </div>
    )
}

export default SignIn