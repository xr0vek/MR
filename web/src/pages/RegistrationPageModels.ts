import z from "zod"

export const RegistrationInputSchema = z.object({
    email: z.string().email('Это не email'),
    password: z.string().min(6, 'Минимум 6 символов'),
    name: z.string().min(3, 'Минимум 3 символа')
})

export type RegistrationInput = z.infer<typeof RegistrationInputSchema>