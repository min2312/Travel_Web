import React, { useEffect, useState } from "react";
import {
	Container,
	Row,
	Nav,
	Navbar,
	Offcanvas,
	NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Header/header.css";

const Header = () => {
	const [open, setOpen] = useState(false);
	const ToggleMenu = () => {
		setOpen(!open);
	};
	useEffect(() => {
		window.addEventListener("scroll", isSticky);
		return () => {
			window.removeEventListener("scroll", isSticky);
		};
	});
	//sticky header
	const isSticky = (e) => {
		const header = document.querySelector(".header-section");
		const scrollTop = window.scrollY;
		scrollTop >= 120
			? header.classList.add("is-sticky")
			: header.classList.remove("is-sticky");
	};
	return (
		<header className="header-section">
			<Container>
				<Row>
					<Navbar expand="lg" className="mb-3">
						{/* Logo */}
						<Navbar.Brand>
							<NavLink to="/">TravelDay</NavLink>
						</Navbar.Brand>

						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-lg`}
							aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
							placement="start"
							show={open}
						>
							{/* Mobile Logo */}
							<Offcanvas.Header>
								<h1 className="logo">TravelDay</h1>
								<span className="navbar-toggler ms-auto">
									<i className="bi bi-x-lg" onClick={() => ToggleMenu()}></i>
								</span>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="justify-content-end flex-grow-1 pe-3">
									<NavLink className="nav-link" to="/">
										Home
									</NavLink>
									<NavLink className="nav-link" to="/">
										About us
									</NavLink>
									<NavLink className="nav-link" to="/">
										Tour
									</NavLink>
									<NavDropdown
										title="Destination"
										id={`offcanvasNavbarDropdown-expand-lg`}
									>
										<NavDropdown.Item href="#action3">
											JAPAN TOURS
										</NavDropdown.Item>
										<NavDropdown.Item href="#action4">
											ITALY TOURS
										</NavDropdown.Item>
										<NavDropdown.Item href="#action4">
											AMERICA TOURS
										</NavDropdown.Item>
									</NavDropdown>
									<NavLink className="nav-link" to="/">
										Gallery
									</NavLink>
									<NavLink className="nav-link" to="/">
										Contact us
									</NavLink>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
						<div className="ms-md-4 ms-2">
							<NavLink className="primaryBtn d-none d-sm-inline-block">
								Book Now
							</NavLink>
							<li className="d-inline-block d-lg-none ms-3 toogle_btn">
								<i
									className={open ? "" : "bi bi-list"}
									onClick={() => ToggleMenu()}
								></i>
							</li>
						</div>
					</Navbar>
				</Row>
			</Container>
		</header>
	);
};

export default Header;
