import React, { useEffect, useContext } from 'react';
import { ThemeContext, DARK_THEME } from "../../context/theme";
import { HiMoon, HiSun } from 'react-icons/hi';

import './themeSwitch.css';


const ThemeSwitch = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        if (theme === DARK_THEME) {
            document.body.classList.add(DARK_THEME);
        }
    }, [theme]);

    return (
        <label className="themeSwitch" aria-label="toggle theme">
            <input type="checkbox" onClick={() => { toggleTheme() }} defaultChecked={theme === DARK_THEME} />
            <span className="slider"></span>
            <div className="themeOptions">
                <HiMoon className="moon" />
                <HiSun className="sun" />
            </div>
        </label>
    );
}

export default ThemeSwitch;