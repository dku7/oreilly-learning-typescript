const favouriteAnimals = [
	"parakeet",
	"macaw",
	"cat",
	"monkey",
	"elephant",
	"alpaca",
	"fox",
];

export function checkIsAnyAnimalFavorite(...animals: string[]) {
	return animals.some((animal) => new Set(favouriteAnimals).has(animal));
}

export function getFavoriteAnimals(max = Infinity) {
	const animals = Array.from(favouriteAnimals);

	return animals.slice(0, max);
}

export function logFavoriteAnimals() {
	favouriteAnimals.forEach((animal, i) => {
		console.log(`I like ${animal} number ${i}!`);
	});
}
