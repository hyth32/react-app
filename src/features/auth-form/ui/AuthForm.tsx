import { useForm } from 'react-hook-form'
import { useAuthStore } from '../model/useAuthStore'
import { messages } from '../../../shared/config/i18n/messages'
import { InputField } from '../../../shared/ui/InputField'
import { Button } from '../../../shared/ui/Button'
import { authSchema, type AuthFormValues } from '../model/authSchema'
import { zodResolver } from '@hookform/resolvers/zod'

interface FormValues {
    username: string
    password: string
}

export const AuthForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<AuthFormValues>({
        resolver: zodResolver(authSchema),
    })

    const login = useAuthStore((state) => state.login)

    const onSubmit = (data: FormValues) => {
        login(data.username, data.password)
        reset()
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 max-w-sm mx-auto p-4 border rounded"
        >
            <InputField
                label="Username"
                registration={register('username')}
                error={errors.username?.message}
            />

            <InputField
                label="Password"
                type="password"
                registration={register('password')}
                error={errors.password?.message}
            />

            <Button type="submit">Login</Button>
        </form>
    )
}
