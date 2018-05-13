import React from 'react';

import ProfilePicture from './ProfilePicture';

class ProfilePictureButton extends React.Component {
	render() {
		// console.log('ProfilePictureButton.props.img', this.props.img);
		return (
			<a className="profile-picture-btn"
				type={this.props.type} >
				<ProfilePicture img={this.props.img} alt={this.props.alt} />
			</a>
		);
	}
}

export default ProfilePictureButton;
