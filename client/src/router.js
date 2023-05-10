import { createBrowserRouter, redirect } from 'react-router-dom'
import App, { appLoader } from './App'
import AuthForm from './pages/AuthForm'
import { authAction } from './routes/authRoute'

const router = createBrowserRouter([
  {
    path: '/',
    loader: appLoader,
    shouldRevalidate: () => false,
    element: <App />,
    children: [{ path: 'get-in', action: authAction, element: <AuthForm /> }],
  },
  { path: '*', loader: () => redirect('/') },
])

export default router
