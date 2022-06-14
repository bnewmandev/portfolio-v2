require("dotenv").config();

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
		locales: ["en-UK"],
		defaultLocale: "en-UK",
	},
};

module.exports = nextConfig;
