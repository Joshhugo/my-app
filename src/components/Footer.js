import React from "react";
import "./App.css";
import slack from "./images/slack.png";
import icon from "./images/Icon.png";
import vector from "./images/Vector.png";
import good from "./images/good.png";

const Footer = () => {
	return (
		<div>
			<div className="top-footer">
				<img src={slack} alt="Logo" className="slack" />
				<img src={icon} alt="Github" />
			</div>
			<div className="end-footer">
				<img src={vector} alt="" className="vector" />
				<div className="space">HNG Internship 9 Frontend Task </div>
				<img src={good} alt="" className="vector good" height={20} />
			</div>
		</div>
	);
};
export default Footer;
