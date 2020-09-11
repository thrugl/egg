import prefix from '@/functions/prefix'
import toKeys from '@/functions/toKeys'

import { compose, o, join, map, split, reject, isEmpty, trim, includes } from 'ramda'

function useTailwind () {
	const prefixClasses = (s: string)/*(x: string)*/ => compose(
		join(' '), 
		map(
			o(prefix(`${s}:`), trim)
		),
		reject(isEmpty),
		split(' ')
	)
	const cl = (...strings: string[]) => o(
		toKeys(true), 
		map((i: string) => (
			includes('->')(i)
				? compose(
						(a: string[]) => prefixClasses(a[0])(a[1]), 
						map(trim), 
						split('->')
					)(i)
				: i
		))
	)(strings)
	const lg = prefixClasses('lg')

	return {
		prefixClasses,
		cl, lg
	}
}

export default useTailwind