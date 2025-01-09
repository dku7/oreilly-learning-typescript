export function shallowEquality(a: string[], b: string[]) {
	return a.join("") === b.join("");
}
