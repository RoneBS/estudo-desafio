import { PopularMovie } from '@/pages/Home/type'
import { Star } from 'phosphor-react'

import * as S from './styles'
import { Link } from 'react-router-dom'

export function Card({ id, image, title, vote_count }: PopularMovie) {
  return (
    <Link to={`/movie-detail/${id}`}>
      <S.Card>
        <S.MovieCover src={image} alt={title} />
        <S.Text>{title}</S.Text>
        <S.Text>
          <Star />
          {vote_count}
        </S.Text>
      </S.Card>
    </Link>
  )
}
