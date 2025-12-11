import { useForm } from "react-hook-form"
import { Container } from "../components/Container"
import { Section } from "../components/Section"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginInputsSchema, type LoginInputs } from "./LoginPageModels"
import { Button } from "../components/Button"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../app/redux/hooks"
import { loginUser } from "../entities/userSlice"

export const LoginPage = () => {
     type Inputs = {
        label: 'email' | 'password',
        placeholder: string,
        type: string
    }[]
    const inputs: Inputs = [{
        placeholder: 'Введите email',
        label: 'email',
        type: 'text'
    }, {
        placeholder: 'Введите пароль',
        label: 'password',
        type: 'password'
    }]

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const {handleSubmit, formState, register, reset} = useForm<LoginInputs>({
        resolver: zodResolver(LoginInputsSchema)
    })

    const onSuccess = () => {
        navigate('/')
        reset()
    }

    const onSubmit = (data: LoginInputs) => {
        dispatch(loginUser({data, onSuccess}))
    }

    return <Section>
        <Container className="flex flex-col items-center justify-center mb24 p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-md p-6 mb-6 bg-white rounded-xl">
                    {inputs.map((input, index) => (
                    <label htmlFor={input.label} key={index} className="w-full">
                        <input type={input.type} placeholder={input.placeholder} className="w-full border-zinc-300 rounded border-solid border-1 outline-none p-3" {...register(input.label)}/>
                        {formState.errors[input.label] && <span className="text-red-500">{formState.errors[input.label]?.message}</span> }
                    </label>
                    ))}
                    <Button>Войти</Button>
                </form>
                <Link to={'/register'}>Зарегистрироватся</Link>
        </Container>
    </Section>
}