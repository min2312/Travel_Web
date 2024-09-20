import React from "react";
import "../Features/features.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import feature1 from "../../assets/images/beach-umbrella.png";
import feature2 from "../../assets/images/deal.png";
import feature3 from "../../assets/images/location.png";
import feature4 from "../../assets/images/medal.png";
const Features = () => {
	const featureList = [
		{
			id: 0,
			image: feature1,
			title: "Discover the possibilities",
			des: "With nearly half a million attractions, hotels & more, you're sure to find joy.",
		},
		{
			id: 1,
			image: feature2,
			title: "Enjoy deals & delights",
			des: "Quality activities. Great prices. Plus, earn credits to save more.",
		},
		{
			id: 2,
			image: feature3,
			title: "Exploring made easyt",
			des: "Book last minute, skip lines &amp; get free cancellation for easier exploring.",
		},

		{
			id: 3,
			image: feature4,
			title: "Travel you can trust",
			des: "Read reviews & get reliable customer support. We're with you at every step.",
		},
	];
	var settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: false,
					dots: true,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: false,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					autoplay: true,
					prevArrow: false,
					nextArrow: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					prevArrow: false,
					nextArrow: false,
				},
			},
		],
	};
	return (
		<section className="feature-section">
			<Container>
				<Row>
					<Col md="12">
						<Slider {...settings}>
							{featureList.map((value, index) => {
								return (
									<Card key={index}>
										<Card.Img
											variant="top"
											src={value.image}
											className="img-fluid"
											alt={value.title}
										></Card.Img>
										<Card.Title>{value.title}</Card.Title>
										<Card.Text>{value.des}</Card.Text>
									</Card>
								);
							})}
						</Slider>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Features;
