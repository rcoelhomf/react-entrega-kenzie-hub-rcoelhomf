import { z } from "zod"

export const registerSchema = z.object({
    name: z.string().nonempty('O campo é obrigatório'),
    email: z.string().nonempty('O campo é obrigatório'),
    password: z.string()
    .min(8, 'A senha deve ter no minimo 8 caracteres')
    .regex(/(?=.*?[A-Z])/, 'É necessário pelo menos uma letra maiúscula')
    .regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número')
    .regex(/(?=.*[}{,.^?~=+\-_\!@%/*\-+.\|])/, 'É necessário pelo menos um caractere especial'),
    confirm:z.string().nonempty('A confirmação é obrigatória'),
    bio: z.string().nonempty('O campo é obrigatório'),
    contact: z.string().nonempty('O campo é obrigatório'),
    course_module: z.string().nonempty('O campo é obrigatório')
}).refine(({password, confirm}) => password === confirm, {
    message: 'As senhas precisam corresponder',
    path: ['confirm'],
})