import AuthLayout from "@/components/layouts/auth.layout.jsx"
import SignIn from "./components/signin.jsx"
import SignUp from "./components/signup.jsx"

const SignInPage = () =>{
    return(
        <AuthLayout title="Welcome Back" description="Please enter your details to sign in " >
            <SignIn/>
        </AuthLayout>
    )
}

const SignUpPage = () =>{
    return(
        <AuthLayout title="Create Account" description="Please fill the form to sign up">
            <SignUp/>
        </AuthLayout>
    )
}

export {SignInPage, SignUpPage}