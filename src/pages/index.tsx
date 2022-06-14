// External Module Imports
import Head from "next/head";
import Image from "next/image";
import { GraphQLClient, gql } from "graphql-request";

// Internal Module Imports
import { AboutRes, About, ProjectI } from "../types/About";
import Header from "../components/Header";

// TypeDef Imports
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

// Stylesheet Imports
import "../styles/Home.module.scss";
import Link from "next/link";
import Footer from "../components/Footer";
import Project from "../components/Project";
import ProjectModal from "../components/ProjectModal";

const graphcms = new GraphQLClient(process.env.CONTENT_API_URL!);

const QUERY = gql`
	{
		abouts {
			id
			intro
			slug
			bio
			picture {
				url
				height
				width
			}
		}
		projects {
			id
			slug
			title
			updatedAt
			repo
			content {
				text
			}
			coverImage {
				url
			}
			frameworks {
				name
				slug
			}
			languages {
				name
				slug
			}
		}
	}
`;

export const getStaticProps: GetStaticProps = async () => {
	const response: AboutRes = await graphcms.request(QUERY);
	const about = response.abouts[0];
	const projects = response.projects;
	return {
		props: {
			about,
			projects,
		},
		revalidate: 20,
	};
};

interface HomeProps {
	about: About;
	projects: ProjectI[];
}

const Home: NextPage<HomeProps> = ({ about, projects }) => {
	return (
		<>
			<div id="page-top">
				<Head>
					<title>Home - Ben Newman</title>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="description" content="Portfolio website - Ben Newman" />
				</Head>
				<Header />
				<header className="text-center text-white bg-primary masthead">
					<div className="container">
						<Image
							src={about.picture.url}
							className="img-fluid d-block mx-auto"
							width={200}
							height={265}
							alt="Ben Newman"
						/>
						<h1 className="mt-5">Ben Newman</h1>
						<hr className="star-light" />
						<h2 className="font-weight-light mb-0" style={{ fontSize: "18.8px" }}>
							{about.intro}
						</h2>
					</div>
				</header>
				<section className="portfolio" id="portfolio">
					<div className="container">
						<h2 className="text-uppercase text-center text-secondary">Portfolio</h2>
						<hr className="star-dark mb-5" />
						<div className="row">
							{projects.map((project) => (
								<Project projectData={project} key={project.id} />
							))}
						</div>
					</div>
				</section>
				<section className="text-white bg-primary mb-0" id="about">
					<div className="container">
						<h2 className="text-uppercase text-center text-white">About</h2>
						<hr className="star-light mb-5" />
						<div className="row">
							<div className="col">
								<p className="lead text-center">{about.bio}</p>
							</div>
						</div>
						<div className="text-center mt-4">
							<Link href="https://media.graphassets.com/BkyuadvUTgmQ5D5w6hBa">
								<a className="btn btn-outline-light btn-xl">
									<i className="fa fa-download me-2"></i>
									<span>Download my CV</span>
								</a>
							</Link>
						</div>
					</div>
				</section>
				<section id="contact">
					<div className="container">
						<h2 className="text-uppercase text-center text-secondary mb-0">Contact Me</h2>
						<hr className="star-dark mb-5" />
						<div className="row">
							<h3 className="text-center">benewman2002@gmail.com</h3>
						</div>
					</div>
				</section>
				<Footer />
				<div className="d-lg-none scroll-to-top position-fixed rounded">
					<Link href="#page-top">
						<a className="text-center d-block rounded text-white">
							<i className="fa fa-chevron-up"></i>
						</a>
					</Link>
				</div>
			</div>
			{projects.map((project) => (
				<ProjectModal projectData={project} key={project.id} />
			))}
		</>
	);
};

export default Home;
