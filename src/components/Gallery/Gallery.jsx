import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GalleryImg1 from "../../assets/images/g1.jpg";
import GalleryImg3 from "../../assets/images/g3.jpg";
import GalleryImg4 from "../../assets/images/g4.jpg";
import GalleryImg6 from "../../assets/images/g6.jpg";
import GalleryImg7 from "../../assets/images/g7.jpg";
import "../Gallery/gallery.css";
import Lightroom from "react-lightbox-gallery";
const Gallery = () => {
	var images = [
		{
			src: GalleryImg1,
			desc: "Person wearing shoes",
			sub: "Gift Habeshaw",
		},
		{
			src: GalleryImg3,
			desc: "Blonde woman wearing sunglasses smiling at the camera ",
			sub: "Dmitriy Frantsev",
		},
		{
			src: GalleryImg6,
			sub: "Harry Cunningham",
		},
		{
			src: GalleryImg4,
			desc: "Jaipur , Rajasthan India",
			sub: "Liam Baldock",
		},
		{
			src: GalleryImg7,
			sub: "Verne Ho",
		},
		{
			src: GalleryImg6,
			desc: "Rann of kutch , India",
			sub: "Hari Nandakumar",
		},
	];

	var settings = {
		columnCount: {
			default: 3,
			mobile: 2,
			tab: 3,
		},
		mode: "dark",
		enableZoom: false,
	};
	return (
		<section className="gallery slick_slider">
			<Container>
				<Row>
					<Col md="12">
						<div className="main_heading">
							<h1>Photo Gallery</h1>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md="12">
						<Lightroom images={images} settings={settings} />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Gallery;
