import { SET_PAGE } from '../_actions';

function appView(state = {}, action) {
	switch(action.type) {
		case SET_PAGE: 
			state = {viewName: action.viewName, personType: action.personType, path: action.pathName};
			return state;
		default:
			return state;
	}
}

export default appView;