import Navbar from "../Componentes/Navbar";

function Header() {
    return ( 
        <header className="flex justify-around bg-blue-500 text-black pb-5 mb-3 font-bold">
            <Navbar/>
            <span>Olá, visitante!</span>
            <h1>Bem-vindo ao Cinemita!</h1> 
        </header>
     );
}

export default Header ;