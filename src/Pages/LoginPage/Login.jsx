import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import logo from '../../assets/Logo.png'
import { useContext, useState } from 'react'
import { Input } from '../../Components/Input/Input'
import { Link } from 'react-router-dom'
import { loginSchema } from './LoginSchema'
import { StyleHeadlineBold, StyleTitle1 } from '../../Styles/Typography'
import { StyledHeader, StyledMain } from './style'
import { UserContext } from '../../Providers/UserProvider'

export const LoginPage = () => {

    const { submit } = useContext(UserContext)

    const [eyeIcon, setEyeIcon] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
    })


    
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
                    <Link className='greyBtn' to={'/register'}>Cadastrar-se</Link>
                </form>
            </StyledMain>
        </>
    )
}