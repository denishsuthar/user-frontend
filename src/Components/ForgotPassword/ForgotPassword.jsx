import React, { useState } from 'react'
import "../Login/Login.css"
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { forgetPassword } from '../../Redux/actions/userAction';



const ForgotPassword = () => {

    const [email, setEmail] = useState("")
    const dispatch = useDispatch()


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(forgetPassword(email))
      };

  return (
    <>
      <div className="wrapper">
        <div className="title">Forgot Password</div>
        <form onSubmit={submitHandler} autoComplete="off">
          <div className="field">
            <input
              type={"email"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <label>Email Address</label>
          </div>
          <div className="field">
            <input type="submit" value="Submit" />
          </div>
          <div className="signup-link">
            Go Back to <Link to="/">Login</Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default ForgotPassword
