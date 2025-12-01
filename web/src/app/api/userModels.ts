import z from "zod";

export const RegisterUserSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string()
})

export type RegisterUser = z.infer<typeof RegisterUserSchema>

export const FetchUserSchema = z.object({
    name: z.string(),
    email: z.string(),
    id: z.string(),
})

export type FetchUser = z.infer<typeof FetchUserSchema>

export type LoginUser = {
    email: string,
    password: string
}