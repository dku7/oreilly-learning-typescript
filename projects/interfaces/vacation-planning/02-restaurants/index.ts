interface Restaurant {
	city: string;
	name: string;
}

export function groupRestaurants(restaurants: Restaurant[]) {
	const result: {
		[city: string]: string[];
	} = {};

	for (const { city, name } of restaurants) {
		const names: string[] = [];

		if (city in result) {
			names.push(...result[city]);
		}

		names.push(name);
		result[city] = names;
	}

	return result;
}
