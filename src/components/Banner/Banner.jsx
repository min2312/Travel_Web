import React from "react";
import "../Banner/banner.css";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/images/1.jpg";
import sliderImg1 from "../../assets/images/2.jpg";
const Banner = () => {
	return (
		<section className="slider">
			<Carousel variant="dark">
				<Carousel.Item>
					<img
						src={sliderImg}
						className="d-block w-100 slider_img"
						alt="First slide"
					/>
					<Carousel.Caption>
						<div className="slider_des">
							<h5 className="heading">
								JOURNEY TO <span>EXPLORE WORLD</span>
							</h5>
							<p className="sub_text">
								Nulla vitae elit libero, a pharetra augue mollis interdum.
							</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						src={sliderImg1}
						className="d-block w-100 slider_img"
						alt="Second slide"
					/>
					<Carousel.Caption>
						<div className="slider_des">
							<h5 className="heading">
								BEAUTIFUL PLACE <span>TO VISIT</span>
							</h5>
							<p className="sub_text">
								Nulla vitae elit libero, a pharetra augue mollis interdum.
							</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</section>
	);
};

export default Banner;
