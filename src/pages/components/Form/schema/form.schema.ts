import { z } from "zod"

export const schemaLogin = z.object({
    username: z.string().min(1, "The name is required").regex(/^[^\d]*$/, "The name cannot contain numbers"),
    email: z.string().email("Invalid email").min(1, "Email is required"),
    password: z. string().min(5, "Invalid password: must be at least 6 characters."),
})

export const schemaSignUp = z.object({
    username: z.string().min(1, "The name is required").regex(/^[^\d]*$/, "The name cannot contain numbers"),
    email: z.string().email("Invalid email").min(1, "Email is required"),
    password: z. string().min(5, "Invalid password: must be at least 6 characters."),
    confirmPassword: z.string().min(6, "Passwords do not match. Please check and try again")
}).refine((data)=>data.password=== data.confirmPassword,{
    message: "Passwords are invalid. Make sure they meet the requirements.",
    path: ["confirmPassword"]
})

export const schemaForgotPassword = z.object({
    email: z.string().email("Invalid email").min(1, "Email is required"),
})

export type FormValuesLogin = z.infer<typeof schemaLogin>
export type FormValuesSignUp = z.infer<typeof schemaSignUp>
export type FormValuesForgotPassword = z.infer<typeof schemaForgotPassword>