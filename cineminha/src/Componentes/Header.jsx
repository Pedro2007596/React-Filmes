import Navbar from "../Componentes/Navbar";

function Header() {
    return ( 
        <header className="flex justify-around bg-blue-500 text-black pb-5 mb-3">
            <span>Olá, visitante!</span>
            <h1>Bem-vindo ao MovieApp!</h1>
            <Navbar/>
        </header>
     );
}

export default Header ;