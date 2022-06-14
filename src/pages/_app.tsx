// External Module Imports
import { Provider } from "react-redux";

// Internal Module Imports
import store from "../app/store";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

// TypeDef Imports
import type { AppProps } from "next/app";

// Stylesheet Imports
import "../styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	useEffect(() => {
		typeof document !== undefined ? require("bootstrap/dist/js/bootstrap") : null;
	}, [router.events]);
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
				/>

				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icon.png"></link>
				<meta name="theme-color" content="#fff" />
			</Head>

			{document.addEventListener("beforeinstallprompt", (e) => {
				e.preventDefault();
			})}

			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>
			<Script strategy="lazyOnload" id="google-analytics">
				{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
			</Script>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
