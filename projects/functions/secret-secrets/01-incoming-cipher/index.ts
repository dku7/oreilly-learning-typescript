type CipherCallback = (letter: string) => string;

export function createCipher(cipher: CipherCallback) {
	const fn = (text: string) => {
		let str = "";

		for (const letter of text) {
			str += cipher(letter);
		}

		return str;
	};

	return fn;
}
