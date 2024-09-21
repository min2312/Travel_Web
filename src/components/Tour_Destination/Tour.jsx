import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tour4 from "../../assets/images/Tokyo.png";
import tour5 from "../../assets/images/bali-1.png";
import tour6 from "../../assets/images/bangkok.png";
import tour7 from "../../assets/images/cancun.png";
import tour8 from "../../assets/images/nha-trang.png";
import tour9 from "../../assets/images/phuket.png";
import "../Tour_Destination/tour.css";
const Tour = () => {
	const destinationsData = [
		{
			id: 0,
			name: "Bali",
			tours: "5 tours and activities",
			image: tour5,
			link: "tour-name",
			shortDes: "",
		},
		{
			id: 1,
			name: "Tokyo",
			tours: "9 tours and activities",
			image: tour4,
			link: "tour-name",
		},

		{
			id: 2,
			name: "Bangkok",
			tours: "5 tours and activities",
			image: tour6,
			link: "tour-name",
		},

		{
			id: 3,
			name: "Cancun",
			tours: "4 tours and activities",
			image: tour7,
			link: "tour-name",
		},
		{
			id: 4,
			name: "Nha Trang",
			tours: "9 tours and activities ",
			image: tour8,
			link: "tour-name",
		},
		{
			id: 5,
			name: "Phuket",
			tours: "4 tours and activities",
			image: tour9,
			link: "tour-name",
		},
	];

	var settings = {
		dots: false,
		infinite: true,
		autoplay: true,
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
					autoplay: true,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
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
		<div>
			<section className="tours_section slick_slider">
				<Container>
					<Row>
						<Col md="12">
							<div className="main_heading">
								<h1> Top Destination For Your Next Vacation </h1>
							</div>
						</Col>
					</Row>

					<Row>
						<Col md="12">
							<Slider {...settings}>
								{destinationsData.map((destination, inx) => {
									return (
										<div className="img-box" key={inx}>
											<Card>
												<Card.Img
													variant="top"
													src={destination.image}
													className="img-fluid"
													alt={destination.name}
												></Card.Img>
												<Card.Title>{destination.name}</Card.Title>
												<span className="tours">{destination.tours}</span>
											</Card>
										</div>
									);
								})}
							</Slider>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
};

export default Tour;
