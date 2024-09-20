import React from "react";
import "../Features/features.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Features = () => {
	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
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
							<Card>
								<Card.Img
									variant="top"
									src=""
									className="img-fluid"
									alt=""
								></Card.Img>
								<Card.Title>qwe</Card.Title>
								<Card.Text>abc</Card.Text>
							</Card>
						</Slider>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Features;
