import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from '../../pages/home/ui/HomePage'
import { AuthPage } from '../../pages/auth/ui/AuthPage'

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/auth', element: <AuthPage /> },
])

export const AppRouter = () => <RouterProvider router={router} />
