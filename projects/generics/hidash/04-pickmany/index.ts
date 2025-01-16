export function pickMany<T, Key extends keyof T>(
	container: T,
	keys: Key[]
): T[Key][] {
	return keys.map((key) => container[key]);
}
