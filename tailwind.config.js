module.exports = {
  purge: [],
  theme: {
		container: {
			center: true
		},
    extend: {
			colors: {
				spiffy: { default: '#e97600' },
				black: { default: '#121212' },
				white: { default: '#eeeeee' }
			},
			spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
			},
			maxWidth: {
				'4xs': '8rem',
				'3xs': '12rem',
				'2xs': '16rem'
			}
		},
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within']
	},
  plugins: [],
}