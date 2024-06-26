import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { NotFound } from './pages/app/404'
import { Error } from './pages/app/error'
import { Home } from './pages/app/home'
import { Post } from './pages/app/post'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/post/:number', element: <Post /> },
      { path: '/:user:number', element: <Home /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      // { path: '/sign-in', element: <SignIn /> },
      // { path: '/sign-up', element: <SignUp /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
