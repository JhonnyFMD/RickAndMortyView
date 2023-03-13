import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { useCheckAuth } from '../hooks'
import { CheckingAuth } from '../ui'
import { ViewerRoutes } from '../viewer/routes/ViewerRoutes'

export const AppRouter = () => {

  const status = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth/>
  }

  return (
    <Routes>

      {
        (status === 'authenticated')
        ? <Route path='/*' element={ <ViewerRoutes/> } />
        : <Route path='/auth/*' element={ <AuthRoutes/> } />
      }

      <Route path='/*' element={ <Navigate to='/auth/login'/> } />

    </Routes>
  )
}
