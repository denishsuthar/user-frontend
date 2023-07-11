import React, { useState } from "react";
import "../Login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../../Redux/actions/userAction";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [image, setImage] = useState("");

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(file);
    };
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("mobileNumber", mobileNumber);
    myForm.append("file", image);

    dispatch(register(myForm));
  };

  return (
    <>
      <div className="wrapper">
        <div className="title">Signup</div>

        <form onSubmit={submitHandler} autoComplete="off">
          <div className="field">
            <input
              type={"text"}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <label>Name</label>
          </div>

          <div className="field">
            <input
              type={"email"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <label>Email</label>
          </div>

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
              type={"number"}
              value={mobileNumber}
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
              required
            />
            <label>Mobile Number</label>
          </div>

          <div className="field">
            <input
              id="file"
              type={"file"}
              accept="image/*"
              onChange={changeImageHandler}
              required
            />
            <label>Profile Photo</label>
          </div>

          <div className="field">
            <input type="submit" value="SignUp" />
          </div>

          <div className="signup-link">
            Already Member ? <Link to="/">Login</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
