import axios from 'axios'
import React, {useState} from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ListProducts = ({products}) => {


    return (
        <div>
            <h1>All Products</h1>
            {
                products.map((oneProduct) => {
                    return (
                        <div key={oneProduct._id}>
                            <Link to={`product/${oneProduct._id}`}>
                            {oneProduct.title}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListProducts