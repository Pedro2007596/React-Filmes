import Navbar from "../Componentes/Navbar";

function Header() {
    return ( 
        <header className="flex bg-[#f0a35b] text-white p-4 mb-4 text-xl justify-between">
        <span>Olá Visitante</span>
        <h1>Bem Vindo ao Cineminha</h1>
        <Navbar />
        </header>
     );
}

export default Header;