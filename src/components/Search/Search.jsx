import React, { useState } from "react";
import "../Search/search.css";
import { Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
const Search = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const SelectedLocation = (value) => {};
	const SelectedGuest = (value) => {};
	return (
		<section className="box-search-advance">
			<Container>
				<Row>
					<Col md={12} xs={12}>
						<div className="box-search">
							<div className="item-search">
								<CustomDropdown
									label="Location"
									onSelect={SelectedLocation}
									options={[
										"USA, Turkish",
										"Tokyo, Japan",
										"Sydney, Australia",
										"Paris, France",
									]}
								/>
							</div>
							<div className="item-search item-search-2">
								<label className="item-search-label">Check in </label>
								<DatePicker
									selected={startDate}
									onChange={(date) => setStartDate(date)}
									selectsStart
									startDate={startDate}
									endDate={endDate}
									dateFormat="dd/MM/yyyy"
								/>
							</div>
							<div className="item-search item-search-2 ">
								<label className="item-search-label">Check out </label>
								<DatePicker
									selected={endDate}
									onChange={(date) => setEndDate(date)}
									selectsEnd
									startDate={endDate}
									endDate={startDate}
									dateFormat="dd/MM/yyyy"
								/>
							</div>
							<div className="item-search bd-none">
								<CustomDropdown
									label="Guest"
									onSelect={SelectedGuest}
									options={[
										"1 Adult, 2 Children",
										"2 Adult, 1 Children",
										"2 Adult, 2 Children",
										"2 Adult, 3 Children",
									]}
								/>
							</div>
							<div className="item-search bd-none">
								<button className="primaryBtn flex-even d-flex justify-content-center">
									<i className="bi bi-search me-2"></i>Search
								</button>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Search;
