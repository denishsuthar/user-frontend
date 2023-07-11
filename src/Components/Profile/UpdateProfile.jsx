import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateProfile } from '../../Redux/actions/userAction'
import { useNavigate } from 'react-router-dom';


const UpdateProfile = () => {

    const [name, setName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate();


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateProfile(name, mobileNumber))
		navigate('/profile');
      };

  return (
    <>
      <div className="wrapper">
        <div className="title">Update Profile</div>

        <form onSubmit={submitHandler} autoComplete="off">
          <div className="field">
            <input
              type={"text"}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              
            />
            <label>Name</label>
          </div>

          <div className="field">
            <input
              type={"number"}
              value={mobileNumber}
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
              
            />
            <label>Mobile Number</label>
          </div>

          <div className="field">
            <input type="submit" value="Update" />
          </div>
        </form>
      </div>
    </>
  )
}

export default UpdateProfile
