import { api } from '../../Services/Api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import logo from '../../assets/Logo.png'
import { useState } from 'react'
import { Input } from '../../Components/Input/Input'
import { useNavigate } from 'react-router-dom'
import { loginSchema } from './LoginSchema'
import { StyleHeadlineBold, StyleHeadlineItalic } from '../../Styles/Typography'

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
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
        } finally {
            reset()
        }
        
    }
    
    return(
        <>
            <header>
                <img src={logo} alt='Logo da KenzieHub escrito em rosa' />
            </header>
            <form onSubmit={handleSubmit(submit)} noValidate>
                <h1>Login</h1>
                <Input 
                label={'Email'} 
                id={'Email'} 
                register={register('email')} 
                type='email'
                placeholder='Digite seu E-mail'                
                />
                {errors.email ? <StyleHeadlineItalic font={'var(--color-negative)'}>{errors.email.message}</StyleHeadlineItalic> : null}
                <Input 
                label={'Senha'} 
                id={'Senha'} 
                marker={true}
                eyeIcon={eyeIcon}
                register={register('password')}
                type={eyeIcon ? 'password' : 'text'}
                placeholder='Digite sua senha' 
                setEyeIcon={setEyeIcon}
                />
                {errors.password ? <StyleHeadlineItalic font={'var(--color-negative)'}>{errors.password.message}</StyleHeadlineItalic> : null}
                <button type='submit'>Entrar</button>
            </form>
            <StyleHeadlineBold font={'var(--color-grey-1)'}>Ainda não possui uma conta?</StyleHeadlineBold>
            <button onClick={() => navigate('/register')}>Cadastrar-se</button>
        </>
    )
}