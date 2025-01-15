interface Character {
	flying: boolean;
	name: string;
	power: number;
	toughness: number;
}

const mutationsLibrary = {
	energy: (hero: Character) => {
		hero.power *= 1.25;
		hero.flying = true;
	},
	healing: (hero: Character) => {
		hero.toughness *= 2;
	},
	luck: (hero: Character) => {
		hero.power *= 1.25;
		hero.toughness *= 1.25;
	},
	flight: (hero: Character) => {
		hero.flying = true;
	},
	strength: (hero: Character) => {
		hero.power *= 2;
	},
	wings: (hero: Character) => {
		hero.flying = true;
		hero.toughness *= 0.9;
	},
};

type MutationType = keyof typeof mutationsLibrary;

function createCharacter(name: string, mutations: MutationType[]) {
	const character = {
		flying: false,
		name,
		power: 1,
		toughness: 1,
	};

	for (const mutation of mutations) {
		mutationsLibrary[mutation](character);
	}

	return character;
}

interface CharacterTemplate {
	mutations: MutationType[];
	name: string;
}

export function duel(good: CharacterTemplate, bad: CharacterTemplate) {
	const hero = createCharacter(good.name, good.mutations);
	const villain = createCharacter(bad.name, bad.mutations);

	const heroScore = hero.power / villain.toughness;
	const villainScore = villain.power / hero.toughness;

	return heroScore >= villainScore
		? (["hero", hero] as const)
		: (["villain", villain] as const);
}
