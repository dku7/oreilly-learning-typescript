type Coordinate = [number, number, number];

interface Coordinates {
	north: Coordinate;
	west: Coordinate;
}

interface City {
	coordinates: Coordinates;
	name: string;
	catchphrase?: string;
}

const padNum = (num: number) => String(num).padStart(2, "0");

const formatCoord = ([deg, min, sec]: Coordinate) =>
	`${padNum(deg)}°${padNum(min)}'${padNum(sec)}"`;

const formatCoords = (coords: Coordinates) =>
	`\n* Located at ${formatCoord(coords.north)}N ${formatCoord(coords.west)}W`;

const formatName = (name: string) => `${name}, New York`;

const formatCatchphrase = (catchphrase: string | undefined) =>
	catchphrase ? `\n* "${catchphrase}"` : "";

export function describeCity({ coordinates, name, catchphrase }: City) {
	return `${formatName(name)}${formatCatchphrase(catchphrase)}${formatCoords(
		coordinates
	)}`;
}
