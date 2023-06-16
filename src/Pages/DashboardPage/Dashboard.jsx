import logo from '../../assets/Logo.png'
import { useEffect, useState } from "react"
import { api } from "../../Services/Api"
import { StyleHeadlineBold, StyleTitle1 } from '../../Styles/Typography'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const DashboardPage = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        
        setIsLoading(true)
        
        const loadData = async () => {
            try {
                const { data } = await api.get('/profile') 
                console.log(data)
                setUser({...data})
            } catch (error) {
                
            }finally {
                setIsLoading(false)
            }
        }
        loadData()
    }, [])
    return(
        <>
            <nav>
                <img src={logo} alt='Logo da KenzieHub em letras rosas' />
                <button onClick={() => {
                    toast.success('LogOut realizado com sucesso')
                    localStorage.clear()
                    navigate('/')
                }}>Sair</button>
            </nav>
            {isLoading ? (
                <StyleTitle1>Loading...</StyleTitle1>
            ) : (
            <header>
                <StyleTitle1>Olá, {user.name}</StyleTitle1>
                <StyleHeadlineBold font='var(--color-grey-1)'>{user.course_module}</StyleHeadlineBold>
            </header>
            )}
        </>
    )
}