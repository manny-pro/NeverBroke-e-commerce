/*
import React, { Component } from "react";

export default function Register (this: any e: any) {
  constructor(props) {
    super(props);
    this.state={
      fname: "",
      lname: "",
      email: "",
      password: "",
     };
  }
  handleSubmit(e){
    e.preventionDefault(); 
    const{fname, lname, email, password} = this.state;
    console.log(fname, lname, email, password);
    fetch("http://localhost:3018/users/register")
  }
  return (
    <form onSubmit={this.handleSubmit}>
      <h3>Sign Up</h3>

       <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={e=> setState({fname: e.target.value})}
        />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input type="text" className="form-control" placeholder="Last name" 
        
        onChange={e=> this.setState({lname: e.target.value})}/>
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={e=> this.setState({email: e.target.value})}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={e=> this.setState({password: e.target.value})}
        />
      </div>
          
      <div className="d-grid"> 
        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="#">sign in?</a>
      </p>
    </form>
  );
}

function setState(arg0: { fname: string; }): void {
  throw new Error("Function not implemented.");
}
function handleSubmit() {
  throw new Error("Function not implemented.");
}
*/