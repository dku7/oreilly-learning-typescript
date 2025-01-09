export function deepDifferences(a: string[][], b: string[][]) {
	const result: ((string | undefined)[] | undefined)[] = [];

	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length) result.push(undefined);
		else {
			const arr: (string | undefined)[] = [];

			for (let j = 0; j < a[i].length; j++) {
				const value = a[i][j] === b[i][j] ? a[i][j] : undefined;

				arr.push(value);
			}

			result.push(arr);
		}
	}

	return result;
}
