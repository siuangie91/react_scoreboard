import React from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';

import { setPage, getPersons } from '../_actions';

import PersonWall from '../_components/PersonWall';
import NarrativePathButton from '../_components/NarrativePathButton';
import PersonTypeButton from '../_components/PersonTypeButton';


class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			page: "home",
			personWallClasses: []
		};
	}

	chooseBackground = () => {
		this.setState(prevState => {
			return {
				page: "persontype",
				personWallClasses: [...prevState.personWallClasses, "show-photos"]
			}
		});
	}

	chooseMindset = () => {
		// set appPage to quotes (personType is empty)
		this.props.setPage("quotes", "", "mindset");
	}

	chooseElf = () => {
		// set appPage to primary factors 
		this.props.setPage("primaryFactors", "elf", "background");

		// get only the elf persons
		this.props.getPersons("elf");
	}

	chooseDwarf = () => {
		// set appPage to primary factors 
		this.props.setPage("primaryFactors", "dwarf", "background");

		// get only the dwarf patients
		this.props.getPersons("dwarf");
	}


	render() {
		let bigButtons;

		switch(this.state.page) {
			case "persontype":
				bigButtons =
					<Fragment>
						<PersonTypeButton typename="elf" 
							clickHandler={this.chooseElf} />

						<PersonTypeButton typename="dwarf"
							clickHandler={this.chooseDwarf} />	
					</Fragment>
				break;

			case "home": 
			default:
				bigButtons = 
					<Fragment>
						<NarrativePathButton pathname="Background" 
							clickHandler={this.chooseBackground} />

						<NarrativePathButton pathname="Mindset"
							clickHandler={this.chooseMindset} />
					</Fragment>
				break;
		};

		return (
			<Fragment>
				<section id="home">
					<div className="main">
						<header>
							<h1>React Person Scoreboard</h1>
						</header>
						<div className="content"> 
							<PersonWall classes={this.state.personWallClasses} />

							<div className="big-buttons">
								{bigButtons}
							</div>
						</div>
					</div>
				</section>
			</Fragment>
		);
	}
}

function mapStateToProps(state) {
	// console.log('state', state);
	return { // return data to become part of the props in the component
		persons: state.persons
	};
}

export default connect(mapStateToProps, { setPage, getPersons })(Home);