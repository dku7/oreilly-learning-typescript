declare global {
	interface Passport {
		expires: Date;
		name: string;
	}

	interface Passports {
		[i: string]: Passport | undefined;
	}

	interface Window {
		passports: Passports;
	}
}

export function checkPassport(id: string) {
	const passport = window.passports[id];

	if (!passport) {
		return {
			allowed: false,
			reason: "No passport found.",
		};
	}

	if (!passport.name) {
		return {
			allowed: false,
			reason: "No known name.",
		};
	}

	if (passport.expires.getTime() < new Date().getTime()) {
		return {
			allowed: false,
			reason: "Passport has expired.",
		};
	}

	return {
		allowed: true,
	};
}
