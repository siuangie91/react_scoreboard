import people_json from '../_data/people.json';

import { GET_PERSONS, GET_PERSON_BY_ID } from '../_actions';

function getThePersons(personType) {
	let thePersons = people_json.filter(person => person.type === personType);
	// console.log('thePatients', thePatients);
	return thePersons;
}

function selectedPersons(state = [], action) {
	let selectedPersons;

	switch(action.type) {
		case GET_PERSONS: 
			selectedPersons = [...state, ...getThePersons(action.personType)];
			return selectedPersons;
		case GET_PERSON_BY_ID:
			selectedPersons = [...state, people_json.find(person => person.id === action.personId)];
			return selectedPersons;
		default:
			return state;
	}
}

export default selectedPersons;