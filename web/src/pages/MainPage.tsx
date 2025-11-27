import { useQuery } from "@tanstack/react-query"
import { queryClient } from "../queryClient"
import { Section } from "../components/Section"
import { Container } from "../components/Container"

export const MainPage = () => {
   const {status, data, refetch} = useQuery({
      queryKey: ['table'],
      queryFn: () => fetch('http://localhost:3000/users').then(res => res.json())
   }, queryClient)

   let content = <></>

   switch (status) {
      case 'error':
         content = <p>Ошибка однако</p>
         break
      case 'pending':
         content = <p>Загружается однако</p>
         break
      case 'success':
         content = <li>
                     {data.map((user: {name: string, password: string}) => (
               <ul>
                  <span>{user.name}</span>
                  <span>{user.password}</span>
               </ul>
         ))}
         </li>
   }

   return <Section>
      <Container>
         <h1>Main page</h1>
         {content}
         <button onClick={() => refetch()}>Загрузить таблицу</button>
      </Container>
   </Section>
}