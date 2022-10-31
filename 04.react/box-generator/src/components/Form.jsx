import React, { useState } from 'react'


const Form = (props) => {

    const [color, setColor] = useState("")

    const createUserForm = (e) => {
        e.preventDefault();
        const newBox = {
            backgroundColor: color,
            width: '100px',
            height: '100px',
        }
        props.addToState(newBox)
        setColor("");
    }





    return (
        <div>
            <form onSubmit={createUserForm}>
                Color: <input onChange={(e) => setColor(e.target.value)} value={color} />
                <button> Add </button>
            </form>

        </div>
    )
}

export default Form