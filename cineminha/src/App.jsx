import {Outlet} from "react-router-dom"
import Header from "./Componentes/Header"
import Footer from "./Componentes/Footer"
function App() {

  return (
    
    <main className="container mx-auto">
     <Header/>
     <Outlet/>
     <Footer/>
     </main>

  )
}

export default App