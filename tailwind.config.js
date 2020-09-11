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
				white: { default: '#eeeeee' },
				tint: { 
					start: 'rgba(27,34,49, .5)',
					end: 'rgba(0,0,0, .5)'
				}
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