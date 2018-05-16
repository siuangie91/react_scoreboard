export function toTitleCase(word) {
	const first = word[0].toUpperCase();
	const theRest = word.slice(1);

	return first + theRest;
}