import React, { Component } from "react";
import './App.css';
import validator from 'validator';

class App extends Component {


    state = {
      email: "",
      password: "",
      effectualMessage: "",
      emailFormatError: false,
      passwordFormatError: false,
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
      emailFormatError: false,
      effectualMessage: "",
    })
  }else {
    this.setState({
      emailFormatError: true,
      effectualMessage: `Please enter your email address in desired format: yourname@example.com  `
    })
  }
} )}

//============================================================================================================//
//============================================================================================================//
handelOnChangePassword = (event)=>{
  this.setState({

    [event.target.name]: event.target.value,
  }, ()=>{
    const {password} = this.state;

    // check if given string matches
    let isPassword = validator.matches(password, "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$" );

    // if password format-validator results to true, state remains normal
    // otherwise alert should prompt user instructing the accepted validated password format
    if(isPassword){
      this.setState({
        passwordFormatError: false,
        effectualMessage: ''
      })
    } else {
      this.setState({
        passwordFormatError: true,
        effectualMessage: `Password must contain: 
        - A minimum of 8 characters
        - 1 Uppercase Letter,  
        - 1 Lowercase Letter,
        - 1 Number,  
        - and 1 of these special characters " #?!@$%^&*_ "`
      });
    }

  });
}


//============================================================================================================//
//============================================================================================================//


render () { 

const {effectualMessage, emailFormatError, passwordFormatError}= this.state

  let showSignUpComponent = <form>
            <div className="login-info-box" >
            <h2>Sign Up</h2>
            {emailFormatError  ? <div>{effectualMessage}</div>: ""}
            <br/>
                <input 
                type="text"
                placeholder="enter email"
                name="email"
                onChange={this.handleOnChangeEmail}
                />
                {" "}<br />

                
              {passwordFormatError ? <div>{effectualMessage}</div>: ""}
                <input
                type="text"
                placeholder="enter password"
                name="password"
                onChange={this.handelOnChangePassword}
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
