import React from "react";
import Banner from "../components/Banner/Banner";
import Search from "../components/Search/Search";
import Features from "../components/Features/Features";
import Tour from "../components/Tour_Destination/Tour";
import PopularPlace from "../components/PopularPlace/PopularPlace";
import Gallery from "../components/Gallery/Gallery";

const Home = () => {
	return (
		<>
			<Banner />
			<Search />
			<Features />
			<Tour />
			<PopularPlace />
			<Gallery />
		</>
	);
};

export default Home;
