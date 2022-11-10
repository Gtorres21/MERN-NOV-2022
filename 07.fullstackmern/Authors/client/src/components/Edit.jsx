import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';

const Edit = () => {
    const [author, setAuthor] = useState("")

    const {id} = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(res => {
            console.log(res.data.author)
            setAuthor(res.data.author)
        })
        .catch(err => {
            console.log(err)
        })
    }, [id])


    const editAuthor = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/author/${id}`, {author})
        .then(res => {
            console.log("✅ ClIENT SUCCESS")
            console.log(res.data)
            navigate("/")
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
            <h3>Edit this Author</h3>

            <div>
                {errors.map((err, index) => <p style={{color: 'red'}} key={index}>{err}</p>)}
            </div>

            <form style={{ border: '1px solid black'
            , marginLeft: 250, marginRight: 250, paddingBottom: 20}}
            onSubmit={editAuthor}>

            <p>Name: </p>
            <input type="text" onChange={e => setAuthor(e.target.value)} value={author} />
            <br/>
            <button onClick={()=>navigate('/') }> Cancel</button>
            <button>Edit</button>

            </form>

        </div>
    )
}

export default Edit