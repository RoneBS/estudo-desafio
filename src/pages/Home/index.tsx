import { Card } from '@/components/Card'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { PopularMovie } from './type'
import { api } from '@/services/api'

const imgMediumPath = import.meta.env.VITE_MEDIUM_IMG_PATH

const apiKey = import.meta.env.VITE_API_KEY

export function Home() {
  const [popularMovies, setPopularMovies] = useState<PopularMovie[] | null>([])

  const [isLoading, setIsLoading] = useState(true)

  async function getPopularMovies() {
    const { data } = await api.get(`movie/popular?api_key=${apiKey}`)
    const formattedMovies = data.results.map((movie: PopularMovie) => ({
      ...movie,
      image: `${imgMediumPath}${movie.poster_path}`
    }))

    setPopularMovies(formattedMovies)
    setIsLoading(false)
  }

  useEffect(() => {
    getPopularMovies()
  }, [])

  if (isLoading) {
    return <p style={{ color: 'white' }}>Carregando...</p>
  }
  return (
    <S.Container>
      <S.CardContainer>
        {popularMovies?.map((movie) => (
          <Card
            key={movie.id}
            image={movie.image}
            title={movie.title}
            id={movie.id}
          />
        ))}
      </S.CardContainer>
    </S.Container>
  )
}
