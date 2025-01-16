export function zip<T, U>(a: T[], b: U[]) {
	const result: (T | U)[] = [];
	const length = Math.max(a.length, b.length);

	for (let i = 0; i < length; i++) {
		if (i < a.length) result.push(a[i]);
		if (i < b.length) result.push(b[i]);
	}

	return result;
}
