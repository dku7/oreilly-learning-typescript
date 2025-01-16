export function unique<T>(...items: T[][]): T[] {
	return items.reduce((acc, item) => {
		item.forEach((element) => {
			if (!acc.includes(element)) {
				acc.push(element);
			}
		});
		return acc;
	}, []);
}
