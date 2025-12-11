import { Section } from "../components/Section"
import { Container } from "../components/Container"
import { useMutation } from "@tanstack/react-query"
import { api } from "../app/api/axiosConfig"
import { queryClient } from "../queryClient"
import { Button } from "../components/Button"
   
export const MainPage = () => {
   const {mutate, data, status} = useMutation({
      mutationFn: () => api.get('/user/all'),
      mutationKey: ['user', 'all']
   }, queryClient)

  

   let content = <></>

   switch (status) {
      case 'error': content = <p>Ошибка</p> 
      break
      case 'pending': content = <p>Загрузка</p>
      break
      case 'success': content = <ul className="mb-6">
         {data.data.map((user: {id: string, name: string, email: string}) => (
            <li key={user.id}>{user.name + " " + user.email}</li>
         ))}
      </ul>
      break
   }

   return <Section>
      <Container className="flex flex-col items-start">
         <h1 className="mb-6">Главная страница</h1>
         <Button className="mb-6" onClick={() => mutate()}>Загрузить всех юзеров</Button>
         {content}
      </Container>
   </Section>
}