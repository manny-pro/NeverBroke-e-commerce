import Link from 'next/link';
import React, { useState } from 'react'

function registerForm({register, error} : any) {
  const [details, setDetails] = useState({name: "", email: "", fpassword: "", lpassword: ""});

  const submitHandler = (e: any) => {
    e.preventDefault();

    register(details);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>register</h2>
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
          <label htmlFor="fpassword">fpassword: </label>
          <input type="fpassword" name="fpassword" id="fpassword" onChange={e =>setDetails({...details, fpassword: e.target.value})} value={details.fpassword}/>
        </div>
        <div className="form-group">
          <label htmlFor="lpassword">lpassword: </label>
          <input type="lpassword" name="lpassword" id="lpassword" onChange={e =>setDetails({...details, lpassword: e.target.value})} value={details.lpassword}/>
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