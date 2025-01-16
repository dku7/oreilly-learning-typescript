export interface Trick {
	gimmick: string;
}

export interface Illusion {
	introduction(): string;
	flair(): string;
	payoff(): string;
}

export interface VolunteerIllusion extends Illusion {
	duration: number;
	title: string;
}

export interface AudienceMember {
	name: string;
}

export interface Act {
	performer: string;
	name: string;
	sections: (Trick | Illusion)[];
}

export function getAudienceMemberFor(section: {
	duration: number;
	title: string;
}): Promise<AudienceMember>;
