import React from 'react';

import ProfilePicture from './ProfilePicture';

class ProfilePictureButton extends React.Component {
	render() {
		// console.log('ProfilePictureButton.props.img', this.props.img);
		return (
			<a className="profile-picture-btn"
				type={this.props.type}>
				<ProfilePicture name={this.props.name} type={this.props.type} />
			</a>
		);
	}
}

export default ProfilePictureButton;
