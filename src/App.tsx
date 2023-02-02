import { GlobalStyles } from '@/styles/global'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '@/routes'
import { Header } from './components/Header'

GlobalStyles()

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
