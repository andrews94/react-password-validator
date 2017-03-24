import React, { Component } from 'react';
import Validator from "./Validator"

class Login extends Component {
  render() {
    return(
      <Validator />
    )
  }
}

export default Login;

// class Login extends Component {
//   constructor(props) {
//     super()
//     this.state = {
//       user: "",
//       password: "",
//       validator: ""
//     };
//     this.validUser = this.validUser.bind(this);
//     this.validPassword = this.validPassword.bind(this);
//     this.validValidator = this.validValidator.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   validUser(litty) {
//     this.setState({user: litty.target.value})
//   }
//   validPassword(litty) {
//     this.setState({password: litty.target.value})
//   }
//   validValidator(litty) {
//     this.setState({validator: litty.target.value})
//   }
//   handleSubmit(litty) {
//     litty.preventDefault();
//     if(this.state.password === this.state.validator) {
//       alert("Logged in. Welcome...");
//     } else {
//       alert("Failure Login...");
//     };
//   }
// render() {
//   return (
//     <form onSubmit={this.handleSubmit}>
//       <h1>Sign Up</h1>
//       <input type="text" value={this.state.user} placeholder="Enter Email" onChange={this.validUser}/>
//       <input type="password" value={this.state.password} placeholder="Enter Password" onChange={this.validPassword} />
//       <input type="password" value={this.state.validator} placeholder="Re-Enter Password" onChange={this.validValidator}/>
//       <input type="submit" value="Submit" />
//       </form>
//       );
//     }
//   }
// export default Login
