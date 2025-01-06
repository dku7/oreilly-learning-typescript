const roll = () => Math.floor(Math.random() * 6) + 1;

function getCommand(randomNumber: number) {
	let command: "food" | "water" | "resupply";
	let resupplyAmount = 0;

	switch (randomNumber) {
		case 1:
			command = "food";
			break;

		case 2:
			command = "water";
			break;

		default:
			command = "resupply";
			resupplyAmount = randomNumber;
			break;
	}

	return { command, resupplyAmount };
}

export function runCommands() {
	let availableResource: "food" | "water" | undefined;
	let day = 1;
	let resources = {
		food: 5,
		water: 5,
	};

	while (day <= 7) {
		const randomNumber = roll();
		const { command, resupplyAmount } = getCommand(randomNumber);

		if (command === "resupply") {
			switch (availableResource) {
				case "food":
					resources.food += resupplyAmount;
					availableResource = undefined;
					break;

				case "water":
					resources.water += resupplyAmount;
					availableResource = undefined;
					break;

				default:
					availableResource = randomNumber % 2 === 0 ? "food" : "water";
					break;
			}
		}

		switch (command) {
			case "food":
				availableResource = "food";
				break;

			case "water":
				availableResource = "water";
				break;
		}

		resources.food -= 1;
		resources.water -= 1;

		if (resources.food === 0 || resources.water === 0) {
			return false;
		}

		day += 1;
	}

	return true;
}
