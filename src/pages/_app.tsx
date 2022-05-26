// External Module Imports
import { Provider } from "react-redux";

// Internal Module Imports
import store from "../app/store";

// TypeDef Imports
import type { AppProps } from "next/app";

// Stylesheet Imports

// function MyApp({ Component, pageProps }: AppProps) {
// 	<Provider store={store}>
// 		return <Component {...pageProps} />;
// 	</Provider>;
// }

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
