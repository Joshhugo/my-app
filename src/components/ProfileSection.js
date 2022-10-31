import React from "react";
import "./App.css";
import profile from "./images/project5.jpg";
import share from "./images/_Avatar share button.png";
import shareSecond from "./images/_Avatar share button (1).png";

const ProfileSection = () => {
	return (
		<div className="profile-container">
			<img src={share} className="share" alt="share" />
			<img src={profile} id="profile_img" className="profile" alt="Profile" />
			<img src={shareSecond} className="shareSecond" alt="shareSecond" />
			<h3 id="twitter">Joshhugo_</h3>
			<div id="slack"> Joshh</div>
		</div>
	);
};
export default ProfileSection;
