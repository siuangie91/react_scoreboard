import React from 'react';
import { connect } from 'react-redux';

import factors_json from '../_data/factors.json';
import { setPage, setFactors } from '../_actions';

import PersonWall from '../_components/PersonWall';
import FactorButton from '../_components/FactorButton';


class PrimaryFactors extends React.Component {
	constructor() {
		super();

		this.minFactors = 1;
		this.maxFactors = 3;

		this.state = {
			numFactorsSelected: 0,
			enableSubmit: false,
			selectedFactors: []
		}
	}

	selectFactor = (target) => {
		const theFactor = target;

		if(!target.classList.contains('active')) { // if tapped btn is not already active
			if(this.state.numFactorsSelected < this.maxFactors) { // only if numFactorsSelected < maxFactors
				target.classList.add('active'); // set as active
				this.setState(prevState => {
					return { 
						numFactorsSelected: ++prevState.numFactorsSelected, // increment numFactorsSelected
						enableSubmit: true, // enable submit button
						selectedFactors: [...prevState.selectedFactors, {name: theFactor.getAttribute("name"), subfactors: []}] // add to selectedFactors
					};
				});
			} else { // don't do anything!
				console.log(`cannot select any more than ${this.maxFactors}`);
			}
		} else {
			target.classList.remove('active'); // remove active class
			this.setState(prevState => {
				let shouldEnableSubmit = (prevState.numFactorsSelected - 1 >= this.minFactors) ? true : false; // decide whether to disable submit button
				return { 
					numFactorsSelected: --prevState.numFactorsSelected, // decrement numFactorsSelected
					enableSubmit: shouldEnableSubmit, // dis/enable submit btn as appropriate
					selectedFactors: prevState.selectedFactors.filter(item => item.name !== theFactor.getAttribute("name")) // remove from selectedFactors
				};
			});
		}
	}

	handleSubmit = () => {
		this.props.setFactors(this.state.selectedFactors); // set factors in redux store

		// set appPage to secondary factors 
		this.props.setPage("secondaryFactors", this.props.personType, this.props.path);
	}

	render() {
		return (
			<section id="primary-factors">
				<div className="main">
					<PersonWall classes={`show-photos show-${this.props.personType}`}/>
					<header>
						<h1>Choose up to 3 factors:</h1>
					</header>
					<div className="factors-container">
						{
							factors_json.map((factor, i) => {
								return (
									<FactorButton key={i}
										field={factor.name} // name of the field in people.json
										buttonCopy={factor.buttonCopy} // text shown on button
										touchHandler={e => {
											this.selectFactor(e.currentTarget)
										}} />	
								);
							})
						}
					</div>
					{
						(this.state.enableSubmit) ? 
						<button className="submit"
							onClick={this.handleSubmit}>
							Submit</button>
						:
						<button className="submit" disabled>Submit</button>	
					}
				</div>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return {
		selectedPersons: state.selectedPersons,
		personType: state.appView.personType,
		path: state.appView.path
	};
}

export default connect(mapStateToProps, { setPage, setFactors })(PrimaryFactors);