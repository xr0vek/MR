import { Button } from "../components/Button"
import { Container } from "../components/Container"
import { Section } from "../components/Section"
import { useAppDispatch } from "../app/redux/hooks"
import { logoutUser } from "../entities/userSlice"
import { useNavigate } from "react-router-dom"

export const AccountPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
   const onSuccess = () => {
    navigate('/')
   } 
   return <Section>
        <Container>
            <h1>Account page</h1>
         <Button onClick={() => dispatch(logoutUser({onSuccess}))}>Выйти</Button>
        </Container>
    </Section>
}