import Link from 'next/link';
import React, { useState } from 'react';
import registerForm from './registerForm';
import axios from 'axios';
import Router from 'next/router';

function loginForm() {
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let token = "";

  const Handlersubmit = (e: any) => {
    e.preventDefault();
    const Users = {username, password, email};
    console.log(Users);
      axios 
      .post('http://localhost:3018/users/auth', Users, { params:{ username, email, password}})
      .then((response) => (token = response.data));
      console.log(token);

      localStorage.setItem("Users", username);
      localStorage.setItem("Password", password);
      localStorage.setItem("Email", email);
      localStorage.setItem("Token", token);

      localStorage.getItem("Users")
      localStorage.getItem("Password")
      localStorage.getItem("Email")
      localStorage.getItem("Token")

    if (username == Users.username && password == Users.username && email == Users.email && token) {
      Router.push('http://localhost:3000/Home');
      console.log("logged in");
    } else {
      console.log("Data not match");
      setError("Informations are missing")
    }
  }


  return (
    <form onSubmit={Handlersubmit}>
      <div className="form-inner">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" onChange={(e) =>setUsername(e.target.value)} value={username}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" onChange={(e) =>setEmail(e.target.value)} value={email}/>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" onChange={(e) =>setPassword(e.target.value)} value={password}/>
        </div>
        <div className="bouton">
        <input type="submit" value="LOGIN" />
        <h3> You want to create an account ? </h3>
        <Link href="/components/registerForm">
          <input type='submit' value="SIGN UP" />
        </Link>
        </div>
      </div>
      </div>
    </form>
  )
}

export default loginForm;
