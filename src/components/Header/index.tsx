import { Link } from 'react-router-dom'
import { FilmSlate, MagnifyingGlass } from 'phosphor-react'

export function Header() {
  return (
    <header>
      <nav>
        <Link to={'/'}>
          <FilmSlate weight="fill" style={{ color: 'white' }} />
        </Link>

        <input type="text" placeholder="buscar" />
        <MagnifyingGlass />
      </nav>
    </header>
  )
}
