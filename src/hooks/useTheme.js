import { useEffect, useState } from 'react'

function useTheme() {
    const getTheme = () => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light" || savedTheme === "dark")
            return savedTheme;

        const systemPref = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        return systemPref ? "dark" : "light";
    }

    const [theme, setTheme] = useState(() => getTheme());

    useEffect(() => {
        const root = document.documentElement;

        root.classList.remove("light", "dark");
        root.classList.add(theme);

        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }

    return { theme, toggleTheme }
}

export default useTheme