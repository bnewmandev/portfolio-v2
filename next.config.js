require("dotenv").config();

const withPwa = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		CONTENT_API_URL: process.env.CONTENT_API_URL,
	},
	images: {
		domains: ["media.graphassets.com"],
		formats: ["image/avif", "image/webp"],
	},
	experimental: {
		outputStandalone: true,
	},
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
	},
};

module.exports = withPwa(nextConfig);
