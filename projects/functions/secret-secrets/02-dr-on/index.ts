type CipherCallback = (character: string) => string;

export function createAdvancedCipher(
	onVowel: CipherCallback,
	onConsonant: CipherCallback,
	onPunctuation: CipherCallback
) {
	return (text: string) => {
		let str = "";
		const vowelRegEx = /[aeiou]/i;
		const consonantRegEx = /[b-df-hj-np-tv-z]/i;

		for (const character of text) {
			if (vowelRegEx.test(character)) str += onVowel(character);
			else if (consonantRegEx.test(character)) str += onConsonant(character);
			else str += onPunctuation(character);
		}

		return str;
	};
}
