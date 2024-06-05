import { useState } from "react";

function Filmes() {
   
    const[filme, setFilmes] = useState([])

   fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
   .then(response => response.json())
   .then(response => setFilmes(response))
   .catch(error => console.log(error))
   
    return ( 
        <>
        <h1>Filmes</h1>
        <div className="listafilmes">
            {
                filme.map(
                    filme => (
                        <div className="card-filme"></div>
                    )
                )
            }

        </div>
        
        </>
     );
}

export default Filmes ;