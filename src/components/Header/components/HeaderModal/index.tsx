import { Link } from 'react-router-dom'
import { SearchedMovieProps } from '../../type'

import * as S from './styles'

const imgSmallPath = import.meta.env.VITE_SMALL_IMG_PATH

export function HeaderModal({
  id,
  title,
  poster_path,
  handleClearInput
}: SearchedMovieProps) {
  return (
    <Link to={`/movie-detail/${id}`} onClick={handleClearInput}>
      <S.Container>
        <S.MovieContainer key={id}>
          <img src={`${imgSmallPath}${poster_path}`} alt={title} />
          <strong>{title}</strong>
        </S.MovieContainer>
      </S.Container>
    </Link>
  )
}
