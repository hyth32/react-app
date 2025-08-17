import z from 'zod'
import { messages } from '../../../shared/config/i18n/messages'

export const authSchema = z.object({
    username: z.string().nonempty(messages.auth.usernameRequired),
    password: z.string().nonempty(messages.auth.passwordRequired),
})

export type AuthFormValues = z.infer<typeof authSchema>
