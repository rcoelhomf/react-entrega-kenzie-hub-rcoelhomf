import { useContext } from 'react'
import { UserContext } from '../../Providers/UserProvider'
import { StyleHeadlineBold, StyleTitle3 } from '../../Styles/Typography'
import { TechContext } from '../../Providers/TechProvider'
import { Modal } from '../Modal/Modal'
import { Input } from '../Input/Input'
import { Select } from '../Select/Select'
import { useForm } from 'react-hook-form'
import { StyledContainer, StyledList } from './style'
import { api } from '../../Services/Api'
import { toast } from 'react-toastify'

export const TechList = () => {

    const { techs, setTechs } = useContext(UserContext)
    const { technology, setTechnology, deleteTech } = useContext(TechContext)
    const { register, handleSubmit, reset } = useForm()

    
    const openListModal = (e) => {
        setTechnology(e.currentTarget.id)
    }

    const closeListModal = (e) => {
        setTechnology(null)
    }

    const configSubmit = async (formData) => {

        const token = localStorage.getItem('@KenzieHub:Token')
        const config = {
            headers: {
                Authorization: `Barear ${token}`
            }
        }

        try {
            await api.put(`/users/techs/${technology}`, formData, config)
            await api.get('/profile', config)
            .then(({ data }) => {
                setTechs([...data.techs])
            })
            toast.success('Tecnologia atualizada')
        } catch (error) {
            console.log(error)
        } finally {
            reset()
            setTechnology(null)
        }
    }




    return (
        <StyledContainer>
            <StyledList>
                {techs.map(item => (
                    <li className='listItem' key={item.id}>
                        <div className='itemDiv' id={item.id} onClick={openListModal}>
                            <StyleTitle3>{item.title}</StyleTitle3>
                            <StyleHeadlineBold font='var(--color-grey-1)'>{item.status}</StyleHeadlineBold>
                        </div>
                        {technology === item.id ? (
                            <Modal>
                                <div className='headerModal'>
                                    <StyleTitle3>Tecnologia Detalhes</StyleTitle3>
                                    <button className='buttonHeader' onClick={closeListModal}>X</button>
                                </div>
                                <form className='editForm' onSubmit={handleSubmit(configSubmit)}>
                                    <Input 
                                        label={'Nome'}
                                        placeholder={item.title}
                                        disabled
                                    />
                                    <Select
                                        label={'Status'}
                                        register={register('status')}
                                    >
                                        <option>Iniciante</option>
                                        <option>Intermediário</option>
                                        <option>Avançado</option>
                                    </Select>
                                    <div className='bottomDiv'>
                                        <button className='submitBtn' type='submit'>Salvar alterações</button>
                                        <span className='deleteBtn' onClick={deleteTech}>Excluir</span>
                                    </div>
                                </form>
                            </Modal>
                        ): null}
                    </li>
                ))}
            </StyledList>
        </StyledContainer>
    )
}