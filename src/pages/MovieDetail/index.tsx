import { api } from '@/services/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const apiKey = import.meta.env.VITE_API_KEY

export function MovieDetail() {
  const [movieDetails, setMovieDetails] = useState([])
  const movieId = useParams()
  const { id } = movieId

  async function GetMovieDetails() {
    const { data } = await api.get(`${id}?api_key=${apiKey}`)
    console.log(data)
    setMovieDetails(data)
  }

  useEffect(() => {
    GetMovieDetails()
  }, [])

  return <h1 style={{ color: 'white' }}>Movie detail</h1>
}
