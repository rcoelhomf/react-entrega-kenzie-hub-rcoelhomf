import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../Services/Api'
import { toast } from 'react-toastify'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [techs, setTechs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const loadUser = () => {
        
        const token = localStorage.getItem('@KenzieHub:Token')
        const config = {
            headers: {
                Authorization: `Barear ${token}`
            }
        }

        useEffect(() => {
        
            setIsLoading(true)
            
            const loadData = async () => {
                try {
                    await api.get('/profile', config)
                    .then(({ data }) => {
                        setUser(data)
                        setTechs([...data.techs])
                })
                    
                } catch (error) {
                    toast.error(error.responde.data.message)
                }finally {
                    setIsLoading(false)
                }
            }
            loadData()
        }, [])

    }

    const submit = async (formData) => {
        try {
            const { data } = await api.post('/sessions', formData)
            localStorage.setItem('@KenzieHub:Token', data.token)
            localStorage.setItem('@KenzieHub:UserId', data.user.id)

            toast.success('Login realizado')
            navigate('/dashboard')
        } catch (error) {
            toast.error(error.response.data.message)
        }
        
    }

    
    const registerSubmit = async(formData) => {
        const postData = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            bio: formData.bio,
            contact: formData.contact,
            course_module: formData.course_module,
        }
        try {
            await api.post('/users', postData)
            toast.success('Cadastro realizado!')
            setTimeout(() => {
                navigate('/')
            }, 1000)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }


    return (
      <UserContext.Provider
        value={{ navigate, user, techs, setTechs, isLoading, loadUser, submit, registerSubmit }}
      >
        {children}
      </UserContext.Provider>
    );
}