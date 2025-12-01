import { useForm } from "react-hook-form"
import { Button } from "../components/Button"
import { Container } from "../components/Container"
import { Section } from "../components/Section"
import { RegistrationInputSchema, type RegistrationInput } from "./RegistrationPageModels";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { userApi } from "../app/api/userApi";
import { queryClient } from "../queryClient";
import { useNavigate } from "react-router-dom";

export const RegistrationPage = () => {
    type Inputs = {
        label: 'email' | 'password' | 'name',
        placeholder: string,
        type: string
    }[]
    const inputs: Inputs = [{
        placeholder: "Введите имя",
        label: 'name',
        type: 'text',
    }, {
        placeholder: 'Введите email',
        label: 'email',
        type: 'text'
    }, {
        placeholder: 'Введите пароль',
        label: 'password',
        type: 'password'
    }]
    const navigate = useNavigate()

    const {mutate} = useMutation({
        mutationFn: userApi.register,
        onSuccess: () => {
            reset(),
            navigate('/login')
        }
    }, queryClient)

    const {register, handleSubmit, formState, reset} = useForm<RegistrationInput>({
        resolver: zodResolver(RegistrationInputSchema)
    })

    const onSubmit = (data: RegistrationInput) => {
        mutate(data)
    }

    return <Section>
        <Container className="flex flex-col items-center justify-center mb24 p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-md p-6 bg-white rounded-xl">
                {inputs.map((input, index) => (
                <label htmlFor={input.label} key={index} className="w-full">
                    <input type={input.type} placeholder={input.placeholder} className="w-full border-zinc-300 rounded border-solid border-1 outline-none p-3" {...register(input.label)}/>
                    {formState.errors[input.label] && <span className="text-red-500">{formState.errors[input.label]?.message}</span> }
                </label>
                ))}
                <Button>Зарегистрироаться</Button>
            </form>
        </Container>
    </Section>
}