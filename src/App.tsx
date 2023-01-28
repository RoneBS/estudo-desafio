import { GlobalStyles } from '@/styles/global'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '@/routes'

GlobalStyles()

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
