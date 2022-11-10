import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Create = () => {
    
    const [author, setAuthor] = useState("")

    // DB errors array
    const [errors, setErrors] = useState([])

    const navigate = useNavigate();


    const createAuthor = (e) => {
        e.preventDefault();
        console.log(author)

        axios.post("http://localhost:8000/api/author", {author})
        .then(res => {
            console.log("✅ ClIENT SUCCESS")
            console.log(res.data)
            navigate('/')
        })
        .catch(err => {
            console.log("❌✖ ClIENT ERROR")
            console.log(err)
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })   
    }

    return (
        <div>
            

            <div>
                <Link to='/'> Home </Link>
            </div>

            <div>
                {errors.map((err, index) => <p style={{color: 'red'}} key={index}>{err}</p>)}
            </div>

            <h3>Add a new author: </h3>
            
            <form style={{ border: '1px solid black'
            , marginLeft: 250, marginRight: 250, paddingBottom: 20}}
            onSubmit={createAuthor}>

            <p>Name: </p>
            <input type="text" onChange={e => setAuthor(e.target.value)} value={author} />
            <br/>
            <button onClick={()=>navigate('/') }> Cancel</button>
            <button>Submit</button>

            </form>

        </div>
    )
}

export default Create