import React from 'react';
import { connect } from 'react-redux';

import people_json from '../_data/people.json';

import ProfilePictureButton from '../_components/ProfilePictureButton';

import { toTitleCase } from '../_helpers';

class PersonOutcome extends React.Component {
	getFactorsOutcomes = () => {
		const selectedPersons = this.props.selectedPersons;
		const selectedFactors = this.props.selectedFactors;
		// console.log('selectedPersons', selectedPersons);
		// console.log('selectedFactors', selectedFactors);

		// for each selectedPerson, add up their factor values, and store the person in a new array with their id, name, and total score
		const personsSummed = selectedPersons.map(person => {
			// console.log('----------------');
			// console.log('current person:', person.name);

			let totals = [];
			for(var factor of selectedFactors) {
				// console.log('current factor', factor.name);
				// console.log('current factor\'s subfactors', factor.subfactors);

				// get the primary factor value
				const primaryFactorValue = person.primary_factors[factor.name].value; 
				// console.log('person', person.name, 'value', primaryFactorValue);

				// get the sum of values of the subfactors of the current primary factor
				let subfactorTotal = 0; // init subfactor sum
				for(var subfactor of factor.subfactors) {
					// console.log('subfactor', subfactor.name);

					// for each subfactor, grab the value of that subfactor from the current person
					const thisSubfactorValue = person.primary_factors[factor.name].subfactors[subfactor.name];
					// console.log('thisSubfactorValue', thisSubfactorValue);

					subfactorTotal += thisSubfactorValue;
				}
				// console.log('subfactor total', subfactorTotal);

				const factorTotal = primaryFactorValue + subfactorTotal;
				// console.log(`factorTotal for ${factor.name} = ${primaryFactorValue} + ${subfactorTotal} = `, factorTotal);

				totals.push(factorTotal); // push into totals array
			}
			// console.log('totals', totals);

			const grandTotal = totals.reduce((total, num) => total + num);
			// console.log('grandTotal', grandTotal);

			return {id: +person.id, name: person.name, grandTotal: grandTotal}; // return object literal with person id, name, and grand total
		}); 
		// console.log('personsSummed', personsSummed);

		const sortedPersonsSummed = personsSummed.sort((a, b) => { // sort in descending order
			return +b.grandTotal - +a.grandTotal; // add a "+" in the beginning to make sure the id is parsed as a num, not a string
		});
		// console.log('sortedPersonsSummed', sortedPersonsSummed);

		const theThreePersons = sortedPersonsSummed.slice(0,3);
		// console.log('theThreePersons', theThreePersons);

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