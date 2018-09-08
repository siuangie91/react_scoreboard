import React from 'react';
import { connect } from 'react-redux';

import ProfilePictureButton from '../_components/ProfilePictureButton';

import people_json from '../_data/people.json';

class PersonWall extends React.Component {
	render() {
		const persons = {};
		people_json.forEach(json => {
			persons[json.name] = null;
		});

		this.props.persons.forEach(person => {
			persons[person.name] = person;
		});

		return ( /*manually place the profile pics (this was the requirement in the original ask for this proj)*/
			<div className={`person-wall ${this.props.classes}`}>
				<div className="row row-top">
					<ProfilePictureButton 
						type={persons.targaryan.type}
						name={persons.targaryan.name} />

					<ProfilePictureButton 
						type={persons.rhydol.type}
						name={persons.rhydol.name} />

					<ProfilePictureButton
						type={persons.ianescqus.type}
						name={persons.ianescqus.name} />

					<ProfilePictureButton 
						type={persons.gravit.type}
						name={persons.gravit.name} />

					<ProfilePictureButton 
						type={persons.edthartus.type}
						name={persons.edthartus.name} />
					
					<ProfilePictureButton 
						type={persons.lysandria.type}
						name={persons.lysandria.name} />
				</div>

				<div className="row row-middle">
					<ProfilePictureButton
						type={persons.jhangor.type}
						name={persons.jhangor.name} />

					<ProfilePictureButton
						type={persons.braddick.type}
						name={persons.braddick.name} />
				</div>
                                                                                                                         
				<div className="row row-bottom">
					<ProfilePictureButton 
						type={persons.moraudin.type}
						name={persons.moraudin.name} />
					
					<ProfilePictureButton 
						type={persons.maye.type}
						name={persons.maye.name} />
					
					<ProfilePictureButton 
						type={persons.anahga.type}
						name={persons.anahga.name} />
					
					<ProfilePictureButton 
						type={persons.jayon.type}
						name={persons.jayon.name} />
					
					<ProfilePictureButton 
						type={persons.samgamgee.type}
						name={persons.samgamgee.name} />
					
					<ProfilePictureButton 
						type={persons.vaporeon.type}
						name={persons.vaporeon.name} />
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	// console.log('state', state);
	return { // return data to become part of the props in the component
		persons: state.persons
	};
}

export default connect(mapStateToProps, null)(PersonWall);