import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changePassword } from '../../Redux/actions/userAction'
import { useNavigate } from 'react-router-dom';


const UpdatePassword = () => {

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setnewPassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate();


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(changePassword(oldPassword, newPassword))
        navigate('/profile');
    };
      

  return (
    <>
      <div className="wrapper">
        <div className="title">Change Password</div>

        <form onSubmit={submitHandler} autoComplete="off">
          

          <div className="field">
            <input
              type={"password"}
              value={oldPassword}
              onChange={(e) => {
                setOldPassword(e.target.value);
              }}
              required
            />
            <label>Old Password</label>
          </div>

          <div className="field">
            <input
              type={"password"}
              value={newPassword}
              onChange={(e) => {
                setnewPassword(e.target.value);
              }}
              required
            />
            <label>New Password</label>
          </div>

          <div className="field">
            <input type="submit" value="Change" />
          </div>
        </form>
      </div>
    </>
  )
}

export default UpdatePassword
