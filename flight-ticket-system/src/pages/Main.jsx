import { Outlet } from "react-router-dom";

function Main () {
    return (
        <div>
            <h1>I'm home page</h1>
            <Outlet/>
        </div>
    )
}

export default Main;