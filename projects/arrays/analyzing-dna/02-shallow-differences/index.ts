export function shallowDifferences(a: string[], b: string[]) {
	if (a.length !== b.length) return undefined;

	return a.map((el, index) => (el === b[index] ? el : undefined));
}
