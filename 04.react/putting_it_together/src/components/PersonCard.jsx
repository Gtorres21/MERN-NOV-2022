import React, { Component } from 'react'

export default class PersonCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            person : this.props.person.age

        }
    }

    increaseNum = () => {
        
        this.setState({
            person: this.state.person +1
        }, () => console.log(this.state.person))

    }


    render() {
        return (
            <div>
                <ul>
                    <li><h1>{this.props.person.firstName}</h1></li>
                    <li>Age: {this.state.person}</li>
                    <li>Hair Color: {this.props.person.hairColor}</li>
                    <button onClick={ ()=> this.increaseNum() }>Birthday Button for {this.props.person.firstName} {this.props.person.lastName}</button>
                    
                </ul>
            </div>
            )
        }
}
