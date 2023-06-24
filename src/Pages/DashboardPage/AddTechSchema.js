import { z } from 'zod';

export const addTechSchema = z.object({
    title: z.string().nonempty('O campo é obrigatório'),
    status: z.string().nonempty('O campo é obrigatório')
})