import { api } from '../../Services/Api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import logo from '../../assets/Logo.png'
import { useState } from 'react'
import { Input } from '../../Components/Input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { loginSchema } from './LoginSchema'
import { StyleHeadlineBold, StyleTitle1 } from '../../Styles/Typography'
import { toast } from 'react-toastify'
import { StyledHeader, StyledMain } from './style'

export const LoginPage = () => {
    const [eyeIcon, setEyeIcon] = useState(true)
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
    })
    const navigate = useNavigate()

    const submit = async (formData) => {
        try {
            const { data } = await api.post('/sessions', formData)
            localStorage.setItem('@KenzieHub:Token', data.token)
            localStorage.setItem('@KenzieHub:UserId', data.user.id)
            toast.success('Login realizado')
            setTimeout(() => {
                navigate('/dashboard')
            }, 1000)
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            reset()
        }
        
    }
    
    return(
        <>
            <StyledHeader>
                <img src={logo} alt='Logo da KenzieHub escrito em rosa' />
            </StyledHeader>
            <StyledMain>
                <form onSubmit={handleSubmit(submit)} noValidate>
                    <StyleTitle1>Login</StyleTitle1>
                    <Input 
                        label={'Email'} 
                        register={register('email')} 
                        type='email'
                        placeholder='Digite seu E-mail'
                        errors={errors.email}                
                    />
                    <Input 
                        label={'Senha'} 
                        marker={true}
                        eyeIcon={eyeIcon}
                        register={register('password')}
                        type={eyeIcon ? 'password' : 'text'}
                        placeholder='Digite sua senha' 
                        setEyeIcon={setEyeIcon}
                        errors={errors.password}
                    />
                    <button className='pinkBtn' type='submit'>Entrar</button>
                    <StyleHeadlineBold font={'var(--color-grey-1)'}>Ainda não possui uma conta?</StyleHeadlineBold>
                    <Link className='outsideBtn' to={'/register'}>
                        <button className='greyBtn'>Cadastrar-se</button>
                    </Link>
                </form>
            </StyledMain>
        </>
    )
}