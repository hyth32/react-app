import type { UseFormRegisterReturn } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface InputFieldProps {
    label: string
    type?: string
    placeholder?: string
    error?: string
    registration: UseFormRegisterReturn
}

export const InputField = ({
    label,
    type = 'text',
    placeholder,
    error,
    registration,
}: InputFieldProps) => {
    const [isFocused, setIsFocused] = useState(false)
    const [hasValue, setHasValue] = useState(!!registration.value)

    const handleFocus = () => setIsFocused(true)
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false)
        setHasValue(!!e.target.value)
    }

    const labelVariants = {
        default: {
            top: '50%',
            translateY: '-50%',
            fontSize: '1rem',
            color: '#6b7280',
        },
        focused: {
            top: 0,
            translateY: '-50%',
            fontSize: '0.75rem',
            color: '#3b82f6',
        },
        error: {
            top: 0,
            translateY: '-50%',
            fontSize: '0.75rem',
            color: '#ef4444',
        },
    }

    const currentVariant = error ? 'error' : isFocused || hasValue ? 'focused' : 'default'

    return (
        <div className="relative flex flex-col">
            <div className="relative">
                <input
                    {...registration}
                    type={type}
                    placeholder={placeholder || ' '}
                    className={`
                        peer border py-2 px-3 rounded w-full outline-none transition text-black
                        ${error ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}
                    `}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <motion.label
                    initial={false}
                    variants={labelVariants}
                    animate={currentVariant}
                    className="absolute left-2 px-1 pointer-events-none bg-white"
                >
                    {label}
                </motion.label>
            </div>
            {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
        </div>
    )
}
