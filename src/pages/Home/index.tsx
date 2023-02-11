import { Card } from '@/components/Card'
import * as S from './styles'
import { useCallback, useEffect, useState } from 'react'
import { PopularMovie } from './type'
import { api } from '@/services/api'
import { Pagination } from '@/components/Pagination'

const imgMediumPath = import.meta.env.VITE_MEDIUM_IMG_PATH

const apiKey = import.meta.env.VITE_API_KEY

export function Home() {
  const [popularMovies, setPopularMovies] = useState<PopularMovie[] | null>([])

  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)

  const getPopularMovies = useCallback(async () => {
    const { data } = await api.get(
      `movie/popular?api_key=${apiKey}&page=${page}`
    )
    const formattedMovies = data.results.map((movie: PopularMovie) => ({
      ...movie,
      image: `${imgMediumPath}${movie.poster_path}`
    }))
    console.log(data.results)
    console.log(page)
    setPopularMovies(formattedMovies)
    setIsLoading(false)
  }, [page])

  function handlePageBefore() {
    setPage((old) => Math.max(old - 1, 1))
  }

  function handlePageNext() {
    setPage((old) => old + 1)
  }

  useEffect(() => {
    getPopularMovies()
  }, [getPopularMovies])

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
      {popularMovies?.length && (
        <Pagination
          handlePageBefore={handlePageBefore}
          handlePageNext={handlePageNext}
          page={page}
        />
      )}
    </S.Container>
  )
}
