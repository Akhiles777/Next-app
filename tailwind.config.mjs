/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '15px',
			screens: {
				sm: '650px',
				md: '768px',
				lg: '960px',
				xl: '1200px',
			},
		},
		extend: {
			fontFamily: {
				primary: ['var(--font-jetbrainsMono)'],
			},
			colors: {
				primary: '#1c1c22',
				test: '#ffa534',
				aliaskhab: '#ffdd8b'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [],
};

export default config;
