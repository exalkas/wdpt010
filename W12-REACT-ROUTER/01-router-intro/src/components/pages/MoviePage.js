import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react'

function MoviePage(props) {

    const [movie, setMovie] = useState({})

    const {movieid} = useParams()

    useEffect(() => {

        const getData = async () => {
            try {
      
                const result = await fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=`)
                
                const data = await result.json()
                console.log("🚀 ~ data", data)

                setMovie(data)
                
              } catch (error) {
                console.log('Error:', error.message)
              }
        }

        getData()
    }, [])

    return (
        <div>
            Movie id is: {movieid}
            <p>{movie.title}</p>
            <p>{movie.overview}</p>
            <p>{movie.tagline}</p>
        </div>
    );
}

export default MoviePage;