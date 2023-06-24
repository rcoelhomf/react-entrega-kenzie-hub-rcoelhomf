import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../Pages/LoginPage/Login'
import { RegisterPage } from '../Pages/RegisterPage/Register'
import { DashboardPage } from '../Pages/DashboardPage/Dashboard'
import { ProtectedRoutes } from '../Components/ProtectedRoutes/ProtectecRoutes'
import { PublicRoutes } from '../Components/PublicRoutes/PublicRoutes'

export const RoutesMain = () => {
    return(
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path='/' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
                <Route path='/dashboard' element={<DashboardPage />} />
            </Route>
        </Routes>
    )
}