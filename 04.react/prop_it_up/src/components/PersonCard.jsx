import React from "react";


class PersonCard extends React.Component{


    render(){
        return(
            <div>
                <ul>
                    <li><h1>{this.props.person.firstName}</h1></li>
                    <li>Age: {this.props.person.age}</li>
                    <li>Hair Color: {this.props.person.hairColor}</li>
                    
                </ul>
            </div>

        )
    }
}

export default PersonCard;
