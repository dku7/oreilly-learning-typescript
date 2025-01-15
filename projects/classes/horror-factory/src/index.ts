interface Consumed {
	name: string;
	evil: boolean;
	power: number;
}

type IsEvilFunction = () => boolean;
type GetPowerFromFunction = (consumed: Consumed) => number;

interface HorrorType {
	name: string;
	isEvil: IsEvilFunction;
	getPowerFrom: GetPowerFromFunction;
}

export class Horror {
	readonly name: string;
	readonly isEvil: IsEvilFunction;
	readonly #getPowerFrom: GetPowerFromFunction;

	#consumed: Consumed[] = [];

	constructor({ name, isEvil, getPowerFrom }: HorrorType) {
		this.name = name;
		this.isEvil = isEvil;
		this.#getPowerFrom = getPowerFrom;
	}

	doBattle(opponent: Horror) {
		if (this.getPower() >= opponent.getPower()) {
			this.#consumed.push({
				name: opponent.name,
				evil: opponent.isEvil(),
				power: opponent.getPower(),
			});
		}
	}

	getPower() {
		return this.#consumed.reduce(
			(previous, consumed) => previous + this.#getPowerFrom(consumed),
			this.#consumed.length
		);
	}
}

const demonType: HorrorType = {
	name: "Demon",
	getPowerFrom: (consumed: Consumed) =>
		consumed.evil ? consumed.power / 2 : consumed.power * 2,
	isEvil: () => true,
};

export function createDemon() {
	return new Horror(demonType);
}

export function createSorcerer(name: string, evil: boolean) {
	const sorcerer: HorrorType = {
		name: name,
		getPowerFrom(consumed: Consumed) {
			return consumed.evil === evil ? consumed.power * 2 : consumed.power;
		},
		isEvil: () => evil,
	};

	return new Horror(sorcerer);
}
