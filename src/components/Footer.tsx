import Link from "next/link";
import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
	return (
		<>
			<footer className="text-center footer">
				<div className="container">
					<div className="row">
						<div className="col">
							<h4 className="text-uppercase">Links:</h4>
							<ul className="list-inline">
								<li className="list-inline-item">
									<Link href="https://github.com/bnewmandev">
										<a
											className="btn btn-outline-light text-center btn-social rounded-circle"
											role="button"
										>
											<i className="fa fa-github fa-fw"></i>
										</a>
									</Link>
								</li>
								<li className="list-inline-item">
									<Link href="https://stackoverflow.com/users/15235115/ben-newman">
										<a
											className="btn btn-outline-light text-center btn-social rounded-circle"
											role="button"
										>
											<i className="fa fa-stack-overflow fa-fw"></i>
										</a>
									</Link>
								</li>
								<li className="list-inline-item">
									<Link href="https://www.linkedin.com/in/benjamin-s-newman/">
										<a
											className="btn btn-outline-light text-center btn-social rounded-circle"
											role="button"
										>
											<i className="fa fa-linkedin fa-fw"></i>
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
			<div className="text-center text-white copyright py-4">
				<div className="container">
					<small>Copyright ©&nbsp;Ben Newman 2022</small>
				</div>
			</div>
		</>
	);
};

export default Footer;
