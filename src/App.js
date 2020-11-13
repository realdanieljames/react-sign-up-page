import React, { Component } from "react";
import './App.css';
import validator from 'validator';

class App extends Component {


    state = {
      email: "",
      password: "",
      effectualMessage: "",
      isError: false,
    }

//============================================================================================================//
//============================================================================================================//

handleOnChangeEmail = (event)=>{
// set email state to whatever os updated in the email input
this.setState({
  [event.target.name]: event.target.value,
}, ()=>{
  //grabbing the email in our state so we can work with it in verifying our inputs
  const {email} = this.state;

  // validator.isEmail to follow if inputted string becomes an accepted email format
  // set to isEmail
  let isEmail = validator.isEmail(email);

  //  if isEmail results to true *- a validated email format 
  //   do nothing, 
  // else show alert to user to input an accepted email format
  
  if(isEmail){ 
    this.setState({
      isError: false,
      effectualMessage: "",
    })
  }else {
    console.log('email email; emal')
    this.setState({
      isError: true,
      effectualMessage: `Please enter your email address in desired format: yourname@example.com  `
    })
  }
} )}

render () { 

const {effectualMessage, isError}= this.state

  let showSignUpComponent = <form>
            <div className="login-info-box" >
            <h2>Sign Up</h2>
            {isError ? <div>{effectualMessage}</div>: ""}
            <br/>
                <input 
                type="text"
                placeholder="enter email"
                name="email"
                onChange={this.handleOnChangeEmail}
                />
                {" "}<br />
                <input
                type="text"
                placeholder="enter password"
                name="password"
                />
                {" "}
                <br />
                <button>Sign Up</button>
            </div>
          </form>
  return (

    <div>
    {showSignUpComponent}

  </div>
    )

  
}}

export default App;
