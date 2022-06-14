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

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	useEffect(() => {
		typeof document !== undefined ? require("bootstrap/dist/js/bootstrap") : null;
	}, [router.events]);
	return (
		<>
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
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
