require("dotenv").config();

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		CONTENT_API_URL: process.env.CONTENT_API_URL,
	},
};

module.exports = nextConfig;
