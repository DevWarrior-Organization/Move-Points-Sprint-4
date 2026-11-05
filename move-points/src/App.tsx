import { BrowserRouter, useRoutes, type RouteObject } from 'react-router-dom'
import Layout from './components/Layout'
import Contato from './pages/Contato'
import Faq from './pages/Faq'
import Funcionamento from './pages/Funcionamento'
import Home from './pages/Home'
import Integrantes from './pages/Integrantes'
import NotFound from './pages/NotFound'
import Painel from './pages/Painel'
import DetalheRecompensa from './pages/DetalheRecompensa'
import Recompensas from './pages/Recompensas'
import Sobre from './pages/Sobre'

const routeConfig: RouteObject[] = [
  { index: true, element: <Home /> },
  { path: 'integrantes', element: <Integrantes /> },
  { path: 'sobre', element: <Sobre /> },
  { path: 'funcionamento', element: <Funcionamento /> },
  { path: 'painel', element: <Painel /> },
  { path: 'recompensas/:id', element: <DetalheRecompensa /> },
  { path: 'recompensas', element: <Recompensas /> },
  { path: 'faq', element: <Faq /> },
  { path: 'contato', element: <Contato /> },
  { path: '*', element: <NotFound /> },
]

function AppRoutes() {
  return useRoutes([
    {
      element: <Layout />,
      children: routeConfig,
    },
  ])
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
