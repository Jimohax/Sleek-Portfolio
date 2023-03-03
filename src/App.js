import "./App.css";
import Contact from "./Components/Contact/Contact";
import Experiences from "./Components/Experiences/Experiences.jsx";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";

import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import Works from "./Components/Works/Works";
import { ThemeContext } from "./Context";
import { useContext } from "react";

function App() {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div
			className="App"
			style={{
				background: darkMode ? "black" : "",
				color: darkMode ? "white" : "",
			}}
		>
			<Navbar />
			<Intro />
			<Services />
			<Experiences />
			<Works />
			<Portfolio />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
