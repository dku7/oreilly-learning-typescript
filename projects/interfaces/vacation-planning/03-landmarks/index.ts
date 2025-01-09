interface BaseLandmark {
	name: string;
}

interface Fort extends BaseLandmark {
	type: "fort";
}

interface Mountain extends BaseLandmark {
	height: number;
	type: "mountain";
}

interface Park extends BaseLandmark {
	acres: number;
	type: "park";
}

interface Lighthouse extends BaseLandmark {
	height: number;
	lit: number;
	type: "lighthouse";
}

interface Lake extends BaseLandmark {
	miles: number;
	type: "lake";
}

interface Waterfall extends BaseLandmark {
	height: number;
	type: "waterfall";
}

interface River extends BaseLandmark {
	depth: number;
	length: number;
	type: "river";
}

type Landmark = Fort | Mountain | Park | Lighthouse | Lake | Waterfall | River;

const formatCommon = (landmark: Landmark) =>
	`${landmark.name} is a ${landmark.type} in Upstate New York.`;

const formatLake = (miles: number) =>
	`\nIt covers ${miles} square miles of water.`;

const formatLighthouse = (lit: number, height: number) =>
	`\nIt was first lit in ${lit} and is ${height} feet high.`;

const formatMountain = (height: number) => `\nIts peak is ${height} feet high.`;

const formatPark = (acres: number) => `\nIt covers ${acres} square acres.`;

const formatRiver = (length: number, depth: number) =>
	`\nIt flows for ${length} miles and is ${depth} feet deep at its deepest.`;

const formatWaterfall = (height: number) => `\nIt is ${height} feet high.`;

export function describeLandmark(landmark: Landmark) {
	const baseDescription = formatCommon(landmark);

	switch (landmark.type) {
		case "lake":
			return baseDescription + formatLake(landmark.miles);
		case "lighthouse":
			return baseDescription + formatLighthouse(landmark.lit, landmark.height);
		case "mountain":
			return baseDescription + formatMountain(landmark.height);
		case "park":
			return baseDescription + formatPark(landmark.acres);
		case "river":
			return baseDescription + formatRiver(landmark.length, landmark.depth);
		case "waterfall":
			return baseDescription + formatWaterfall(landmark.height);
		default:
			return baseDescription;
	}
}
