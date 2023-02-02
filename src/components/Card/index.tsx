import { PopularMovie } from '@/pages/Home/type'

import * as S from './styles'
import { Link } from 'react-router-dom'

export function Card({ id, image, title }: PopularMovie) {
  return (
    <Link to={`/movie-detail/${id}`}>
      <S.Card>
        <S.MovieCover src={image} alt={title} />
        <S.Text>{title}</S.Text>
      </S.Card>
    </Link>
  )
}
