import React from "react";
import "../Profile/Profile.css"
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/actions/userAction";
import { useNavigate } from 'react-router-dom';


const Profile = ({user}) => {

	const dispatch = useDispatch()
	const logoutHandler = () =>{
		dispatch(logout())
	}

    const navigate = useNavigate();


	const editProfileHandler = () =>{
		navigate('/me/update');
	}

	const changePasswordHandler = () =>{
		navigate('/password/update');
	}
	

  return (
    <>
      <div className="card-container">
	<span className="pro">{user.role}</span>
	<img className="round" src={user.avatar.url} alt="user" />
	<h3>{user.name}</h3>
	<h6>{user.userName}</h6>
	<h5>{user.email}</h5>
	<p>Learning React JS <br/> Back-end developer</p>
	<div className="buttons">
		<button className="primary">
		{user.following.length} Following
		</button>
		<button className="primary ghost">
			{user.followers.length} Follower
		</button>
	</div>
	<div className="skills">
		{/* <h6>Skills</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul> */}
		<button onClick={logoutHandler} className="primary ghost">
			Logout
		</button>
		<button onClick={editProfileHandler} className="primary ghost">
			Edit Profile
		</button>
		<button onClick={changePasswordHandler} className="primary">
			Change Password
		</button>
	</div>
</div>
    </>
  );
};

export default Profile;
