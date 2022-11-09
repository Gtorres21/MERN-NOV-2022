import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewOne = (props) => {

    const {id} = useParams();

    const [thisProduct, setThisProduct] = useState(null);

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res =>{
            console.log(res.data)
            setThisProduct(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[id])

    return (
        <div>
            {
                thisProduct ? (
                    <div>
                        {thisProduct.title}
                        <p>Price: ${thisProduct.price}</p>
                        <p>Description: {thisProduct.description}</p>
                    </div>
                ):(
                    <p>loading</p>

                )

            }

        </div>
    )
}

export default ViewOne