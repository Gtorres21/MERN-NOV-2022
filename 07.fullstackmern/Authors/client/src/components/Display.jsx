import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'


const Display = () => {

    const [authors, setAuthors] = useState([])

    const navigate = useNavigate();



    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
        .then(res => {
            console.log(res.data)
            setAuthors(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


    const goEdit = (authorID) =>{
        console.log(authorID)
        navigate(`/edit/${authorID}`)
    }

        // Delete Route
        const deleteAuthor = (deleteID) => {
            axios.delete(`http://localhost:8000/api/author/${deleteID}`)
            .then(res => {
                console.log("DELETE SUCCESS", res.data)
                // Navigates to Home after successful delete
                setAuthors(authors.filter((author) => author._id !== deleteID))
            })
            .catch(err => {
                console.log(err)
            })
        }

    return (
        <div>
            <Link to ="/new"> Add an Author</Link>
            <br/>
            <div>
                <h3>We have qoutes by: </h3>
                <table style={{border: 20, borderColor: 'black'}}>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions available</th>
                        </tr>
                    </thead>
                    {/* map through here with data */}

                    <tbody>
                    {   
                            authors.map((auth) => {
                                return (
                                    <tr key={auth._id}>
                                        <td>  {auth.author} </td>
                                        <td>  <button onClick={() => goEdit(auth._id)}>Edit</button> | <button onClick={() => deleteAuthor(auth._id)}>Delete</button> </td>
                                    </tr>
                                    )
                                })
                                
                            }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Display