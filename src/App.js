import React, { Component } from "react";
import './App.css';

class App extends Component {


    state = {
      email: "",
      password: "",
    }

//============================================================================================================//
//============================================================================================================//

handleOnChangeEmail = (event)=>{
// set email state to whatever os updated in the email input
this.setState({
  [event.target.name]: event.target.value,
} )}

render () { 
  let showSignUpComponent = <form>
            <div className="login-info-box" >
            <h2>Sign Up</h2>
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
