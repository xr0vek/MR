import { useForm } from "react-hook-form"
import { Container } from "../components/Container"
import { Section } from "../components/Section"
import { useMutation } from "@tanstack/react-query"
import { registerUser } from "../app/api/user"
import { queryClient } from "../queryClient"

export const RegistrationPage = () => {
    const {register , handleSubmit} = useForm<{name:string, password: string}>()
    const {mutate} = useMutation({
        mutationFn: registerUser,
        mutationKey: ['register']
    }, queryClient)

    const onSubmit = (data: {name: string, password: string}) => {
        mutate(data)
    }

    return <Section>
        <Container>
            <div className="flex justify-center">
                <form className="flex flex-col gap-6 w-120 p-6 rounded-2xl bg-gray-100" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name" className="border-solid border-gray-500 border-1 rounded">
                    <input className="p-3 outline-none" type="text" {...register('name')} placeholder="Имя"/>
                </label>
                <label htmlFor="password"  className="border-solid border-gray-500 rounded border-1">
                    <input className="p-3 outline-none" type="text" {...register('password')} placeholder="Пароль"/>
                </label>
                <button className="bg-blue-500 p-3 rounded-xl text-white cursor-pointer">Отправить</button>
            </form>
            </div>
        </Container>
    </Section>
}