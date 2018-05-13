import React from 'react';
import { connect } from 'react-redux';

import factors_json from '../_data/factors.json';

import { setPage, setFactors, clearFactors } from '../_actions';

import PersonWall from '../_components/PersonWall';
import FactorButton from '../_components/FactorButton';

class SecondaryFactors extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			// selectedFactors: this.props.selectedFactors,
			selectedSubfactors: []
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		// only rerender when selectedSubfactors change
		if(this.state.selectedSubfactors !== nextState.selectedSubfactors) {
			return true;
		}
		return false;
	}

	selectSubfactor = (target) => {
		// console.log('tapped!', target.getAttribute("name"));
		const theSubfactorName = target.getAttribute("name");
		const theSubfactorCategory = target.getAttribute("category");

		if(!target.classList.contains('active')) {
			target.classList.add('active'); // set as active
			this.setState(prevState => {
				return {
					selectedSubfactors: [...prevState.selectedSubfactors, {name: theSubfactorName, category: theSubfactorCategory}] // add to selectedSubfactors
				}
			});
		} else {
			target.classList.remove('active'); // remove active class
			this.setState(prevState => {
				return {
					selectedSubfactors: prevState.selectedSubfactors.filter(item => item.name !== theSubfactorName) // remove from selectedSubfactors
				}
			});
		}
	}

	handleSubmit = () => {
		// console.log('submitted', this.state.selectedSubfactors);
		// console.log('Primary factors', this.props.selectedFactors);
		
		let subfactors = this.state.selectedSubfactors;
		// console.log('subfactors', subfactors);
		let primaryFactors = this.props.selectedFactors;
		// console.log('primaryFactors', primaryFactors);

		let fullCollection = [];
		//for each primary factor, find the subfactors whose categories match and store it in its subfactors array property
		for(var primaryFactor of primaryFactors) {
			// console.log('primaryFactor', primaryFactor);

			const correspondingSubfactors = subfactors.filter(item => item.category === primaryFactor.name); // find the corresponding subfactors
			// console.log('correspondingSubfactors', correspondingSubfactors);

			primaryFactor.subfactors = [...primaryFactor.subfactors, ...correspondingSubfactors]; // store them in the primaryFactor's subfactors property

			// console.log('primaryFactor updated', primaryFactor);
			fullCollection.push(primaryFactor); // push into fullCollection array
		}
		
		// console.log('fullCollection', fullCollection);
		this.props.clearFactors();
		this.props.setFactors(fullCollection); // store the fullCollection in Redux store

		// set appPage to patient outcome
		this.props.setPage("personOutcome", this.props.personType, this.props.path);

	}

	render() {
		// console.log('selectedSubfactors', this.state);

		return (
			<section id="secondary-factors">
				<div className="main">
					<PersonWall classes={`show-photos show-${this.props.personType} stay`}/>
					<header>
						<h1>Choose as many subfactors as desired:</h1>
					</header>
					<div className="factors-container">
						{
							this.props.selectedFactors.map((factor, i) => {
								// get the factor that matches what was chosen
								let currFactor = factors_json.find(item => item.name === factor.name);

								// console.log('currFactor', currFactor);
								return (
									<FactorButton key={i}
										field={currFactor.name}
										buttonCopy={currFactor.buttonCopy}
										subfactors={currFactor.subfactors}
										subfactorToggler={e => this.selectSubfactor(e.currentTarget)} />
								)
							})
						}
					</div>
					<button className="submit"
						onClick={this.handleSubmit}>
						Submit</button>
				</div>
			</section>

		);
	}
}

function mapStateToProps(state) {
	return {
		selectedFactors: state.selectedFactors,
		selectedPersons: state.selectedPersons,
		personType: state.appView.personType,
		path: state.appView.path
	}
}

export default connect(mapStateToProps, { setPage, setFactors, clearFactors })(SecondaryFactors);