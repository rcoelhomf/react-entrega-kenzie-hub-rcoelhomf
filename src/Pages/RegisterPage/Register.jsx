import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/Logo.png'
import { Input } from '../../Components/Input/Input'
import { useForm } from 'react-hook-form'
import { Select } from '../../Components/Select/Select'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from './RegisterSchema'
import { api } from '../../Services/Api'
import { toast } from 'react-toastify'
import { StyleHeadline, StyleTitle1 } from '../../Styles/Typography'
import { StyledHeader, StyledMain } from './style'

export const RegisterPage = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema)
    })
    const navigate = useNavigate()

    const submit = async(formData) => {
        const postData = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            bio: formData.bio,
            contact: formData.contact,
            course_module: formData.course_module,
        }
        try {
            const { data } = await api.post('/users', postData)
            toast.success('Cadastro realizado!')
            setTimeout(() => {
                navigate('/')
            }, 1000)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return(
        <>
            <StyledHeader>
                <img src={logo} alt='Logo da KenzieHub em letras rosas' />
                <Link to={'/'}>
                    <button>Voltar</button>
                </Link>
            </StyledHeader>
            <StyledMain>
                <form onSubmit={handleSubmit(submit)} noValidate>
                    <StyleTitle1>Crie sua conta</StyleTitle1>
                    <StyleHeadline font={'var(--color-grey-1)'}>Rapido e grátis, vamos nessa</StyleHeadline>
                    <Input
                        label={'Nome'}
                        type='text'
                        register={register('name')}
                        placeholder='Digite aqui seu nome'
                        errors={errors.name}
                    />
                    <Input 
                        label={'Email'}
                        type='email'
                        register={register('email')}
                        placeholder='Digite aqui seu email'
                        errors={errors.email}
                    />
                    <Input 
                        label={'Senha'}
                        type='password'
                        register={register('password')}
                        placeholder='Digite aqui sua senha'
                        errors={errors.password}
                    />
                    <Input 
                        label={'Confirmar Senha'}
                        type='password'
                        register={register('confirm')}
                        placeholder='Digite novamente sua senha'
                        errors={errors.confirm}
                    />
                    <Input 
                        label={'Bio'}
                        type='text'
                        register={register('bio')}
                        placeholder='Fale sobre você'
                        errors={errors.bio}
                    />
                    <Input 
                        label={'Contato'}
                        type='text'
                        register={register('contact')}
                        placeholder='Opção de contato'
                        errors={errors.contact}
                    />
                    <Select
                        label={'Selecionar módulo'}
                        register={register('course_module')}
                        errors={errors.course_module}
                    >
                        <option>Primeiro módulo (Introdução ao Frontend)</option>
                        <option>Segundo módulo (Frontend Avançado)</option>
                        <option>Terceiro módulo (Introdução ao Backend)</option>
                        <option>Quarto módulo (Backend Avançado)</option>
                    </Select>
                    <button className='registerBtn' type='submit'>Cadastrar</button>
                </form>
            </StyledMain>
        </>
    )
}