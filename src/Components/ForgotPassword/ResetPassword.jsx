import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { resetPassword } from '../../Redux/actions/userAction'
import {useParams} from "react-router-dom"
import { useNavigate } from 'react-router-dom';


const ResetPassword = () => {

    const [password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    const dispatch = useDispatch()

    const params = useParams()

    const navigate = useNavigate();


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(resetPassword(params.token, password, confirmPassword))
        navigate('/');
    };

  return (
    <>
      <div className="wrapper">
        <div className="title">Reset Password</div>

        <form onSubmit={submitHandler} autoComplete="off">
          

          <div className="field">
            <input
              type={"password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <label>Password</label>
          </div>

          <div className="field">
            <input
              type={"password"}
              value={confirmPassword}
              onChange={(e) => {
                setconfirmPassword(e.target.value);
              }}
              required
            />
            <label>Confirm Password</label>
          </div>

          <div className="field">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  )
}

export default ResetPassword
