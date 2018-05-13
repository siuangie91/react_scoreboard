import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// get the patients and quotes from rootReducer
import rootReducer from './_reducers';

import App from './_pages/App';

// create store
const store = createStore(rootReducer);
console.log('store.getState()', store.getState());

// add eventListener that fires every time the store gets updated
store.subscribe(() => {
	// console.log('store subscription', store.getState());
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('app'));