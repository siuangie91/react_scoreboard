import React from 'react';
import { connect } from 'react-redux';

import people_json from '../_data/people.json';

import ProfilePictureButton from '../_components/ProfilePictureButton';

import { toTitleCase } from '../_helpers';

class PersonOutcome extends React.Component {
	getFactorsOutcomes = () => {
		const selectedPersons = this.props.selectedPersons;
		const selectedFactors = this.props.selectedFactors;

		const theThreePersons = selectedPersons
			.map(person => { // for each selectedPerson, add up their factor values, and store the person in a new array with their id, name, and total score
				// console.log('----------------');
				// console.log('current person:', person.name);

				const grandTotal = selectedFactors
					.map(factor => {
						// get the primary factor value
						const primaryFactorValue = person.primary_factors[factor.name].value;

						const subfactorTotal = factor.subfactors
							 .map(subfactor => person.primary_factors[factor.name].subfactors[subfactor.name])
							 .reduce((subfactorTotal, currentSubfactorValue) => subfactorTotal + currentSubfactorValue);
						// console.log('subfactor total', subfactorTotal);

						const factorTotal = primaryFactorValue + subfactorTotal;
						return factorTotal;
					})
					.reduce((grandTotal, currentFactorTotal) => grandTotal + currentFactorTotal);

				return {id: +person.id, name: person.name, grandTotal: grandTotal}; // return object literal with person id, name, and grand total
			})
			.sort((a, b) => {
				if(+a.grandTotal === +b.grandTotal) { // if they are equal, sort by alphabetical order (add "+" to coerce as number)
					const aName = a.name.toLowerCase(); // in case there's any case mismatch
					const bName = b.name.toLowerCase();

					if(aName < bName) return -1;
					else if (aName > bName) return 1;
					return 0;
				}
				else { // if not equal, sort by descending order
					return +b.grandTotal - +a.grandTotal;
				}
			})
			.slice(0,3); // get only the first 3

		return theThreePersons;
	}

	getQuoteOutcomes = () => {
		return this.props.selectedPersons;
	}

	getOutcomes = () => {
		return (this.props.path === "background") ? this.getFactorsOutcomes() : this.getQuoteOutcomes();
	}

	render() {
		return (
			<section id="person-outcome">
				<div className="main">
					<header>
						<h1>
							{
								(this.props.path === "background") ?
									"Here are the people with the highest scores based on the chosen factors!" :
									"Here are the people associated with that quote!"
							}
						</h1>
					</header>
					<div className="content"> 
						{
							this.getOutcomes().map((person, i) => {
								const personFromData = people_json.find(item => item.id === person.id); // get the corresponding person from the json file

								return (
									<div className="outcome" key={i}>
										<ProfilePictureButton 
											type={personFromData.type}
											name={personFromData.name}
											img={personFromData.img} 
											alt={personFromData.name} />
										<h3>{toTitleCase(personFromData.name)}, {personFromData.age}</h3>
										{
											(this.props.path === "background") ?
												<h3>Score: {person.grandTotal}</h3> : ""
										}	
										<ul className="list">
											{
												personFromData.factoids.map((factoid, i) => {
													return (
														<li key={i}>{factoid}</li>
													);
												})
											}
										</ul>
									</div>
								)
							})
						}
					</div>
				</div>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return {
		selectedFactors: state.selectedFactors,
		selectedPersons: state.selectedPersons,
		path: state.appView.path
	}
}

export default connect(mapStateToProps, null)(PersonOutcome);