/** @type {import("next").NextConfig} */
const config = {
	output: "export",
	images: { unoptimized: true },
	trailingSlash: true,
	reactStrictMode: true,
	compiler: {
		removeConsole: { exclude: ["error"] },
	},
};

export default config;
