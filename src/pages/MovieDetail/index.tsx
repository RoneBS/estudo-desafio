import { api } from '@/services/api'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieDetailProps } from './type'

const apiKey = import.meta.env.VITE_API_KEY
const imgLargePath = import.meta.env.VITE_LARGE_IMG_PATH

export function MovieDetail() {
  const [movieDetails, setMovieDetails] = useState<MovieDetailProps>(
    {} as MovieDetailProps
  )

  const movieId = useParams()
  const { id } = movieId

  const GetMovieDetails = useCallback(async () => {
    const { data } = await api.get(`${id}?api_key=${apiKey}`)

    console.log(data)
    setMovieDetails(data)
  }, [id])

  useEffect(() => {
    GetMovieDetails()
  }, [GetMovieDetails])

  return (
    <div>
      <h1 style={{ color: 'white' }}>Movie detail</h1>
      <div>
        {movieDetails && (
          <div>
            <p style={{ color: 'white' }}>{movieDetails.title}</p>
            <img
              src={`${imgLargePath}${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <p style={{ color: 'white' }}>{movieDetails.overview}</p>
          </div>
        )}
      </div>
    </div>
  )
}
