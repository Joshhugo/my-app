import React from "react";

const firstLink = {
	href: "https://training.zuri.team/",
	id: "btn_zuri",
};
const secondLink = {
	title: "The best place to find  books about design and coding",
	href: "http://books.zuri.team",
	id: "books",
};
const thirdLink = {
	title: "The best book to help start your journey in Python",
	href: "https://books.zuri.team/python-for-beginners?ref_id=joshh",
	id: "book_python",
};
const fourthLink = {
	title: "Get to know more about our coders",
	href: "https://background.zuri.team",
	id: "books",
};
const lastLink = {
	title: "Free design book made available by Zuri ",
	href: "https://books.zuri.team/design-rules",
	id: "book_design",
};

const LinkSection = () => {
	return (
		<div className="container">
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
			</div>
		</div>
	);
};
export default LinkSection;
