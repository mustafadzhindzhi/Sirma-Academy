import React, { createContext, useState } from "react";

const ThemeContext = createContext("light");

function ThemeProvider({children}) {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

function withTheme(Child) {
    return function (props) {
        return (
            <ThemeContext.Consumer>
                {(context) => <Child {...props} {...context} />}
            </ThemeContext.Consumer>
        )
    }
}

export {ThemeProvider, ThemeContext, withTheme}