import {z} from "zod"

const signupSchema = z.object({
    name : z
        .string()
        .nonempty("Please enter a valid name.")
        .min(2, "Name must be of at least 2 characters.")
        .max(30, "Name must be less than 30 characters long"),
    email : z
        .email('Please enter a valid email'),
    password : z
        .string()
        .regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,30}$/,
            'Password must be 8-30 characters with uppercase, lowercase, number, special character.',
        ),
});

const signinSchema = z.object({
    email : z
        .email('Please enter a valid email'),
    password : z
        .string()
        .regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,30}$/,
            'Password must be 8-30 characters with uppercase, lowercase, number, special character.',
        ),
})

export {signupSchema, signinSchema}