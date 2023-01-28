import { Route, Routes } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { MovieDetail } from '@/pages/MovieDetail'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie-detail/:id" element={<MovieDetail />} />
    </Routes>
  )
}
