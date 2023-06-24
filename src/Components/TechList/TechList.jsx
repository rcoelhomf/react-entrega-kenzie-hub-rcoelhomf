import { useContext } from 'react'
import { UserContext } from '../../Providers/UserProvider'
import { StyleHeadlineBold, StyleTitle3 } from '../../Styles/Typography'
import { TechContext } from '../../Providers/TechProvider'
import { Modal } from '../Modal/Modal'
import { Input } from '../Input/Input'
import { Select } from '../Select/Select'
import { useForm } from 'react-hook-form'
import { StyledContainer, StyledList } from './style'

export const TechList = () => {

    const { techs } = useContext(UserContext)
    const { technology, setTechnology, configSubmit, deleteTech } = useContext(TechContext)
    const { register, handleSubmit } = useForm()

    
    const openListModal = (e) => {
        setTechnology(e.currentTarget.id)
    }

    const closeListModal = (e) => {
        setTechnology(null)
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