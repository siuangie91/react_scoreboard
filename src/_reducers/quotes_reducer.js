import quotes_json from '../_data/quotes.json';

function quotes(state = quotes_json, action) {
	switch(action.type) {
		default: 
			return state;
	}
}

export default quotes;