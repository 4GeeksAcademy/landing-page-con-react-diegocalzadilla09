import React from "react";


//create your first component
const NavBar = () => {
	return (

		<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">My Landing Page</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Features</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Pricing</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Contact</a>
						</li>

					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;