import React from 'react';
import { connect } from 'react-redux';

import quotes_json from '../_data/quotes.json';
import { setPage, getPersonById } from '../_actions';

import PersonWall from '../_components/PersonWall';
import QuoteButton from '../_components/QuoteButton';

class Quotes extends React.Component {
	selectQuote = (target) => {
		// get the patients by id
		const selectedSpeakersArr = target.getAttribute('speakers').split(','); // since attr is a string 
		for(let speaker of selectedSpeakersArr) {
			this.props.getPersonById(+speaker); // use "+" to make it parsed as a num
		}

		// set appPage to person outcome
		this.props.setPage("personOutcome", this.props.personType, this.props.path);
	}

	render() {
		return (
			<section id="quotes">
				<div className="main">
					<PersonWall classes={`show-photos`} />
					<header>
						<h1>Choose a quote:</h1>
					</header>
					<div className="content">
						<div className="quotes-container quotes-container-elf">
							{
								quotes_json.filter(item => item.person_type === "elf")
									.map((quote, i) => {
										return (
											<QuoteButton key={i}
												type={quote.person_type}
												text={quote.text}
												speakers={quote.speaker_id}
												touchHandler={e => {
													e.preventDefault(); // prevent tap from "falling through" to next view
													this.selectQuote(e.currentTarget)
												}} />
									);
								})
							}
						</div>
						<div className="quotes-container quotes-container-dwarf">
							{
								quotes_json.filter(item => item.person_type === "dwarf")
									.map((quote, i) => {
										return (
											<QuoteButton key={i}
												type={quote.person_type}
												text={quote.text}
												speakers={quote.speaker_id}
												touchHandler={e => {
													e.preventDefault(); // prevent tap from "falling through" to next view
													this.selectQuote(e.currentTarget)
												}} />
									);
								})
							}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return {
		personType: state.appView.personType,
		path: state.appView.path
	}
}

export default connect(mapStateToProps, { setPage, getPersonById })(Quotes);