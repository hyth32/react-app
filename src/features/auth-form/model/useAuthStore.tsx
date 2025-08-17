import { create } from 'zustand'

interface AuthState {
    isAuth: boolean
    login: (username: string, password: string) => void
    logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuth: false,
    login: (username, password) => {
        if (username && password) {
            set({ isAuth: true })
            console.log('Logged in: ', username)
        }
    },
    logout: () => set({ isAuth: false }),
}))
