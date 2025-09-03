import { Route, Routes } from 'react-router'
import { Home } from './pages/home'
import { Signup } from './pages/signup'
import { PrivateRouteWrapper } from './components/organisms/private-route-wrapper'
import { Profile } from './pages/profile'

export default function Router() {
  return (
    <Routes>

      <Route element={<PrivateRouteWrapper expectedAuthenticateStatus={true} />}>
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route element={<PrivateRouteWrapper expectedAuthenticateStatus={false} />}>
        <Route path="/auth/signin" element={<Signup />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Route>

      <Route path="/" element={<Home />} />
      <Route path="*" element={<div>não encontrado</div>} />
    </Routes>
  )
}