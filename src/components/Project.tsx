import Link from "next/link";
import Image from "next/image";
import { FunctionComponent } from "react";
import { ProjectI } from "../types/About";

interface ProjectProps {
	projectData: ProjectI;
}

const Project: FunctionComponent<ProjectProps> = ({ projectData }) => {
	return (
		<div className="col-md-6 col-lg-4 cover">
			<Link href={"#" + projectData.slug}>
				<a className="d-block mx-auto portfolio-item cover" data-bs-toggle="modal">
					<div className="d-flex portfolio-item-caption position-absolute h-100 w-100" style={{ zIndex: 10 }}>
						<div className="text-center text-white my-auto portfolio-item-caption-content w-100">
							<i className="fa fa-search-plus fa-3x"></i>
						</div>
					</div>
					<div
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
				</a>
			</Link>
			<h2 style={{ textAlign: "center", marginBottom: "50px", fontSize: "24.4px" }}>{projectData.title}</h2>
		</div>
	);
};

export default Project;
