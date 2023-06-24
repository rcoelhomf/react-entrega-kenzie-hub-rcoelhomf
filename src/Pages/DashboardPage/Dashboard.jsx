import logo from '../../assets/Logo.png'
import { useContext } from 'react'
import { StyleHeadline, StyleHeadlineBold, StyleTitle1, StyleTitle2, StyleTitle3 } from '../../Styles/Typography'
import { toast } from 'react-toastify'
import Puff from 'react-loading-icons/dist/esm/components/puff'
import { LoadDiv, StyledDiv, StyledHeader, StyledSection } from './style'
import { UserContext } from '../../Providers/UserProvider'
import { TechList } from '../../Components/TechList/TechList'
import { TechContext } from '../../Providers/TechProvider'
import { Modal } from '../../Components/Modal/Modal'
import { Input } from '../../Components/Input/Input'
import { Select } from '../../Components/Select/Select'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { addTechSchema } from './AddTechSchema'
import { api } from '../../Services/Api'

export const DashboardPage = () => {

   const { navigate, user, isLoading, loadUser, techs, setTechs } = useContext(UserContext)
   const { handleModal, setHandleModal } = useContext(TechContext)
   const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(addTechSchema),
   })
    
    loadUser()

    const handleLogOut = () => {
        toast.success('LogOut realizado com sucesso')
        localStorage.removeItem('@KenzieHub:Token')
        localStorage.removeItem('@KenzieHub:UserId')
        navigate('/')
    }

    const openModal = () => {
        setHandleModal(true)
    }

    const closeModal = () => {
        setHandleModal(false)
    }

    const addSubmit = async (formData) => {

        const token = localStorage.getItem('@KenzieHub:Token')
        const config = {
            headers: {
                Authorization: `Barear ${token}`
            }
        }

        try {
            await api.post('/users/techs', formData, config)
            await api.get('/profile', config)
            .then(({ data }) => {
                setTechs([...data.techs])
            })
            toast.success('Tecnologia adicionada') 
        } catch (error) {
            toast.error(error)
        } finally {
            reset()
            setHandleModal(false)
        }

    }


    
    return(
        <>
            <StyledSection>
                <nav>
                    <img src={logo} alt='Logo da KenzieHub em letras rosas' />
                        <button className='logOut' onClick={handleLogOut}>Sair</button>
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
                        <StyleTitle1>Olá, {user?.name}</StyleTitle1>
                        <StyleHeadlineBold font='var(--color-grey-1)'>{user?.course_module}</StyleHeadlineBold>
                    </div>
                </StyledHeader>
                <StyledDiv>
                    <div className='divHeader'>
                        <StyleTitle2>Tecnologias</StyleTitle2>
                        <button className='plusBtn' onClick={openModal}>+</button>
                    </div>
                    {techs.length == 0 ? (
                    <StyleHeadline>Nenhuma tecnologia cadastrada</StyleHeadline>
                    ): <TechList />}
                    {handleModal ? (<Modal>
                        <div className='modalHeader'>
                            <StyleTitle3>Cadastrar Tecnologia</StyleTitle3>
                            <button className='closeBtn' onClick={closeModal}>X</button>
                        </div>
                        <form className='addForm' onSubmit={handleSubmit(addSubmit)}>
                            <Input 
                                label={'Nome'}
                                type='text'
                                placeholder='Nome da Tecnologia'
                                register={register('title')}
                                errors={errors.title}
                            />
                            <Select
                                label={'Selecionar Status'}
                                register={register('status')}
                            >
                                <option>Iniciante</option>
                                <option>Intermediário</option>
                                <option>Avançado</option>
                            </Select>
                            <button className='buttonAdd' type='submit'>Cadastrar Tecnologia</button>
                        </form>
                    </Modal>) : null}
                </StyledDiv>
            </>
            )}
        </>
    )
}