import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../Pages/LoginPage/Login'
import { RegisterPage } from '../Pages/RegisterPage/Register'
import { DashboardPage } from '../Pages/DashboardPage/Dashboard'

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
    )
}