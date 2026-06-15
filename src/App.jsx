import { Routes , Route } from "react-router-dom"
import Login from "./components/login"
import Secpage from "./components/Secpage"

const App = () => {
  return (
   <>
   <Routes>
    <Route  path={"secpage"} element={< Secpage/>}/>

    <Route  path={"/login"} element={<Login/>}/>
     </Routes>
   </>
  )
}

export default App

