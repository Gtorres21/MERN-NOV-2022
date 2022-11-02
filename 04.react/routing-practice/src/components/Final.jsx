import React from 'react'
import { useParams } from 'react-router-dom'

const Final = () => {
    const { word, wcolor, bgcolor} = useParams();
    return (
        <div>
            {
                isNaN(word)
                ?
                <h1 style={ {color: wcolor, backgroundColor:bgcolor }}> This is word is: {word} </h1>
                :
                <h1 style={ {color: wcolor, backgroundColor:bgcolor }}> This number is: {word} </h1>

            }

        </div>
    )
}

export default Final