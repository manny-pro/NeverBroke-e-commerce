import Link from 'next/link';
import React, { useState } from 'react'

function loginForm({Login, error} : any) {
  const [details, setDetails] = useState({name: "", email: "", password: ""});

  const Handlersubmit = (e: any) => {
    e.preventDefault();

    Login(details);
  }

  return (
    <form onSubmit={Handlersubmit}>
      <div className="form-inner">
        <h2>Login</h2>
        {(error !="") ? ( <div className="error">{error}</div> ) : ""}
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" onChange={e =>setDetails({...details, name: e.target.value})} value={details.name}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" onChange={e =>setDetails({...details, email: e.target.value})} value={details.email}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" onChange={e =>setDetails({...details, password: e.target.value})} value={details.password}/>
        </div>
        <div className="bouton">
        <input type="submit" value="LOGIN" />
        <h3> You want to create an account ? </h3>
        <Link href="/components/registerForm">
          <input type='submit' value="SIGN UP" />
        </Link>
        </div>
        </div>
    </form>
  )
}

export default loginForm;
