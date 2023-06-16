import logo from '../../assets/Logo.png'
import { useEffect, useState } from "react"
import { api } from "../../Services/Api"
import { StyleHeadline, StyleHeadlineBold, StyleTitle1 } from '../../Styles/Typography'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Puff from 'react-loading-icons/dist/esm/components/puff'
import { LoadDiv, StyledDiv, StyledHeader, StyledSection } from './style'

export const DashboardPage = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        
        setIsLoading(true)
        
        const loadData = async () => {
            try {
                const { data } = await api.get('/profile') 
                setUser({...data})
            } catch (error) {
                toast.error(error.responde.data.message)
            }finally {
                setIsLoading(false)
            }
        }
        loadData()
    }, [])
    return(
        <>
            <StyledSection>
                <nav>
                    <img src={logo} alt='Logo da KenzieHub em letras rosas' />
                    <Link to={'/'}>
                        <button className='logOut' onClick={() => {
                            toast.success('LogOut realizado com sucesso')
                            localStorage.clear()
                        }}>Sair</button>
                    </Link>
                </nav>
            </StyledSection>
            {isLoading ? (
                <LoadDiv>
                    <Puff height={100} width={100} strokeWidth={3} stroke='#FFFFFF' />
                </LoadDiv>
            ) : (
            <>
                <StyledHeader>
                    <div>
                        <StyleTitle1>Olá, {user.name}</StyleTitle1>
                        <StyleHeadlineBold font='var(--color-grey-1)'>{user.course_module}</StyleHeadlineBold>
                    </div>
                </StyledHeader>
                <StyledDiv>
                    <StyleTitle1>Que pena! Estamos em desenvolvimento :(</StyleTitle1>
                    <StyleHeadline>Nossa aplicação está em desenvolvimento, em breve teremos novidades</StyleHeadline>
                </StyledDiv>
            </>
            )}
        </>
    )
}