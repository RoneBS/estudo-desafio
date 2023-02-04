import { Link } from 'react-router-dom'
import { FilmSlate, MagnifyingGlass } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

export function Header() {
  const [search, setSearch] = useState('')

  const debounced = useDebouncedCallback((search) => {
    setSearch(search)
  }, 500)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    debounced(e.target.value)
  }
  console.log(search)
  return (
    <header>
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
        <MagnifyingGlass />
      </nav>
    </header>
  )
}
