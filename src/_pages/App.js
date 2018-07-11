import React from 'react';
import { connect } from 'react-redux';

import Home from './Home';
import Quotes from './Quotes';
import PrimaryFactors from './PrimaryFactors';
import SecondaryFactors from './SecondaryFactors';
import PersonOutcome from './PersonOutcome';

// check whether object is empty
function isEmpty(obj) {
	// console.log('calling isEmpty');
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			view: { // initialize at home and no patient type
				viewName: "home", 
				personType: ""
			}
		}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		// console.log('App got new props!');
		// console.log('nextProps', nextProps);
		// console.log('prevState', prevState);


		// manage app view
		let newAppView = (!isEmpty(nextProps.appView)) ? 
			// use object spread operator to overwrite this.state.view properties
			{...prevState.view, viewName: nextProps.appView.viewName, personType: nextProps.appView.personType}
			:
			{...prevState.view}; // just use the current view

		return { // updated state
			view: newAppView
		}
	}

	render() {
		// console.log('App.props', this.props);
		// console.log('App.state', this.state);

		// console.log('app.state.view', this.state.view)

		let theView;

		switch(this.state.view.viewName) {
			case "primaryFactors":
				theView = <PrimaryFactors />
				break;
			case "secondaryFactors": 
				theView = <SecondaryFactors />
				break;
			case "personOutcome":
				theView = <PersonOutcome />
				break;
			case "quotes":
				theView = <Quotes />
				break;
			default: 
				theView = <Home />
				break;
		}

		return (
			theView
		);

	}
}

function mapStateToProps(state) {
	// console.log('state', state);
	return { // return data to become part of the props in the component
		appView: state.appView
	};
}

export default connect(mapStateToProps, null)(App);
