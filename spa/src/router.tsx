import { Route, Routes } from 'react-router'
import { Home } from './pages/home'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<div>não encontrado</div>} />
    </Routes>
  )
}