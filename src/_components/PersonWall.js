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
						img={persons[12].img} 
						alt={`${persons[12].id}. ${persons[12].name}`}
						type={persons[12].type}
						name={persons[12].name} />

					<ProfilePictureButton 
						img={persons[10].img} 
						alt={`${persons[10].id}. ${persons[10].name}`} 
						type={persons[10].type}
						name={persons[10].name} />

					<ProfilePictureButton img={persons[4].img} 
						alt={`${persons[4].id}. ${persons[4].name}`} 
						type={persons[4].type}
						name={persons[4].name} />

					<ProfilePictureButton img={persons[3].img} 
						alt={`${persons[3].id}. ${persons[3].name}`} 
						type={persons[3].type}
						name={persons[3].name} />

					<ProfilePictureButton img={persons[2].img} 
						alt={`${persons[2].id}. ${persons[2].name}`} 
						type={persons[2].type}
						name={persons[2].name} />
					
					<ProfilePictureButton img={persons[7].img} 
						alt={`${persons[7].id}. ${persons[7].name}`} 
						type={persons[7].type}
						name={persons[7].name} />
				</div>

				<div className="row row-middle">
					<ProfilePictureButton img={persons[6].img} 
						alt={`${persons[6].id}. ${persons[6].name}`} 
						type={persons[6].type}
						name={persons[6].name} />

					<ProfilePictureButton img={persons[1].img} 
						alt={`${persons[1].id}. ${persons[1].name}`} 
						type={persons[1].type}
						name={persons[1].name} />
				</div>
                                                                                                                         
				<div className="row row-bottom">
					<ProfilePictureButton img={persons[8].img} 
						alt={`${persons[8].id}. ${persons[8].name}`} 
						type={persons[8].type}
						name={persons[8].name} />
					
					<ProfilePictureButton img={persons[9].img} 
						alt={`${persons[9].id}. ${persons[9].name}`} 
						type={persons[9].type}
						name={persons[9].name} />
					
					<ProfilePictureButton img={persons[0].img} 
						alt={`${persons[0].id}. ${persons[0].name}`} 
						type={persons[0].type}
						name={persons[0].name} />
					
					<ProfilePictureButton img={persons[5].img} 
						alt={`${persons[5].id}. ${persons[5].name}`} 
						type={persons[5].type}
						name={persons[5].name} />
					
					<ProfilePictureButton img={persons[11].img} 
						alt={`${persons[11].id}. ${persons[11].name}`} 
						type={persons[11].type}
						name={persons[11].name} />
					
					<ProfilePictureButton img={persons[13].img} 
						alt={`${persons[13].id}. ${persons[13].name}`} 
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