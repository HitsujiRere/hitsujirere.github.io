import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		plugin(function ({ addBase }) {
			addBase({
				html: { fontSize: '24px' }
			});
		})
	]
};
