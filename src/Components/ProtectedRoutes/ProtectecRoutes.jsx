import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoutes = () => {

    const token = localStorage.getItem('@KenzieHub:Token')

    return token ? <Outlet /> : <Navigate to={'/'} />
}