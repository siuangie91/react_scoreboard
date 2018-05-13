// create action types
export const SET_PAGE = 'SET_PAGE';
export const GET_PERSONS = 'GET_PERSONS';
export const GET_PERSON_BY_ID = 'GET_PERSON_BY_ID';
export const SET_FACTORS = 'SET_FACTORS';
export const CLEAR_FACTORS = 'CLEAR_FACTORS';

// create actions
export function setPage(viewName, personType, pathName) {
	const action = {
		viewName,
		personType,
		pathName,
		type: SET_PAGE
	}
	return action;
}

export function getPersons(personType) {
	const action = {
		personType,
		type: GET_PERSONS	
	}
	return action;
}

export function getPersonById(personId) {
	const action = {
		personId,
		type: GET_PERSON_BY_ID
	}
	return action;
}

export function setFactors(factorsArr) {
	const action = {
		factorsArr,
		type: SET_FACTORS
	}
	return action;
}

export function clearFactors() {
	const action = {
		type: CLEAR_FACTORS
	}
	return action;
}