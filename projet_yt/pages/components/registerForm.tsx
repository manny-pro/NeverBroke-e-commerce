import Link from 'next/link';
import React, { useState } from 'react'
import axios from 'axios';
import Router from 'next/router';

function registerForm({error} : any) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e: any) => {
    e.preventDefault();
    const Users = {username, password, email};
    console.log(Users);
      axios 
      .post('http://localhost:3018/users/register', Users, { params:{ username, email, password }})
      .catch
    Router.push('http://localhost:3000/App')
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>register</h2>
        {(error !="") ? ( <div className="error">{error}</div> ) : ""}
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" onChange={(e) =>setUsername(e.target.value)} value={username}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" onChange={(e) =>setEmail(e.target.value)} value={email}/>
        </div>
        <div className="form-group">
          <label htmlFor="fpassword">fpassword: </label>
          <input type="fpassword" name="fpassword" id="fpassword" onChange={(e) =>setPassword(e.target.value)} value={password}/>
        </div>
        <div className="bouton">
        <input type="submit" value="register" />
        <h3> Want to log in? </h3>
        <Link href="/components/loginForm">
          <input type='submit' value="login" />
        </Link>
        </div>
        </div>
    </form>
  )
}

export default registerForm;