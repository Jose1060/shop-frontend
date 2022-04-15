import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Optionsbar from "../components/Optionsbar";
import Products from "../components/Products";
import Slider from "../components/Slider";

function Home() {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Optionsbar />
			<Slider />
			<Categories />
			<Products />
			<Newsletter />
			<Footer />
		</div>
	);
}

export default Home;
