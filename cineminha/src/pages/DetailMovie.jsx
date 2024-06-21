import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

function DetailMovie () {
    const {id} = useParams()

    const[filme, setFilmes] = useState({})

    useEffect( ()=>{

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilmes(response))
        .catch (error => console.log(error))

    },[])

    return (
        <>
        <div className="container mx-auto">
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <img className="w-full" src={`https://image.tmdb.org/t/p/w1280/${filme.backdrop_path}`} alt={filme.title} />
          <div className="p-6">
            <h1 className="text-3xl font-bold  mb-2">{filme.title}</h1>
            <p className=" mb-4">{filme.overview}</p>
            <p>Avaliação: {filme.vote_average}</p>
          </div>
        </div>
      </div>
        </>
    );
}

export default DetailMovie ;