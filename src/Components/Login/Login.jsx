import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/actions/userAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <div className="wrapper">
        <div className="title">Login</div>
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

          <div className="content">
            <div className="pass-link">
              <Link to="/forgotpassword">Forgot Password?</Link>
            </div>
          </div>
          <div className="field">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">
            Not a Member ? <Link to="/signup">SignUp</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
