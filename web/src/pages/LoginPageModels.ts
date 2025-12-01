import z from "zod";

export const LoginInputsSchema = z.object({
    password: z.string().min(6, 'Не менемм 6 символов'),
    email: z.string().email('Это не email')
})

export type LoginInputs = z.infer<typeof LoginInputsSchema>