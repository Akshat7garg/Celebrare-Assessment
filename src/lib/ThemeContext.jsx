import { createContext, useContext } from "react";
import useTheme from "@/hooks/useTheme";

const ThemeContext = createContext({
    theme: "dark",
    toggleTheme: () => { }
});

export default function ThemeProvider({ children }) {
    const { theme, toggleTheme } = useTheme();

    return <ThemeContext.Provider value={{ theme, toggleTheme }} >
        {children}
    </ThemeContext.Provider>
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useThemeContext must be used withiin a themeProvider")
    }

    return context;
}