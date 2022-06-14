import Link from "next/link";
import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
	return (
		<nav className="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase" id="mainNav">
			<div className="container">
				<Link href="/#page-top">
					<a className="navbar-brand">Ben Newman</a>
				</Link>
				<button
					data-bs-toggle="collapse"
					data-bs-target="#navbarResponsive"
					className="navbar-toggler text-white bg-primary navbar-toggler-right text-uppercase rounded"
					aria-controls="navbarResponsive"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i className="fa fa-bars"></i>
				</button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item mx-0 mx-lg-1">
							<Link href="/#portfolio">
								<a className="nav-link py-3 px-0 px-lg-3 rounded">Portfolio</a>
							</Link>
						</li>
						<li className="nav-item mx-0 mx-lg-1">
							<Link href="/#about">
								<a className="nav-link py-3 px-0 px-lg-3 rounded">About</a>
							</Link>
						</li>
						<li className="nav-item mx-0 mx-lg-1">
							<Link href="/#contact">
								<a className="nav-link py-3 px-0 px-lg-3 rounded">Contact</a>
							</Link>
						</li>
						<li className="nav-item mx-0 mx-lg-1">
							<Link href="/articles">
								<a className="nav-link py-3 px-0 px-lg-3 rounded">Dev Diary</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
