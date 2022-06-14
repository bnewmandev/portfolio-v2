require("dotenv").config();

/** @type {import('next-sitemap').IConfig} */
const config = {
	siteUrl: process.env.SITE_URL || "https://bndev.co.uk",
	generateRobotsTxt: true,
};

module.exports = config;
