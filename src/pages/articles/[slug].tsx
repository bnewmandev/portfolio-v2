// External Module Imports
import Head from "next/head";
import Image from "next/image";
import { GraphQLClient, gql } from "graphql-request";

// Internal Module Imports
import { AboutRes, About, ProjectI } from "../../types/About";
import Header from "../../components/Header";

// TypeDef Imports
import type { NextPage, GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from "next";

// Stylesheet Imports
import Link from "next/link";
import Footer from "../../components/Footer";
import Project from "../../components/Project";
import ProjectModal from "../../components/ProjectModal";
import { Post } from "../../types/Post";
import ArticlePreview from "../../components/ArticlePreview";

const graphcms = new GraphQLClient(process.env.CONTENT_API_URL!);

const QUERY = gql`
	query DevDiaryPost($slug: String!) {
		devDiaryPost(where: { slug: $slug }) {
			content {
				html
			}
			coverImage {
				url
			}
			frameworks {
				name
				slug
			}
			id
			languages {
				name
				slug
			}
			slug
			summary
			title
			createdAt
			dateOverride
		}
	}
`;

const SLUGLIST = gql`
	{
		devDiaryPosts {
			slug
		}
	}
`;

interface ArticleProps {
	devDiaryPost: Post;
}

interface PathRes {
	devDiaryPosts: {
		slug: string;
	}[];
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { devDiaryPosts }: PathRes = await graphcms.request(SLUGLIST);
	const paths = devDiaryPosts.map((post) => {
		const slug = post.slug;
		return {
			params: { slug },
		};
	});
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { slug } = context.params as { slug: string };
	const response: ArticleProps = await graphcms.request(QUERY, { slug });
	return {
		props: {
			data: response.devDiaryPost,
		},
		revalidate: 20,
	};
};

const Article = ({ data }: { data: Post }) => {
	const html = { __html: data.content.html };
	return (
		<div>
			<Head>
				<title>{data.title}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Portfolio website - Ben Newman" />
			</Head>
			<Header />
			<header className="text-center text-black bg-white masthead">
				<div className="container min-vh-100">
					<h1>{data.title}</h1>
					<br />
					<div className="text-muted mb-2">
						{new Date(data.dateOverride || data.createdAt).toLocaleDateString("en-uk")}
					</div>
					<br />
					<div dangerouslySetInnerHTML={html}></div>
				</div>
			</header>
		</div>
	);
};

export default Article;
