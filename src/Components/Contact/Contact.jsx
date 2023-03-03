import React, { useState } from "react";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();
	const [done, setDone] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_e3n9q58",
				"template_80gbllo",
				form.current,
				"XmisxSE0cgx-eOabL"
			)
			.then(
				(result) => {
					console.log(result.text);
					setDone(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
            form.current.reset();
	}; 

	return (
		<div className="contact">
			<div className="Sec2-left c-left">
				<div className="Sec2Title">
					<span>Get in touch</span>
					<span>Contact me</span>
				</div>
			</div>
			<div className="cRight">
				<form
					action=""
					onSubmit={sendEmail}
					ref={form}
					className="form"
				>
					<input
						type="text"
						placeholder="Name"
						className="putin"
						name="name"
					/>
					<input
						type="email"
						placeholder="Email"
						className="putin"
						name="email"
					/>
					<textarea
						name="message"
						placeholder="Message"
						className="putin"
						id=""
						cols="30"
						rows="20"
					></textarea>
					<input type="submit" value="Send" className="button c-button" />
					<span>{done && "Thank you for contacting me!"}</span>

					<div
						className="blur s-blur2"
						style={{ background: "var(--purple)" }}
					></div>
					<div
						className="blur"
						style={{ background: "#ABF1FF94", left: "-150%" }}
					></div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
