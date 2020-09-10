import { insert, compose, join, split, curry } from 'ramda'

const formatPhone = curry(function (number: string|number, divider = '-'): string {
	const fn = compose(
		join(''),
		insert(3, divider),
		split('')
	)
	return `s. ${fn(`${number}`)}`
})

export default formatPhone