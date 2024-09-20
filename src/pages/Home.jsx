import React from "react";
import Banner from "../components/Banner/Banner";
import Search from "../components/Search/Search";
import Features from "../components/Features/Features";
import Tour from "../components/Tour_Destination/Tour";

const Home = () => {
	return (
		<>
			<Banner />
			<Search />
			<Features />
			<Tour />
		</>
	);
};

export default Home;
