import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { PopularMovie } from "./type"
 
const imgMediumPath = import.meta.env.VITE_MEDIUM_IMG_PATH

const apiKey = import.meta.env.VITE_API_KEY

import '../../styles/styles.css'

export function Card() {
  const [popularMovies, setPopularMovies] = useState<PopularMovie[]>([])

  async function getPopularMovies() {
    const {data} = await api.get(`popular?api_key=${apiKey}`)
    const formattedMovies = data.results.map((movie:PopularMovie) => ({
        ...movie, 
        image: `${imgMediumPath}${movie.poster_path}`
      }
    ))
    
    setPopularMovies(formattedMovies)
  }
  
  useEffect(() => {
    getPopularMovies()
  },[])
  return (
    <div className="container">
    <div className="wrap">
      {popularMovies.map(movie => (
        <div className="card" key={movie.id}>
          <img src={movie.image} alt={movie.title} />
          <strong>{movie.title}</strong>
        </div>
      ))}
    </div>
   </div>
  )
}