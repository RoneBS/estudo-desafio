import { api } from '@/services/api'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieDetailProps } from './type'

import * as S from './styles'

const apiKey = import.meta.env.VITE_API_KEY
const imgPosterPath = import.meta.env.VITE_POSTER_IMG_PATH

export function MovieDetail() {
  const [movieDetails, setMovieDetails] = useState<MovieDetailProps>(
    {} as MovieDetailProps
  )

  const movieId = useParams()
  const { id } = movieId

  const GetMovieDetails = useCallback(async () => {
    const { data } = await api.get(`movie/${id}?api_key=${apiKey}`)

    console.log(data)
    setMovieDetails(data)
  }, [id])

  useEffect(() => {
    GetMovieDetails()
  }, [GetMovieDetails])

  return (
    <div>
      <div>
        {movieDetails && (
          <S.DetailContainer>
            <S.Title>{movieDetails.title}</S.Title>
            <S.ImgPoster
              src={`${imgPosterPath}${movieDetails.backdrop_path}`}
              alt={movieDetails.title}
            />
            <p style={{ color: 'white' }}>{movieDetails.overview}</p>
          </S.DetailContainer>
        )}
      </div>
    </div>
  )
}
