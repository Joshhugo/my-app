import React from "react";
import "../style/App.css";

const Contact = () => {
	return (
		<div className="form-container">
			<div className="">
				<h2>Contact Me</h2>
			</div>
			<p className="text">
				Hi there, contact me with anything you have in mind
			</p>
			<div>
				<form className="ui form">
					<div className="two fields">
						<div className="field">
							<label> First name</label>
							<input
								type="text"
								name="First_name"
								placeholder="Enter your first name"
								id="first_name"
							/>
						</div>
						<div className="field">
							<label>Last Name</label>
							<input
								type="text"
								name="last_name"
								placeholder="Enter your last name"
								id="last_name"
							/>
						</div>
					</div>
					<div className="field">
						<label>Email</label>
						<input
							type="email"
							name="email"
							placeholder="yourname@email.com"
							id="email"
						/>
					</div>
					<div className="field">
						<label>Message</label>
						<textarea
							style={{ resize: "none" }}
							name="message"
							placeholder="Send me a message and I'll reply you as soon as possible"
							id="message"
						></textarea>
					</div>
					<div>
						<input type="checkbox" name="consent" />
						<label for="consent">
							You agree to providing your data to Joshhugo who may contact you
						</label>
					</div>
					<button className="fluid ui button blue" id="btn__submit">
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};
export default Contact;
