import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/useThemeContext.js";

function DataGetter(props) {
    const [data, setData] = useState(null);
    const theme = useContext((ThemeContext));

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    }, []);

    // return (
    //     <div>
    //         {theme.theme}
    //         {data ? <p>Data:{data.map(item => item.toString())}</p>: <p>Loading...</p>}
    //     </div>
    // )
};

export default DataGetter ;