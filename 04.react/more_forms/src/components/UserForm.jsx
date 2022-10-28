import React, { useState} from 'react'

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPass, setConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [errorMsgOne, setErrorMsgOne] = useState("");
    const [errorMsgTwo, setErrorMsgTwo] = useState("");
    const [errorMsgThree, setErrorMsgThree] = useState("");
    const [errorMsgFour, setErrorMsgFour] = useState("");




    const formMessage = (val) => {
        setFirstName(val);
        if(val.length >= 2) {
            setErrorMsg("");
        }else{
            setErrorMsg("First name must be at least 2 Characters")
        }
    }

    const formMessageOne = (val) => {
        setLastName(val);
        if(val.length >= 2) {
            setErrorMsgOne("");
        }else{
            setErrorMsgOne("Last name must be at least 2 Characters")
        }
    }
    const formMessageTwo = (val) => {
        setEmail(val);
        if(val.length >= 2) {
            setErrorMsgTwo("");
        }else{
            setErrorMsgTwo("Email must be at least 2 Characters")
        }
    }

    const formMessageThree = (val) => {
        setPassword(val);
        if(val.length > 8){
            setErrorMsgThree("");
        }else{
            setErrorMsgThree("Password must be at least 8 characters")
        }
    }

    const formMessageFour = (val) => {

        setConfirmPassword(val);
        if(val !== password ){
            setErrorMsgFour("Passwords must match")
            
        }else{
            setErrorMsgFour("");

        }
    }




    
    return(<div>

            <form >
                <div>

                    <label>First Name:  </label> 
                    <input type="text" onChange={ (e) => formMessage(e.target.value) } />
                    <p>{errorMsg}</p>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text"onChange={ (e) => formMessageOne(e.target.value)}/>
                    <p>{errorMsgOne}</p>
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => formMessageTwo(e.target.value) } />
                    <p>{errorMsgTwo}</p>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => formMessageThree(e.target.value) } />
                    <p>{errorMsgThree}</p>
                </div>
                <div>
                    <p>{errorMsgFour}</p>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => formMessageFour(e.target.value)} />
                </div>
                
            </form>


        </div>
    );
};
    
export default UserForm;