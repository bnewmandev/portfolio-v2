// External Module Imports
import Head from "next/head";
import Image from "next/image";
import { GraphQLClient, gql } from "graphql-request";

// Internal Module Imports
import { AboutRes, About, ProjectI } from "../../types/About";
import Header from "../../components/Header";

// TypeDef Imports
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

// Stylesheet Imports
import Link from "next/link";
import Footer from "../../components/Footer";
import Project from "../../components/Project";
import ProjectModal from "../../components/ProjectModal";
import { Post } from "../../types/Post";
import ArticlePreview from "../../components/ArticlePreview";

const graphcms = new GraphQLClient(process.env.CONTENT_API_URL!);

const QUERY = gql`
	{
		devDiaryPosts {
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

interface ArticlesProps {
	devDiaryPosts: Post[];
}

export const getStaticProps: GetStaticProps = async () => {
	const response: ArticlesProps = await graphcms.request(QUERY);
	return {
		props: {
			devDiaryPosts: response.devDiaryPosts,
		},
	};
};

const Articles: NextPage<ArticlesProps> = ({ devDiaryPosts }) => {
	devDiaryPosts
		.sort((a, b) => {
			const atime = new Date(a.dateOverride || a.createdAt);
			const btime = new Date(b.dateOverride || b.createdAt);
			if (atime < btime) {
				return -1;
			}
			if (atime > btime) {
				return 1;
			}
			return 0;
		})
		.reverse();

	return (
		<div id="page-top">
			<Head>
				<title>DevDiary - Ben Newman</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Portfolio website - Ben Newman" />
			</Head>
			<Header />
			<div
				style={{
					marginTop: "200px",
					marginBottom: "80px",
				}}
				className="container"
			>
				<div className="intro">
					<h2 className="text-center mb-4">Latest Posts</h2>
				</div>
				<div className="flex-column align-items-center">
					{devDiaryPosts.map((post) => (
						<ArticlePreview article={post} key={post.id} />
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Articles;
