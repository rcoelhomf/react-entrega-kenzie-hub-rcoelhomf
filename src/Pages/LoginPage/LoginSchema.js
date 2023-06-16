import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string().email('O e-mail é obrigatório'),
    password: z.string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .regex(/(?=.*?[A-Z])/, 'É necessário pelo menos uma letra maiúscula')
    .regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número')
    .regex(/(?=.*[}{,.^?~=+\-_\!@%/*\-+.\|])/, 'É necessário pelo menos um caractere especial')
})