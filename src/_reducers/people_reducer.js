import people_json from '../_data/people.json';

function persons(state = people_json, action) {
	switch(action.type) {
		default: 
			return state;
	}
}

export default persons;