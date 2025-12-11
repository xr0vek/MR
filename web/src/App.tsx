import { useAppDispatch } from "./app/redux/hooks"
import { AppRouter } from "./app/router/AppRouter"
import { fetchUser } from "./entities/userSlice"

function App() {
  const dispatch = useAppDispatch()
  dispatch(fetchUser())

  return (
    <AppRouter/>
  )
}

export default App
