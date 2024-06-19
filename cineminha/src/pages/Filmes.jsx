import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

function Filmes() {

    const [filmes, setFilmes] = useState([])

    useEffect( ()=>{

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch (error => console.log(error))

    },[])
    return ( 
        <>
        <h1>Filmes</h1>
        <div className="listaFilmes flex flex-row gap-3 flex-wrap">
            {
                filmes.map(
                    filme => (
                        <>
                        <div className="card-filme h-120 my-4 w-64 rounded-md bg-video bg-cover bg-center shadow-lg cursor-pointer" key={filme.id}>
                        <div className="flex bg-black bg-opacity-0 p-4 w-full h-full hover:bg-opacity-50 transition-all duration-1000">
                        <Link to={`${filme.id}`} className=""><img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}/></Link>
                        </div>
                        </div>
                        </>
                    )
                )
            }
           
        </div>
        </>

     );
}

export default Filmes ;