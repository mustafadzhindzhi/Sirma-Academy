import { useContext, useState } from "react";
import { ThemeContext } from "../context/useThemeContext.js";

function Counter (props) {
    const [count, setCount] = useState(0);
    const theme = useContext(ThemeContext);

    return (
        <div>
            <p>{theme.theme}</p>
            <p>Count {count}</p>
            <button onClick={() => {
                theme.setTheme("dark")
                setCount(count+1)}}>Increment</button>
        </div>
    )
}

export default Counter;