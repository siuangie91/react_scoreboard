import React from 'react';

import { toTitleCase } from '../_helpers';

const ProfilePicture = (props) => {
	const { type, name } = props;

	return (
		<div className="profile-picture">
			<span>
				<strong>{toTitleCase(name)}</strong><br />
				<em>{type}</em>
			</span>
		</div>	
	);
}

export default ProfilePicture;