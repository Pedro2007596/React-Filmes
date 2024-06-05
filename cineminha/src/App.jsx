import {Outlet} from "react-router-dom"
import Header from "./Componentes/Header"
function App() {

  return (
    
    <main className="container mx-auto">
     <Header/>
     <Outlet/>
     </main>

  )
}

export default App