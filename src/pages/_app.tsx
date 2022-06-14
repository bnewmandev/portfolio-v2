// External Module Imports
import { Provider } from "react-redux";

// Internal Module Imports
import store from "../app/store";
import { useEffect } from "react";
import { useRouter } from "next/router";

// TypeDef Imports
import type { AppProps } from "next/app";

// Stylesheet Imports
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	useEffect(() => {
		typeof document !== undefined ? require("bootstrap/dist/js/bootstrap") : null;
	}, [router.events]);
	return <Component {...pageProps} />;
}

export default MyApp;
