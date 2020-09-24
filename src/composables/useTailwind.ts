import prefix from '@/functions/prefix'

import { compose, o, join, map, split, reject, isEmpty, trim, includes, curry, is, ifElse, toPairs, last, filter, head, when } from 'ramda'

function useTailwind () {
	const prefixClasses = curry((head: string, tail: string): string => compose(
		join(' '), 
		map(
			o(prefix(`${head}`), trim)
		),
		reject(isEmpty),
		split(' ')
	)(tail))
	
	interface clObjInput {
		[key: string]: boolean;
	}
	const $t = (...inputs: (string|clObjInput)[]): string => {
		const processString = when(includes('->'), compose(
			(a: string[]) => prefixClasses(...a), 
			map(trim), 
			split('->')
		))
		const processObject = compose(
			join(' '),
			map(o(processString, head)),
			//@ts-ignore
			filter(last),
			toPairs
		)
		const process = o(
			join(' '),
			map(ifElse(is(String), processString, processObject))
		)
		return process(inputs)
	}
	const $bgImage = (path: string, show = true) => show ? { backgroundImage: `url('${path}')` } : {}

	return {
		prefixClasses,
		$t, $bgImage
	}
}

export default useTailwind