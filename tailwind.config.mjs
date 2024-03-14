/** @type {import('tailwindcss').Config} */
module.exports =  {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			padding: {
				DEFAULT: '15px',
			},
		},
		screens: {
			sm: '640px', 
			md: '768px',
			lg: '960px',
			xl: '1200px',
		},
		backgroundImage: {
			hero: 'url(/hero.jpg)',
			grid: 'url(/grid.png)',
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: '#292f36',
					hover: '#343e4a'
				},
				secundary: '#343e4a',
				accent: {
					DEFAULT: '#cda274',
					secundary: '#cda274',
					hover: '#343e4a'
				},
			}
		},
	},
	plugins: [],
}
