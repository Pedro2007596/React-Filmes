import Navbar from "./Navbar";

function Footer() {
    return ( 
        <header className="flex justify-around bg-blue-500 text-black pb-5 mb-3">
           <div><span>Cinemita</span>
            <p>Amet minim mollit non deserunt
  ullamco est sit aliqua dolor do amet
  sintelit officia consequat</p></div>
        <div className="flex flex-col">
            <p>Heading</p>
            <Navbar/>
            </div>
            <h1>Bem-vindo ao MovieApp!</h1> 
        </header>
     );
}

export default Footer ;