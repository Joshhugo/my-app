import React from "react";
import "../style/App.css";
import profile from "../images/project5.jpg";
import share from "../images/_Avatar share button.png";
import shareSecond from "../images/_Avatar share button (1).png";
import slack from "../images/slack.png";
import icon from "../images/Icon.png";

const firstLink = {
	href: "https://training.zuri.team/",
	id: "btn__zuri",
};
const secondLink = {
	title: "The best place to find  books about design and coding",
	href: "http://books.zuri.team",
	id: "books",
};
const thirdLink = {
	title: "The best book to help start your journey in Python",
	href: "https://books.zuri.team/python-for-beginners?ref_id=joshh",
	id: "book__python",
};
const fourthLink = {
	title: "Get to know more about our coders",
	href: "https://background.zuri.team",
	id: "books",
};
const lastLink = {
	title: "Free design book made available by Zuri ",
	href: "https://books.zuri.team/design-rules",
	id: "book__design",
};
const contactLink = {
	id: "contact",
	href: "/contact",
};

const ProfileSection = () => {
	return (
		<div>
			<div className="profile-container">
				<img src={share} className="share" alt="share" />
				<img src={profile} id="profile_img" className="profile" alt="Profile" />
				<img src={shareSecond} className="shareSecond" alt="shareSecond" />
				<h3 id="twitter">Joshhugo_</h3>
				<div id="slack"> Joshh</div>
			</div>
			<div className="containers">
				<div className="link">
					<a href={firstLink.href} id={firstLink.id}>
						Twitter Link
					</a>
					<a title={secondLink.title} href={secondLink.href} id={secondLink.id}>
						Zuri Team
					</a>
					<a title={thirdLink.title} href={thirdLink.href} id={thirdLink.id}>
						Zuri Books
					</a>
					<a title={fourthLink.title} href={fourthLink.href} id={fourthLink.id}>
						Python Books
					</a>
					<a title={lastLink.title} href={lastLink.href} id={lastLink.id}>
						Background Checks for Codes
					</a>
					<a href={contactLink.href} id={contactLink.id}>
						Contact Me
					</a>
				</div>
			</div>
			<div className="top-footer">
				<img src={slack} alt="Logo" className="slack" />
				<img src={icon} alt="Github" />
			</div>
		</div>
	);
};
export default ProfileSection;
