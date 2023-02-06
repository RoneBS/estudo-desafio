import { Link } from 'react-router-dom'
import { FilmSlate, MagnifyingGlass } from 'phosphor-react'
import { ChangeEvent, useEffect, useState, useCallback } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { api } from '@/services/api'
import { HeaderModal } from './components/HeaderModal'
import { SearchedMovieProps } from './type'

import * as S from './styles'

const apiKey = import.meta.env.VITE_API_KEY

export function Header() {
  const [search, setSearch] = useState('')
  const [searchedMovies, setSearchedMovies] = useState<SearchedMovieProps[]>([])

  const debounced = useDebouncedCallback((search) => {
    setSearch(search)
  }, 500)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    debounced(e.target.value)
  }

  const handleSearchMovie = useCallback(async () => {
    const { data } = await api.get(
      `search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`
    )
    console.log(data.results)
    setSearchedMovies(data.results)
    setSearch('')
  }, [search])

  useEffect(() => {
    if (search === '') return
    handleSearchMovie()
  }, [handleSearchMovie, search])
  console.log(search)
  return (
    <S.Container>
      <nav>
        <Link to={'/'}>
          <p>Filmes</p>
          <FilmSlate weight="fill" style={{ color: 'white' }} />
        </Link>

        <input
          type="text"
          placeholder="buscar"
          defaultValue={''}
          onChange={handleChange}
        />
        <MagnifyingGlass style={{ color: 'white' }} />
      </nav>
      <S.ModalContainer>
        {searchedMovies.map((movie) => (
          <HeaderModal
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        ))}
      </S.ModalContainer>
    </S.Container>
  )
}
