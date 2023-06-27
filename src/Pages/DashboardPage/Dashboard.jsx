import logo from '../../assets/Logo.png'
import { useContext } from 'react'
import { StyleHeadline, StyleHeadlineBold, StyleTitle1, StyleTitle2, StyleTitle3 } from '../../Styles/Typography'
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

export const DashboardPage = () => {

   const { user, isLoading, loadUser, techs, handleLogOut } = useContext(UserContext)
   const { handleModal, setHandleModal, addSubmit } = useContext(TechContext)
   const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(addTechSchema),
   })
    
    loadUser()

    const openModal = () => {
        setHandleModal(true)
    }

    const closeModal = () => {
        setHandleModal(false)
    }

    const handleNewTechs = (formData) => {
        addSubmit(formData)
        reset()
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
                        <form className='addForm' onSubmit={handleSubmit(handleNewTechs)}>
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