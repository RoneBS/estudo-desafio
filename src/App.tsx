import { GlobalStyles } from '@/styles/global'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '@/routes'
import { Header } from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <GlobalStyles />
    </BrowserRouter>
  )
}

export default App
