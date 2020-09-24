import prefix from '@/functions/prefix'

import { compose, o, join, map, split, reject, isEmpty, trim, includes, curry, is, ifElse, toPairs, last, filter, head, when } from 'ramda'

function useTailwind () {
	const prefixClasses = curry((head: string, tail: string) => compose(
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
	const cl = (...inputs: (string|clObjInput)[]): string => {
		const fn = when(includes('->'), compose(
			(a: string[]) => prefixClasses(...a), 
			map(trim), 
			split('->')
		))
		const process = o(
			join(' '),
			map(ifElse(is(String), fn, compose(
				join(' '),
				map(o(fn, head)),
				//@ts-ignore
				filter(last),
				toPairs
			)))
		)
		return process(inputs)
	}
	const bgImg = (path: string, flag = true) => flag ? { backgroundImage: `url('${path}')` } : {}

	return {
		prefixClasses,
		cl, bgImg
	}
}

export default useTailwind