import { Route, Routes } from 'react-router'
import { PrivateRouteWrapper } from './components/organisms/private-route-wrapper'

import { Home } from './pages/home'
import { Profile } from './pages/profile'
import { Signup } from './pages/signup'
import { Signin } from './pages/signin'
import { Discover } from './pages/discover'

export default function Router() {
  return (
    <Routes>

      <Route element={<PrivateRouteWrapper expectedAuthenticateStatus={true} />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/interest" element={<Profile />} />
      </Route>

      <Route element={<PrivateRouteWrapper expectedAuthenticateStatus={false} />}>
        <Route path="/auth/signin" element={<Signin />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Route>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="*" element={<div>não encontrado</div>} />
    </Routes>
  )
}