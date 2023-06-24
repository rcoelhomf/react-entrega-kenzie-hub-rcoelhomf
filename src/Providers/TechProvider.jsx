import { createContext, useContext, useState } from 'react';
import { api } from '../Services/Api';
import { UserContext } from './UserProvider';
import { toast } from 'react-toastify';

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {

    const { setTechs } = useContext(UserContext)
    const [ technology, setTechnology ] = useState(null)
    const [ handleModal, setHandleModal ] = useState(false)

    const deleteTech = async () => {

        const token = localStorage.getItem('@KenzieHub:Token')
        const config = {
            headers: {
                Authorization: `Barear ${token}`
            }
        }

        try {
            await api.delete(`/users/techs/${technology}`, config)
            await api.get('/profile', config)
            .then(({ data }) => {
                setTechs([...data.techs])
            })
            toast.success('Tecnologia deletada')
        } catch (error) {
            console.log(error)
        } finally {
            setTechnology(null)
        }


    }

    return (
      <TechContext.Provider
        value={{
          handleModal,
          setHandleModal,
          technology,
          setTechnology,
          deleteTech,
        }}
      >
        {children}
      </TechContext.Provider>
    )
}