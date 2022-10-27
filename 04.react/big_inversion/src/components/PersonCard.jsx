import React from 'react'

export const PersonCard = (props) => {

    return (
        <div>
            <ul>
                <li><h2>{props.personProp.lastName}, {props.personProp.firstName}</h2></li>
                <li>Age: {props.personProp.age}</li>
                <li>Hair Color: {props.personProp.hairColor}</li>
            </ul>
        </div>
    ) 

}


