import { useEffect, useState } from 'react'
import { api } from '@/services/api'
import { PopularMovie } from './type'

import * as S from './styles'
import { Link } from 'react-router-dom'

const imgMediumPath = import.meta.env.VITE_MEDIUM_IMG_PATH

const apiKey = import.meta.env.VITE_API_KEY

export function Card() {
  const [popularMovies, setPopularMovies] = useState<PopularMovie[]>([])

  async function getPopularMovies() {
    const { data } = await api.get(`popular?api_key=${apiKey}`)
    const formattedMovies = data.results.map((movie: PopularMovie) => ({
      ...movie,
      image: `${imgMediumPath}${movie.poster_path}`
    }))

    setPopularMovies(formattedMovies)
  }

  useEffect(() => {
    getPopularMovies()
  }, [])
  return (
    <S.Container>
      <S.CardContainer>
        {popularMovies.map((movie) => (
          <Link to={`/movie-detail/${movie.id}`} key={movie.id}>
            <S.Card>
              <S.MovieCover src={movie.image} alt={movie.title} />
              <S.Text>{movie.title}</S.Text>
            </S.Card>
          </Link>
        ))}
      </S.CardContainer>
    </S.Container>
  )
}
