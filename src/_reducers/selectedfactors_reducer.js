import { SET_FACTORS, CLEAR_FACTORS } from '../_actions';

function selectedFactors(state = [], action) {
	let selectedFactors;

	switch(action.type) {
		case SET_FACTORS:
			selectedFactors = [...state, ...action.factorsArr];
			return selectedFactors;
		case CLEAR_FACTORS:
			state = [];
			return state;
		default:
			return state;
	}
}

export default selectedFactors;