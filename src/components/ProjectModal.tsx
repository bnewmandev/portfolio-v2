import Link from "next/link";
import Image from "next/image";
import { FunctionComponent } from "react";
import { ProjectI } from "../types/About";

interface ProjectProps {
	projectData: ProjectI;
}

const ProjectModal: FunctionComponent<ProjectProps> = ({ projectData }) => {
	return (
		<div className="modal text-center" role="dialog" tabIndex={-1} id={projectData.slug}>
			<div className="modal-dialog modal-lg" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<div className="container text-center">
							<div className="row">
								<div className="col-lg-8 mx-auto">
									<h2 className="text-uppercase text-secondary mb-0">{projectData.title}</h2>
									<hr className="star-dark mb-5" />
									<div
										className="mb-5"
										style={{
											justifyContent: "center",
											display: "flex",
										}}
									>
										<Image
											src={projectData.coverImage.url}
											width={200}
											height={200}
											className="img-fluid"
											alt={projectData.title}
										/>
									</div>
									<p className="mb-5">{projectData.content.text}</p>
									<Link href={projectData.repo}>
										<a className="btn btn-secondary rounded-pill btn-lg mx-auto">
											View Project on Github
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="modal-footer pb-5">
						<a
							className="btn btn-primary btn-lg mx-auto rounded-pill portfolio-modal-dismiss"
							role="button"
							data-bs-dismiss="modal"
						>
							<i className="fa fa-close pe-none"></i>&nbsp;Close Project
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectModal;
