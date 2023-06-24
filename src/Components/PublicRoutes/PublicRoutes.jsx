import { Navigate, Outlet } from 'react-router-dom'

export const PublicRoutes = () => {

    const token = localStorage.getItem('@KenzieHub:Token')

    return !token ? <Outlet /> : <Navigate to={'/dashboard'} />
}