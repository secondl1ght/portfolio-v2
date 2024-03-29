/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		fontSize: {
			xs: ['12px', '16px'],
			sm: ['14px', '20px'],
			base: ['16px', '24px'],
			lg: ['18px', '28px'],
			xl: ['20px', '28px'],
			'2xl': ['24px', '32px'],
			'3xl': ['30px', '36px'],
			'4xl': ['36px', '40px'],
			'5xl': ['48px', '1'],
			'6xl': ['60px', '1'],
			'7xl': ['72px', '1'],
			'8xl': ['96px', '1'],
			'9xl': ['128px', '1']
		},
		extend: {
			colors: {
				primary: '#171821',
				secondary: '#9FA2BC',
				shadow: '#1C1D26',
				hover: '#AF7CD5',
				code: '#1E1F2B'
			},
			screens: {
				'3xl': '1792px'
			}
		}
	},
	plugins: []
};
