import { curry } from 'ramda'

const prefix = curry(function (toAdd: string, inFrontOf: string): string {
	return toAdd + inFrontOf
})

export default prefix