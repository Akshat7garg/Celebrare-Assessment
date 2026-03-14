import { useThemeContext } from '@/lib/ThemeContext'
import { Moon, Sun } from 'lucide-react'

function ThemeToggler() {
    const { theme, toggleTheme } = useThemeContext()

    const isDark = theme === "dark"

    return (
        <button
            onClick={toggleTheme}
            className="w-14 h-8 flex items-center rounded-full bg-gray-300 dark:bg-gray-700 p-1 transition-all duration-500 ease-in-out cursor-pointer"
        >

            <div
                className={`w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md transform transition-all duration-500 ease-in-out
        ${isDark ? "translate-x-6" : "translate-x-0"}`}
            >

                {isDark ? (
                    <Moon size={14} className='text-black' />
                ) : (
                    <Sun size={14} />
                )}

            </div>

        </button>
    )
}

export default ThemeToggler