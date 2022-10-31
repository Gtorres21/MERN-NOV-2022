import React from 'react';


const Display = (props) => {



    return (
        <div>
            {
            props.boxes.map((box, idx) => {
                return <div key={idx}>
                            <p  style={box}></p>
                    </div>
            })
            }
        </div>
    )
}

export default Display