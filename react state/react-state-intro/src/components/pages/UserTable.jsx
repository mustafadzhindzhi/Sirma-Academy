import { useEffect, useState } from "react"
import TableBody from "../organism/TableBody.jsx"
import TableHead from "../organism/TableHead.jsx"

function UserTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(users => console.log(users));
    }, [])
    
    return <table>
        <TableHead data={data}/>
        <TableBody data={data}/>
    </table>
    
    // {
    //     "id": 1,
    //     "name": "Leanne Graham",
    //     "username": "Bret",
    //     "email": "Sincere@april.biz",
    //     "address": {
    //       "street": "Kulas Light",
    //       "suite": "Apt. 556",
    //       "city": "Gwenborough",
    //       "zipcode": "92998-3874",
    //       "geo": {
    //         "lat": "-37.3159",
    //         "lng": "81.1496"
    //       }
    //     },
    //     "phone": "1-770-736-8031 x56442",
    //     "website": "hildegard.org",
    //     "company": {
    //       "name": "Romaguera-Crona",
    //       "catchPhrase": "Multi-layered client-server neural-net",
    //       "bs": "harness real-time e-markets"
    //     }
    //   }
};

export default UserTable