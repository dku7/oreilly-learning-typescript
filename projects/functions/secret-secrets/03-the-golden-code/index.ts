type MakeGuessType = (text: string, attempt: number) => string;
type ValidateGuessType = (guess: string) => boolean;

type SettingsType = {
	attempts: number;
	makeGuess: MakeGuessType;
	validateGuess: ValidateGuessType;
};

export function createCodeCracker({
	attempts,
	makeGuess,
	validateGuess,
}: SettingsType) {
	return (text: string) => {
		for (let i = 0; i < attempts; i++) {
			const guessed = makeGuess(text, i);

			if (validateGuess(guessed)) return guessed;
		}
	};
}
