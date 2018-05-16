import React from 'react';
import { connect } from 'react-redux';

import ProfilePictureButton from '../_components/ProfilePictureButton';

class PersonWall extends React.Component {
	render() {
		// index in persons.json array = patient id
		const persons = this.props.persons;

		return (
			<div className={`person-wall ${this.props.classes}`}> {/*manually place the profile pics*/}
				<div className="row row-top">
					<ProfilePictureButton 
						type={persons[12].type}
						name={persons[12].name} />

					<ProfilePictureButton 
						type={persons[10].type}
						name={persons[10].name} />

					<ProfilePictureButton
						type={persons[4].type}
						name={persons[4].name} />

					<ProfilePictureButton 
						type={persons[3].type}
						name={persons[3].name} />

					<ProfilePictureButton 
						type={persons[2].type}
						name={persons[2].name} />
					
					<ProfilePictureButton 
						type={persons[7].type}
						name={persons[7].name} />
				</div>

				<div className="row row-middle">
					<ProfilePictureButton
						type={persons[6].type}
						name={persons[6].name} />

					<ProfilePictureButton
						type={persons[1].type}
						name={persons[1].name} />
				</div>
                                                                                                                         
				<div className="row row-bottom">
					<ProfilePictureButton 
						type={persons[8].type}
						name={persons[8].name} />
					
					<ProfilePictureButton 
						type={persons[9].type}
						name={persons[9].name} />
					
					<ProfilePictureButton 
						type={persons[0].type}
						name={persons[0].name} />
					
					<ProfilePictureButton 
						type={persons[5].type}
						name={persons[5].name} />
					
					<ProfilePictureButton 
						type={persons[11].type}
						name={persons[11].name} />
					
					<ProfilePictureButton 
						type={persons[13].type}
						name={persons[13].name} />
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