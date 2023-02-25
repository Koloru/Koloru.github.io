/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				lato: ["Lato", "sans-serif"],
			},
			colors: {
				main: "#433A3A",
				gray: "#D9D9D9",
			},
			boxShadow: {
				pulse: "0 0 0 2em rgba(255, 255, 255, 0)",
			},
			keyframes: {
				pulse: {
					"0%": { boxShadow: "0 0 0 0 #ef6eae", backgroundColor: "#ef6eae" },
					"25%": {
						boxShadow: "0 0 0 1em rgba(255, 255, 255, 0)",
						backgroundColor: "#fff",
					},
				},
				animation: {
					pulse: "pulse 10s",
				},
			},
		},
	},
	plugins: [require("prettier-plugin-tailwindcss")],
};
