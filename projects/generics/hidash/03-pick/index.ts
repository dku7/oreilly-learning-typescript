export function pick<T, Key extends keyof T>(container: T, key: Key) {
	return container[key];
}
