import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/App.css";
import ProfileSection from "./pages/ProfileSection";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<ProfileSection />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
