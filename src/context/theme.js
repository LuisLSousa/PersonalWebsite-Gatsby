import React, { createContext, useState } from 'react';

export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';


export const ThemeContext = createContext({
    theme: DARK_THEME,
    toggleTheme: () => { }
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(DARK_THEME);

    const toggleTheme = () => {
        setTheme(theme ===  DARK_THEME ? LIGHT_THEME : DARK_THEME);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};