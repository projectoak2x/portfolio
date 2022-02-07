import React, { useEffect, useState } from "react"
import {getUser} from "./api.js"

const Test = () => {
    const [counter, setCounter] = useState(0);
    const [user, setUser] = useState('');

    useEffect(() => {
        async function getme(){
            const res = await getUser()
            console.log(JSON.stringify(res))
            setUser(JSON.stringify(res))
        }
        getme()

    },[])


    return (
        <div className="App">
            <p>
                {user}
            </p>
            <p>
                {counter}
            </p>
            <button onClick={() => {setCounter(counter+1);}}>Increase</button>
        </div>
    );
}

export default Test