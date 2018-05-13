import { combineReducers } from 'redux';

import persons from './people_reducer';
import quotes from './quotes_reducer';
import appView from './appview_reducer';
import selectedPersons from './selectedpersons_reducer';
import selectedFactors from './selectedfactors_reducer';

const rootReducer = combineReducers({
	persons, quotes, appView, selectedPersons, selectedFactors
});

export default rootReducer;
