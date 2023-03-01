import React, { createContext, useState } from 'react';

export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

export const ThemeContext = createContext({
    theme: DARK_THEME,
    toggleTheme: () => { }
});

const getThemeFromStorage = () => localStorage.getItem('theme');

const setThemeInStorage = (theme) => {
    localStorage.setItem('theme', theme)
}

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(getThemeFromStorage() || DARK_THEME);

    const toggleTheme = () => {
        setTheme(theme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
        setThemeInStorage(theme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
