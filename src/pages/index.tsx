// External Module Imports
import Head from "next/head";
import Image from "next/image";
import { GraphQLClient, gql } from "graphql-request";

// Internal Module Imports

// TypeDef Imports
import type { NextPage } from "next";

// Stylesheet Imports
import styles from "../styles/Home.module.scss";

const graphcms = new GraphQLClient(process.env.CONTENT_API_URL!);

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home - Ben Newman</title>
				<meta name="description" content="Portfolio website - Ben Newman" />
			</Head>
			<main className={styles.main}>
				<h1>Hello World!</h1>
			</main>
		</div>
	);
};

export default Home;
