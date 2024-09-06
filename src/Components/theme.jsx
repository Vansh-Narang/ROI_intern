import React from "react";

const ThemeToggle = ({ toggleTheme }) => {
    return (
        <div className="theme-toggle">
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemeToggle;
