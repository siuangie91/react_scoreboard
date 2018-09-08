export function toTitleCase(word) {
	const first = word[0].toUpperCase();
	const theRest = word.slice(1);

	return first + theRest;
}

// check whether object is empty
export function isEmpty(obj) {
  for(var key in obj) {
    if(obj.hasOwnProperty(key))
      return false;
  }
  return true;
}