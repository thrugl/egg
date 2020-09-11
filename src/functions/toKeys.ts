import { curry, forEach } from 'ramda'

const toKeys = curry(function (defaultValue: any, a: string[]) {
	const o: Data = {}
	forEach((i: string) => o[i] = defaultValue)(a)
	return o
})

export default toKeys