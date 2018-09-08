import React from 'react';

import ProfilePicture from './ProfilePicture';

const ProfilePictureButton = (props) => {
	const { type, name } = props;

	return (
		<a className="profile-picture-btn"
			type={type}>
			<ProfilePicture name={name} type={type} />
		</a>
	);
}

export default ProfilePictureButton;
