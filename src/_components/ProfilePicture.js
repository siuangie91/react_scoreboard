import React from 'react';

class ProfilePicture extends React.Component {
	render() {
		// console.log('ProfilePicture.props.img', this.props.img);

		return (
			<img className="profile-picture"
				src={this.props.img}
				alt={this.props.alt}
			/>
		);
	}
}

export default ProfilePicture;