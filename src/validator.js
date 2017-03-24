import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        <input type="text" value={this.state.user} placeholder="Enter Email" onChange={this.validUser}/>
        <input type="text" placeholder="Enter Password" onChange={this.validPassword} />
        <input type="text" placeholder="Re-Enter Password" onChange={this.validValidator}/>
        <input type="submit" value="Submit" />
        </form>
    );
  }
}

export default Validator;
