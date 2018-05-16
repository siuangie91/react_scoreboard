import React from 'react';

import { toTitleCase } from '../_helpers';

class ProfilePicture extends React.Component {
	render() {
		// console.log('ProfilePicture.props.img', this.props.img);

		return (
			<div className="profile-picture">
				<span>
					<strong>{toTitleCase(this.props.name)}</strong><br />
					<em>{this.props.type}</em>
				</span>
			</div>	
		);
	}
}

export default ProfilePicture;