import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"



const Form = (props) => {
    const [num, setNum] = useState(1);
    const [resource, setResource] = useState("");

    const navigate = useNavigate();


    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(num);
        navigate("/"+ resource + "/" + num)
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>Search for:        
                    <select onChange={ e => setResource(e.target.value)} value={resource}>
                        <option value="planets">Planet</option>
                        <option value="people">People</option>
                    </select>
                </p>
                <p>ID:  
                    <input type="number"  onChange={e => setNum(e.target.value)} value={num} />
                </p>
                <button>Search</button>

            </form>

        </div>
    )
}

export default Form