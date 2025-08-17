import type { UseFormRegisterReturn } from 'react-hook-form'
import { motion } from 'framer-motion'

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
    return (
        <div className="relative flex flex-col">
            <div className="relative">
                <input
                    {...registration}
                    type={type}
                    placeholder=" "
                    className={`
                        peer border py-2 px-3 rounded w-full outline-none transition text-black
                        ${error ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}
                    `}
                />
                <motion.label
                    initial={false}
                    animate={{}}
                    className={`
                        absolute left-2 bg-inherit px-1 text-gray-500 transition-all duration-200
                        pointer-events-none bg-white
                        top-1/2 -translate-y-1/2 text-base
                        peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm 
                        ${error ? 'peer-focus:text-red-500' : 'peer-focus:text-blue-500'}
                        peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:text-sm
                    `}
                >
                    {label}
                </motion.label>
            </div>
            {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
        </div>
    )
}
