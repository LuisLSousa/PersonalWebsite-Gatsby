import React, {useEffect, useContext}  from 'react';
import { ThemeContext } from "../../context/theme";
import { HiMoon, HiSun } from 'react-icons/hi';

import './themeSwitch.css';


const ThemeSwitch = () => {
    const { toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.body.classList.add('dark');
        }
    }, []);

    return (
        <label className="themeSwitch" aria-label="toggle theme">
            <input type="checkbox" onClick={() => { toggleTheme(); }} />
            <span className="slider"></span>
            <div className="themeOptions">
                <HiMoon className="moon" />
                <HiSun className="sun" />
            </div>
        </label>);
}

export default ThemeSwitch;